import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCF6ycf52hW9Ypz9Vw-OHH0LuZ2-J4t6sM",
  authDomain: "ubicacion-faf91.firebaseapp.com",
  projectId: "ubicacion-faf91",
  storageBucket: "ubicacion-faf91.firebasestorage.app",
  messagingSenderId: "87507844915",
  appId: "1:87507844915:web:60039ca325721053cac846",
  measurementId: "G-29NFK6PEW3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    const userDoc = await getDoc(doc(db, "usuarios", user.uid));
    
    if (userDoc.exists()) {
      const userData = userDoc.data();
      const dispositivoID = userData.dispositivoID;
      
      if (dispositivoID) {
        alert(`¡Bienvenido/a ${userData.nombre}!\n\nTu ID de dispositivo es: ${dispositivoID}\n\nUsa esta ID en la app "wimk-gps" para sincronizar tu ubicación con el mapa :D`);
        localStorage.setItem('dispositivoID', dispositivoID);
      }
    }
    
    console.log('Usuario ha iniciado sesión:', user);
    window.location.href = 'Map.html';
    
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    
    let errorMessage = '';
    
    switch (error.code) {
      case 'auth/invalid-credential':
        errorMessage = 'Correo o contraseña incorrectos';
        break;
      case 'auth/user-not-found':
        errorMessage = 'No existe una cuenta con este correo';
        break;
      case 'auth/wrong-password':
        errorMessage = 'Contraseña incorrecta';
        break;
      case 'auth/too-many-requests': // more than 5 attempts
        errorMessage = 'Demasiados intentos fallidos. Intenta más tarde';
        break;
      default:
        errorMessage = 'Error al iniciar sesión. Intenta nuevamente';
    }
    
    alert(errorMessage);
  }
}); 