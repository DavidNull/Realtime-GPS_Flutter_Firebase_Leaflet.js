# Where is my kid? - Real-Time GPS Tracking System 🌍
<img src="Docs/img/Logo_App.png" width="200" height="200">

## Final Degree Project - Network Systems Administration (ASIR)

**Author**: David Cela Pedraza  
**Date**: 2025

## 📋 Description

"Where is my kid? 🧒🏻🌍" is a real-time GPS tracking system 📍 designed as a Final Degree Project for the Network Systems Administration (ASIR) course. 
This project provides a solution that allows parents or legal tutors to monitor their children's location in real-time through a modern web interface 🌐 and a mobile application 📱.

## ✨ Features

- 🔄 **Real-time tracking**: Continuous device location updates through Firebase Realtime Database
- 🔒 **Authentication system**: Secure access via email and password using Firebase Authentication
- 📱 **Cross-platform mobile app**: Developed with Flutter for Android with background location services
- 🌐 **Modern web interface**: Built with Vue.js 3 (Composition API) and Tailwind CSS
- 🧩 **Model-View-Presenter**: Clean architecture pattern implemented for better code organization
- 🗺️ **Interactive map visualization**: Using Leaflet.js with custom markers for intuitive location tracking
- ☁️ **Cloud storage**: Firebase Firestore for secure, scalable data management
- 🔑 **Unique ID system**: Device-account association with secure device identification
- 🔄 **Dynamic page title**: Changing titles to enhance user experience

## 🧩 System Components

The project consists of two main components:

### 1. Web Application 💻

![Web Screenshot](Docs/img/web_screenshot.png)

The web interface allows users to:
- Register and log in to the system with email verification
- Check the current location of the linked device in real-time on an interactive map
- View detailed information about the device's location (coordinates, last update time)
- Manage their profile information

**Technologies used**:
- **Vue.js 3**: Modern reactive framework with Composition API
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Vite**: Next-generation frontend tooling for fast development
- **Leaflet.js**: Interactive maps with custom markers
- **Firebase Authentication**: Secure user management
- **Firebase Firestore**: Real-time database for location data
- **Pinia**: State management for Vue 3
- **Vue Router**: Client-side routing
- **PostCSS**: For CSS processing with plugins

### 2. Mobile Application (WIMK-GPS) 📲

![App Screenshot](Docs/img/app_screenshot.png)

The mobile application (developed with Flutter) offers:
- Real-time location sending with background service capabilities
- Secure device ID configuration and storage
- Battery-optimized location services
- Simple and intuitive user interface

**Technologies used**:
- **Flutter framework**: For cross-platform development
- **Geolocator package**: For precise location services
- **Firebase SDK**: For secure database communication
- **Shared Preferences**: For local storage of settings and device ID

## 🏗️ System Architecture

![Architecture Diagram](Docs/img/architecture.png)

The system uses a clean architecture approach with:
1. **Firebase** as the central cloud platform for:
   - Authentication (Firebase Auth)
   - Real-time data storage (Firestore)
   - Secure data transmission (HTTPS)
2. **Web Client** built with Vue.js following MVP pattern:
   - Models: Data structure definitions
   - Views: UI components
   - Presenters: Business logic handlers
3. **Mobile Client** built with Flutter:
   - Background location services
   - Secure communication with Firebase

All data is encrypted in transit using HTTPS and at rest with AES-256 encryption on Firebase servers.

## 🚀 Setup and Installation

### Prerequisites 📝
- Node.js 16+
- npm or yarn
- Firebase account
- Flutter SDK (for mobile app)
- Git

### Web Application Installation 🖥️

```bash
# Clone the repository
git clone https://github.com/yourusername/Realtime-GPS_Flutter_Firebase_Leaflet.js.git

# Navigate to the web application directory
cd Realtime-GPS_Flutter_Firebase_Leaflet.js/Website

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
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
- Server-side data encryption at rest with **AES-256**
- **Unique ID system** to link devices and accounts
- Secure credential storage with Firebase Authentication
- **Clean code practices** for security maintainability

## 📂 Project Structure (Web)

The web application follows the Model-View-Presenter (MVP) pattern:

```
Website/
├── firebase.js          # Centralized Firebase configuration
├── public/              # Static assets and images
│   └── images/          # Application icons and markers
├── src/
│   ├── assets/          # CSS (Tailwind)
│   ├── components/      # Reusable Vue components (Navbar, Footer)
│   ├── models/          # Data models (LocationModel)
│   ├── presenters/      # Presentation logic (MapPresenter)
│   ├── services/        # API services (LocationService)
│   ├── stores/          # Pinia state management (userStore)
│   ├── views/           # Page components (Home, Map, Login, Register, Profile)
│   ├── App.vue          # Main app component with layout structure
│   ├── main.js          # Application entry point with plugin registration
│   └── router/          # Vue Router configuration with route guards
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration for Tailwind
└── package.json         # Dependencies and scripts
```

## ✅ Improvements in Version 2.0

- ✓ Migrated from vanilla JS to **Vue.js 3 with Composition API**
- ✓ Implemented **Tailwind CSS** for modern, responsive styling
- ✓ Restructured with **MVP pattern** for better code organization and maintainability
- ✓ Added **Pinia** for state management
- ✓ Centralized **Firebase configuration** with error handling
- ✓ Eliminated hardcoded values and redundancies
- ✓ Enhanced responsive design for mobile and desktop
- ✓ Improved map interaction with custom markers and cursor
- ✓ Added dynamic page title animation

## 👨‍💻 Author

This project was created and is maintained by David Cela Pedraza.

---

© 2025 David Cela Pedraza 🐰 

![Tepig](https://media1.tenor.com/m/D8G2647I_Z4AAAAC/tepig-sleep.gif) 