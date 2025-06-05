# Where is my kid? - Real-Time GPS Tracking System 🌍
<img src="doc/img/Logo_App.png" width="200" height="200">

## Final Degree Project - Network Systems Administration (ASIR)

**Author**: David Cela Pedraza  
**Date**: 2025

## 📎 Resources // Recursos

- 🖼️ **Presentación**: [Google Slides](https://docs.google.com/presentation/d/1lO1_EMuWcHMEg0MBHHQX1SWp2uZCsrLxl4PTk1KBv4c/edit?usp=sharing)  
- 📄 **Documentación**: [Google Docs](https://docs.google.com/document/d/1CF-YSl9W1nP6JdQS0Te2TpbXTu7o2BIZQIjrzP-GOOI/edit?usp=sharing)

## 📋 Description

**🇬🇧 English**  
**"Where is my kid? 🧒🏻🌍"** is a real-time GPS tracking system 📍 developed as a Final Degree Project for the Network Systems Administration (ASIR) course.  
This project offers a solution that allows parents or legal guardians to monitor their children's location in real-time through a modern web interface 🌐 and a mobile application 📱.

**🇪🇸 Español**  
**"Where is my kid? 🧒🏻🌍"** es un sistema de rastreo GPS en tiempo real 📍 desarrollado como Proyecto Final de Grado del ciclo (TFG) de Administración de Sistemas Informáticos en Red (ASIR).  
Este proyecto proporciona una solución que permite a padres o tutores legales monitorear la ubicación de sus hijos en tiempo real mediante una interfaz web moderna 🌐 y una aplicación móvil 📱.

## ✨ Features

- 🔄 **Real-time tracking**
- 🔒 **Authentication system**: Secure access via email and password using Firebase Authentication
- 📱 **Cross-platform mobile app**: Developed with Flutter for Android with background location services
- 🌐 **Modern web interface**: Built with Vue.js 3 (Composition API) and Tailwind CSS
- 🧩 **Model-View-Presenter**: Clean architecture pattern implemented for better code organization
- 🗺️ **Interactive map visualization**: Using Leaflet.js with custom markers for intuitive location tracking
- ☁️ **Cloud storage**: Firebase Firestore for secure, scalable data management
- 🔑 **Unique ID system**: 

## 🧩 System Components

The project consists of two main components:

### 1. Web Application 💻

The web interface allows users to:
- Register and log in to the system with email verification
- Check the current location of the linked device in real-time on an interactive map
- View detailed information about the device's location (coordinates, last update time)
- Manage their profile information

**Technologies used**:
- **Vue.js 3**
- **Tailwind CSS**
- **Vite**
- **Leaflet.js**
- **Firebase Authentication**
- **Firebase Firestore**
- **Pinia**
- **Vue Router**
- **PostCSS**

### 2. Mobile Application (WIMK-GPS) 📲


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


## 🚀 Setup and Installation

### Prerequisites 📝
- Node.js 16+
- npm or yarn
- Firebase account (if you want to make your own)
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

## 👨‍💻 

© 2025 David Cela Pedraza 🐰 

![Tepig](https://media1.tenor.com/m/D8G2647I_Z4AAAAC/tepig-sleep.gif) 
