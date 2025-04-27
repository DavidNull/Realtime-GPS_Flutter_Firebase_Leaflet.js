# Where is my kid? - Real-Time GPS Tracking System 🌍
<img src="Docs/img/Logo_App.png" width="200" height="200">



## Final Degree Project - Network Systems Administration (ASIR)

**Author**: DavidNull  
**Date**:  2025

## 📋 Description

"Where is my kid? 🧒🏻🌍" is a real-time GPS tracking system 📍 designed as a Final Degree Project for the Network Systems Administration (ASIR) course. 
This project provides a solution that allows parents or legal tutors to monitor their children's location in real-time through an easy to understand web interface 🌐  and a mobile application 📱 :)


## ✨ Features

- 🔄 **Real-time tracking**: Continuous device location updates
- 🔒 **Authentication system**: Secure access via email and password
- 📱 **Cross-platform mobile app**: Developed with Flutter for Android
- 🌐 **Responsive web interface**: Access from any device with a browser
- 🗺️ **Interactive map visualization**: Using Leaflet for geographic representation
- ☁️ **Cloud storage**: Firebase Firestore for data management
- 🔑 **Unique ID system**: Secure association between devices and accounts

## 🧩 System Components

The project consists of two main components:

### 1. Web Application 💻

![Web Screenshot](Docs/img/web_screenshot.png)

The web interface allows users to:
- Register and log in to the system
- Check the current location of the linked device

**Technologies used**:
- HTML5, CSS3, and JavaScript for the frontend
- Leaflet.js for map visualization
- Firebase Authentication for user management
- Firebase Firestore for data storage
- Responsive design adaptable to different devices 📱💻

### 2. Mobile Application (WIMK-GPS) 📲

![App Screenshot](Docs/img/app_screenshot.png)

The mobile application(developed with Flutter) offers:
- Real-time location sending
- Device ID configuration
- Simple and easy-to-use interface

**Technologies used**:
- Flutter framework for cross-platform development
- Geolocator for location services
- Firebase SDK for database communication
- Shared Preferences for local storage of settings

## 🏗️ System Architecture

![Architecture Diagram](Docs/img/architecture.png)

## 🚀 Setup and Installation

### Prerequisites 📝
- Flutter SDK (2.0 or higher)
- Firebase account
- Node.js (for web development tools)
- Git

### Web Application Installation 🖥️
```bash
# Clone the repository
git clone https://github.com/DavidNull/Realtime-GPS_Flutter_Firebase_Leaflet.js

# Navigate to the web directory
cd Realtime-GPS_Flutter_Firebase_Leaflet.js/Website

# If you want to see it locally open index.html in the browser or use a local server
# For example, with Python:
python -m http.server 8000
# Will have a public url soon!
```

### Mobile Application Installation 📱
```bash
# Navigate to the Flutter app directory
cd Realtime-GPS_Flutter_Firebase_Leaflet.js/wimk_gps

# Get dependencies
flutter pub get

# Run the application in debug mode
flutter run

# To generate installation APK
flutter build apk
```

## 🔐 Security Considerations

The system implements several security measures:

- Firebase-based authentication with **verified email**
- Encrypted data transmission via **HTTPS**
- **Unique ID system** to link devices and accounts
- Secure credential storage

## 🔮 For Project V2

ADD some Fronend Framework
FIX profile page functionality


## 👨‍💻 Author

This project was created and is maintained by DavidNull.

---

© 2025 David Cela Pedraza 🐰 

![Tepig](https://media1.tenor.com/m/D8G2647I_Z4AAAAC/tepig-sleep.gif)
