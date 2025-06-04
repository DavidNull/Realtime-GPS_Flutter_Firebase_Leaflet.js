import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_core/firebase_core.dart';
import 'dart:developer' as developer;

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Where Is My Kid',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: const LocationScreen(),
    );
  }
}

class LocationScreen extends StatefulWidget {
  const LocationScreen({super.key});

  @override
  _LocationScreenState createState() => _LocationScreenState();
}

class _LocationScreenState extends State<LocationScreen> {
  String locationMessage = "Ubicación no obtenida";
  bool isLoading = false;
  final FirebaseFirestore _firestore = FirebaseFirestore.instance;

  @override
  void initState() {
    super.initState();
    _checkLocationPermission();
  }

  Future<void> _checkLocationPermission() async {
    // Explicitly request location permissions first
    Map<Permission, PermissionStatus> statuses = await [
      Permission.location,
      Permission.locationAlways,
      Permission.locationWhenInUse,
    ].request();
    
    developer.log('Location permission status: ${statuses[Permission.location]}', name: 'Permissions');
    
    // Check if location services are enabled
    bool serviceEnabled = await Geolocator.isLocationServiceEnabled();
    if (!serviceEnabled) {
      setState(() {
        locationMessage = "Los servicios de ubicación están desactivados";
      });
      return;
    }

    // Check location permission
    LocationPermission permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
      if (permission == LocationPermission.denied) {
        setState(() {
          locationMessage = "Permiso de ubicación denegado";
        });
        return;
      }
    }
    
    if (permission == LocationPermission.deniedForever) {
      setState(() {
        locationMessage = "Los permisos de ubicación están permanentemente denegados, no se puede solicitar permiso";
      });
      return;
    }

    setState(() {
      locationMessage = "Permiso concedido, pulse el botón para obtener ubicación";
    });
  }

  Future<void> _getLocationAndSend() async {
    setState(() {
      isLoading = true;
      locationMessage = "Obteniendo ubicación...";
    });

    try {
      // Check if location services are enabled
      bool serviceEnabled = await Geolocator.isLocationServiceEnabled();
      if (!serviceEnabled) {
        setState(() {
          isLoading = false;
          locationMessage = "Los servicios de ubicación están desactivados";
        });
        return;
      }

      // Check location permission
      LocationPermission permission = await Geolocator.checkPermission();
      if (permission == LocationPermission.denied) {
        permission = await Geolocator.requestPermission();
        if (permission == LocationPermission.denied) {
          setState(() {
            isLoading = false;
            locationMessage = "Permiso de ubicación denegado";
          });
          return;
        }
      }
      
      if (permission == LocationPermission.deniedForever) {
        setState(() {
          isLoading = false;
          locationMessage = "Los permisos de ubicación están permanentemente denegados";
        });
        return;
      }

      // Get current position
      Position position = await Geolocator.getCurrentPosition(
        desiredAccuracy: LocationAccuracy.high,
        timeLimit: const Duration(seconds: 15),
      );
 
  
      await _firestore.collection("ubicaciones").doc("usuario1").set({
        "latitud": position.latitude,
        "longitud": position.longitude,
        "timestamp": FieldValue.serverTimestamp(),
        "accuracy": position.accuracy,
        "altitude": position.altitude,
        "speed": position.speed,
      });
    
      
      setState(() {
        locationMessage = "Ubicación enviada exitosamente!\nLat: ${position.latitude}\nLon: ${position.longitude}\nPrecisión: ${position.accuracy}m";
      });
    } catch (e) {
      setState(() {
        locationMessage = "Error: $e";
      });
    } finally {
      setState(() {
        isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    // Debug message to verify if this point is reached
    developer.log('Building LocationScreen widget', name: 'LocationScreen');
    
    return Scaffold(
      appBar: AppBar(
        title: Row(
          children: [
            Builder(
              builder: (context) {
                try {
                  developer.log('Attempting to load PNG', name: 'PNG');
                  return Image.asset(
                    'assets/Logo App.png',
                    height: 36,
                    width: 36,
                    fit: BoxFit.contain,
                  );
                } catch (e) {
                  developer.log('Error loading PNG: $e', name: 'PNG');
                  return const Icon(Icons.error, color: Colors.red);
                }
              }
            ),
            const SizedBox(width: 10),
            const Text("WIMK-GPS", style: TextStyle(fontSize: 18)),
          ],
        ),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                padding: const EdgeInsets.all(15),
                decoration: BoxDecoration(
                  color: Colors.grey[200],
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Text(
                  locationMessage,
                  style: const TextStyle(fontSize: 16),
                  textAlign: TextAlign.center,
                ),
              ),
              const SizedBox(height: 30),
              isLoading 
                ? const CircularProgressIndicator()
                : ElevatedButton.icon(
                    onPressed: _getLocationAndSend,
                    icon: const Icon(Icons.location_on),
                    label: const Text("Obtener Ubicación"),
                    style: ElevatedButton.styleFrom(
                      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                    ),
                  ),
            ],
          ),
        ),
      ),
    );
  }
}
