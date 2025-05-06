// Firebase configuration file
// All Firebase imports and setup centralized in one place

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF6ycf52hW9Ypz9Vw-OHH0LuZ2-J4t6sM",
  authDomain: "ubicacion-faf91.firebaseapp.com",
  projectId: "ubicacion-faf91",
  storageBucket: "ubicacion-faf91.firebasestorage.app",
  messagingSenderId: "87507844915",
  appId: "1:87507844915:web:60039ca325721053cac846",
  measurementId: "G-29NFK6PEW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }; 