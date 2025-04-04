import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore, doc, setDoc, collection } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

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
console.log("Firebase inicializado:", app.name);

const auth = getAuth(app);
const db = getFirestore(app);

function generarIDUnica() { //posibilities of coinciding are 1/10^6 = 0.000001%
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';
  for (let i = 0; i < 6; i++) {
    id += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return id;
}

document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log("Formulario enviado");
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  
  console.log("Datos del formulario:", { email, nombre: name });
  
  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }
  
  try {
    console.log("Intentando crear usuario...");
    const dispositivoID = generarIDUnica();
    console.log("ID generada:", dispositivoID);
    
    console.log("Configuración de auth:", auth);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    console.log("Usuario creado:", user.uid);
    
    await setDoc(doc(db, "usuarios", user.uid), {
      nombre: name,
      email: email,
      dispositivoID: dispositivoID,
      fechaRegistro: new Date()
    });
    
    console.log('Usuario registrado correctamente:', user);
    
    alert(`¡Registrado correctamente! Tu ID de dispositivo es: ${dispositivoID}\n\nGuarda esta ID, la necesitarás para la app "wimk-gps" para sincronizar tu ubicación con el mapa :D`);
    
    await setDoc(doc(db, "ubicaciones", dispositivoID), {
      latitud: 0,
      longitud: 0,
      ultimaActualizacion: new Date(),
      usuario: user.uid
    });
    
    window.location.href = 'Map.html';
    
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    console.error('Código de error:', error.code);
    console.error('Mensaje de error:', error.message);
    
    let errorMessage = '';
    
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'Este correo ya está registrado';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Correo electrónico inválido';
        break;
      case 'auth/weak-password':
        errorMessage = 'La contraseña es demasiado débil. Mínimo 6 caracteres';
        break;
      case 'auth/configuration-not-found':
        errorMessage = 'Error de configuración de Firebase.';
        break;
      default:
        errorMessage = `Error al registrar: ${error.message}`;
    }
    
    alert(errorMessage);
  }
}); 