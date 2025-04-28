import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_core/firebase_core.dart';
import 'dart:developer' as developer;
import 'package:shared_preferences/shared_preferences.dart';

// Flag to track Firebase initialization status
bool _isFirebaseInitialized = false;

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  try {
    // 🔥 CONEXIÓN FIREBASE: Inicialización de Firebase 🔥
    await Firebase.initializeApp();
    _isFirebaseInitialized = true;
    developer.log('Firebase initialized successfully', name: 'Firebase');
    
    // Check if we can access Firestore
    try {
      // 🔥 CONEXIÓN FIREBASE: Obtención de instancia Firestore 🔥
      FirebaseFirestore firestore = FirebaseFirestore.instance;
      developer.log('Firestore instance obtained successfully', name: 'Firebase');
      
      // Try a simple operation to verify connectivity
      await firestore.collection('test').doc('test').set({'test': true});
      developer.log('Firestore write test successful', name: 'Firebase');
      
      // Delete the test document
      await firestore.collection('test').doc('test').delete();
    } catch (e) {
      developer.log('Error testing Firestore: $e', name: 'Firebase');
    }
  } catch (e) {
    _isFirebaseInitialized = false;
    developer.log('Error initializing Firebase: $e', name: 'Firebase');
  }
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
  String locationMessage = "📍 Ubicación no obtenida";
  bool isLoading = false;
  FirebaseFirestore? _firestore;
  final TextEditingController _deviceIdController = TextEditingController();
  bool isValidId = false;

  @override
  void initState() {
    super.initState();
    _checkLocationPermission();
    _loadSavedDeviceId();
    _initFirestore();
  }

  void _initFirestore() {
    if (_isFirebaseInitialized) {
      try {
        // 🔥 CONEXIÓN FIREBASE: Inicialización de Firestore en el estado 🔥
        _firestore = FirebaseFirestore.instance;
        developer.log('Firestore instance initialized in state', name: 'Firestore');
      } catch (e) {
        developer.log('Error getting Firestore instance: $e', name: 'Firestore');
      }
    } else {
      developer.log('Cannot initialize Firestore because Firebase is not initialized', name: 'Firestore');
    }
  }

  @override
  void dispose() {
    _deviceIdController.dispose();
    super.dispose();
  }

  Future<void> _loadSavedDeviceId() async {
    final prefs = await SharedPreferences.getInstance();
    final savedId = prefs.getString('device_id');
    if (savedId != null && savedId.isNotEmpty) {
      setState(() {
        _deviceIdController.text = savedId;
        _validateDeviceId(savedId);
      });
    }
  }

  Future<void> _saveDeviceId(String id) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('device_id', id);
  }

  void _validateDeviceId(String value) {
    setState(() {
      // ONLY 6 CHARACTERS
      isValidId = value.length == 6;
    });
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
        locationMessage = "⚠️ Los servicios de ubicación están desactivados";
      });
      return;
    }

    // Check location permission
    LocationPermission permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
      if (permission == LocationPermission.denied) {
        setState(() {
          locationMessage = "⛔ Permiso de ubicación denegado";
        });
        return;
      }
    }
    
    if (permission == LocationPermission.deniedForever) {
      setState(() {
        locationMessage = "🚫 Los permisos de ubicación están permanentemente denegados";
      });
      return;
    }

    setState(() {
      locationMessage = "✅ Conexión con base de datos establecida.\nPulse el botón para obtener ubicación";
    });
  }

  Future<void> _getLocationAndSend() async {
    // Check if ID is valid
    if (!isValidId) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('⚠️ Por favor, introduce un ID de dispositivo válido'),
          backgroundColor: Colors.red,
        ),
      );
      return;
    }
    
    // First check if Firestore is available
    if (_firestore == null && _isFirebaseInitialized) {
      try {
        // 🔥 CONEXIÓN FIREBASE: Inicialización de Firestore durante el envío 🔥
        _firestore = FirebaseFirestore.instance;
        developer.log('Firestore instance initialized during location send', name: 'Firestore');
      } catch (e) {
        developer.log('Error getting Firestore instance during send: $e', name: 'Firestore');
      }
    }
    
    if (_firestore == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('🚫 Firebase no está disponible. No se puede guardar la ubicación.'),
          backgroundColor: Colors.red,
        ),
      );
      return;
    }
    
    final deviceId = _deviceIdController.text.trim();
    
    setState(() {
      isLoading = true;
      locationMessage = "🔍 Obteniendo ubicación...";
    });

    try {
      // Check if location services are enabled
      bool serviceEnabled = await Geolocator.isLocationServiceEnabled();
      if (!serviceEnabled) {
        setState(() {
          isLoading = false;
          locationMessage = "⚠️ Los servicios de ubicación están desactivados";
        });
        return;
      }

      // Check location permission
      LocationPermission permission = await Geolocator.checkPermission();
      if (permission == LocationPermission.denied) {
        permission = await Geolocator.requestPermission();
        if (permission == LocationPermission.denied) {
          setState(() {
            locationMessage = "⛔ Permiso de ubicación denegado";
          });
          return;
        }
      }
      
      if (permission == LocationPermission.deniedForever) {
        setState(() {
          isLoading = false;
          locationMessage = "🚫 Los permisos de ubicación están permanentemente denegados";
        });
        return;
      }

      // Get current position
      Position position = await Geolocator.getCurrentPosition(
        desiredAccuracy: LocationAccuracy.high,
        timeLimit: const Duration(seconds: 15),
      );
      
      // Try to save to Firestore
      try {
        developer.log('Attempting to save to collection: ubicaciones, document: $deviceId', name: 'Firestore');
        developer.log('Data to save: lat=${position.latitude}, lon=${position.longitude}', name: 'Firestore');
        
        // Data to save
        Map<String, dynamic> locationData = {
          "latitud": position.latitude,
          "longitud": position.longitude,
          "ultimaActualizacion": FieldValue.serverTimestamp(),
        };
        
        // Log the data we're going to send
        developer.log('Formatted data: $locationData', name: 'Firestore');
        
        // Try to save the data
        // 🔥 CONEXIÓN FIREBASE: Envío de datos a Firestore 🔥
        await _firestore!.collection("ubicaciones").doc(deviceId).set(locationData);
        
        developer.log('Data successfully saved to Firestore', name: 'Firestore');
        
        // Save the device ID in preferences
        await _saveDeviceId(deviceId);
        
        setState(() {
          locationMessage = "✅ Ubicación enviada correctamente\nLat: ${position.latitude}, Lon: ${position.longitude}";
        });
      } catch (e) {
        developer.log('Error saving to Firestore: $e', name: 'Firestore');
        
        setState(() {
          if (e.toString().contains('permission-denied') || e.toString().contains('PERMISSION_DENIED')) {
            locationMessage = "❌ Error: No tienes permisos para guardar en Firestore";
          } else if (e.toString().contains('network')) {
            locationMessage = "❌ Error de red: Verifica tu conexión a Internet :(";
          } else {
            locationMessage = "❌ Error al guardar: $e";
          }
        });
      }
    } catch (e) {
      setState(() {
        locationMessage = "❌ Error: $e";
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
            const Text("WIMK-GPS  WHERE IS MY KID?", style: TextStyle(fontSize: 18)),
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
              const SizedBox(height: 20),
              
              // Device ID field
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 15, vertical: 5),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(10),
                  border: Border.all(
                    color: isValidId || _deviceIdController.text.isEmpty ? Colors.grey : Colors.red,
                    width: 1.5,
                  ),
                ),
                child: TextField(
                  controller: _deviceIdController,
                  decoration: const InputDecoration(
                    border: InputBorder.none,
                    hintText: '📱 Introduce tu ID de dispositivo',
                    prefixIcon: Icon(Icons.perm_device_information),
                  ),
                  style: const TextStyle(fontSize: 16),
                  textAlign: TextAlign.center,
                  onChanged: _validateDeviceId,
                ),
              ),
              
              const SizedBox(height: 10),
              Text(
                '📝 Este ID debe coincidir con el ID que se dió al crear una cuenta en nuestra página',
                style: TextStyle(
                  fontSize: 12, 
                  color: Colors.grey[600],
                  fontStyle: FontStyle.italic,
                ),
                textAlign: TextAlign.center,
              ),
              
              const SizedBox(height: 30),
              isLoading 
                ? const CircularProgressIndicator()
                : ElevatedButton.icon(
                    onPressed: _getLocationAndSend,
                    icon: const Icon(Icons.location_on),
                    label: const Text("📍 Enviar Ubicación"),
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
