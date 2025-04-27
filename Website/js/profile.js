// Importaciones de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { 
    getFirestore, 
    doc, 
    getDoc 
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { 
    getAuth, 
    onAuthStateChanged, 
    signOut,
    reauthenticateWithCredential,
    EmailAuthProvider,
    updatePassword
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCF6ycf52hW9Ypz9Vw-OHH0LuZ2-J4t6sM",
  authDomain: "ubicacion-faf91.firebaseapp.com",
  projectId: "ubicacion-faf91",
  storageBucket: "ubicacion-faf91.firebasestorage.app",
  messagingSenderId: "87507844915",
  appId: "1:87507844915:web:60039ca325721053cac846",
  measurementId: "G-29NFK6PEW3"
};

console.log("Inicializando profile.js");

// Variables globales
let currentUserData = null;

// Inicialización
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
console.log("Firebase inicializado en profile.js:", auth);

// Escuchar cambios en la autenticación
onAuthStateChanged(auth, (user) => {
    console.log("Estado de autenticación cambiado:", user ? `Usuario ${user.uid} autenticado` : "Usuario no autenticado");
    if (user) {
        // Usuario logueado
        getDoc(doc(db, "usuarios", user.uid))
            .then(userDoc => {
                if (userDoc.exists()) {
                    currentUserData = userDoc.data();
                    console.log("Datos de usuario obtenidos:", currentUserData);
                    
                    // Actualizar el nombre del usuario en el menú
                    const userMenu = document.getElementById('user-menu');
                    if (userMenu) {
                        userMenu.textContent = currentUserData.nombre || 'Usuario';
                    } else {
                        // Crear el menú si no existe
                        updateNavMenu(user);
                    }
                    
                    // Actualizar la información del perfil
                    updateProfileInfo(user, currentUserData);
                } else {
                    console.error("No se encontraron datos del usuario");
                }
            })
            .catch(error => console.error("Error al obtener datos del usuario:", error));
    } else {
        // Usuario no logueado - redirigir a login después de un breve retraso
        console.log("Usuario no autenticado, redirigiendo al login...");
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 100);
    }
});

/**
 * Actualiza el menú de navegación según el estado de autenticación
 */
function updateNavMenu(user) {
    const navMenu = document.getElementById('nav-menu');
    if (!navMenu) {
        console.error("No se encontró el elemento nav-menu");
        return;
    }
    
    // Limpiar elementos previos
    clearNavMenu(navMenu);
    
    if (user) {
        // Usuario logueado - Agregar menú de usuario
        addUserMenu(navMenu, user);
    } else {
        // Usuario no logueado - Agregar enlaces de login/registro
        addAuthLinks(navMenu);
    }
}

/**
 * Limpia los elementos del menú de navegación
 */
function clearNavMenu(navMenu) {
    // Mantener solo Inicio y Mapa
    const navItems = navMenu.querySelectorAll('a:not([href="index.html"]):not([href="Map.html"])');
    navItems.forEach(item => {
        if (item.parentNode === navMenu) {
            navMenu.removeChild(item);
        }
    });
    
    // Eliminar dropdowns existentes
    const existingDropdowns = navMenu.querySelectorAll('.dropdown');
    existingDropdowns.forEach(dropdown => {
        navMenu.removeChild(dropdown);
    });
}

/**
 * Agrega el menú de usuario con opción de cerrar sesión
 */
function addUserMenu(navMenu, user) {
    const userDropdown = document.createElement('div');
    userDropdown.className = 'dropdown';
    
    const userButton = document.createElement('a');
    userButton.className = 'menu-option';
    userButton.href = '#';
    userButton.id = 'user-menu';
    userButton.textContent = currentUserData?.nombre || 'Usuario';
    
    const dropdownContent = document.createElement('div');
    dropdownContent.className = 'dropdown-content';
    
    const profileOption = document.createElement('a');
    profileOption.className = 'dropdown-option';
    profileOption.href = 'profile.html';
    profileOption.textContent = 'Mi Perfil';
    
    const logoutOption = document.createElement('a');
    logoutOption.className = 'dropdown-option';
    logoutOption.href = '#';
    logoutOption.textContent = 'Cerrar Sesión';
    logoutOption.addEventListener('click', handleLogout);
    
    dropdownContent.appendChild(profileOption);
    dropdownContent.appendChild(logoutOption);
    userDropdown.appendChild(userButton);
    userDropdown.appendChild(dropdownContent);
    navMenu.appendChild(userDropdown);
}

/**
 * Agrega enlaces de inicio de sesión y registro
 */
function addAuthLinks(navMenu) {
    const loginLink = document.createElement('a');
    loginLink.href = 'login.html';
    loginLink.className = 'menu-option';
    loginLink.textContent = 'Iniciar Sesión';
    
    const registerLink = document.createElement('a');
    registerLink.href = 'register.html';
    registerLink.className = 'menu-option';
    registerLink.textContent = 'Registrarse';
    
    navMenu.appendChild(loginLink);
    navMenu.appendChild(registerLink);
}

/**
 * Maneja el cierre de sesión
 */
function handleLogout(e) {
    e.preventDefault();
    signOut(auth)
        .then(() => {
            localStorage.removeItem('dispositivoID');
            window.location.href = 'index.html';
        })
        .catch(error => console.error('Error al cerrar sesión:', error));
}

/**
 * Actualiza la información del perfil en la página
 */
function updateProfileInfo(user, userData) {
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const deviceId = document.getElementById('device-id');
    
    if (profileName && profileEmail && deviceId) {
        profileName.textContent = userData.nombre || 'No disponible';
        profileEmail.textContent = user.email || 'No disponible';
        deviceId.textContent = userData.dispositivoID || 'No disponible';
        console.log("Información de perfil actualizada");
    } else {
        console.error("No se encontraron elementos de perfil para actualizar");
    }
}

// Manejar el cambio de contraseña
const passwordForm = document.getElementById('password-form');
if (passwordForm) {
    passwordForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log("Intento de cambio de contraseña");
        
        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const messageElement = document.getElementById('password-message');
        
        // Limpiar mensajes anteriores
        messageElement.textContent = '';
        messageElement.className = 'status-message';
        
        // Validar que las contraseñas coincidan
        if (newPassword !== confirmPassword) {
            messageElement.textContent = 'Las contraseñas nuevas no coinciden.';
            messageElement.className = 'status-message error';
            return;
        }
        
        // Validar que la contraseña tenga al menos 6 caracteres
        if (newPassword.length < 6) {
            messageElement.textContent = 'La contraseña debe tener al menos 6 caracteres.';
            messageElement.className = 'status-message error';
            return;
        }
        
        try {
            // Mostrar mensaje de carga
            messageElement.textContent = 'Actualizando contraseña...';
            messageElement.className = 'status-message';
            messageElement.style.display = 'block';
            messageElement.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            messageElement.style.border = '1px solid rgba(255, 255, 255, 0.3)';
            
            const user = auth.currentUser;
            if (!user) {
                throw new Error('No hay usuario autenticado');
            }
            
            // Reautenticar al usuario
            const credential = EmailAuthProvider.credential(user.email, currentPassword);
            await reauthenticateWithCredential(user, credential);
            
            // Cambiar la contraseña
            await updatePassword(user, newPassword);
            
            // Mostrar mensaje de éxito
            messageElement.textContent = 'Contraseña actualizada correctamente.';
            messageElement.className = 'status-message success';
            
            // Limpiar el formulario
            passwordForm.reset();
        } catch (error) {
            console.error('Error al cambiar la contraseña:', error);
            
            // Mostrar mensaje de error apropiado
            if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
                messageElement.textContent = 'La contraseña actual es incorrecta.';
            } else if (error.code === 'auth/weak-password') {
                messageElement.textContent = 'La nueva contraseña es demasiado débil. Mínimo 6 caracteres.';
            } else if (error.code === 'auth/requires-recent-login') {
                messageElement.textContent = 'Esta operación es sensible y requiere autenticación reciente. Inicia sesión nuevamente.';
                // Cerrar sesión y redirigir al login después de 3 segundos
                setTimeout(() => {
                    signOut(auth).then(() => {
                        window.location.href = 'login.html';
                    });
                }, 3000);
            } else {
                messageElement.textContent = 'Error al cambiar la contraseña: ' + error.message;
            }
            
            messageElement.className = 'status-message error';
        }
    });
} else {
    console.error("No se encontró el formulario de cambio de contraseña");
} 