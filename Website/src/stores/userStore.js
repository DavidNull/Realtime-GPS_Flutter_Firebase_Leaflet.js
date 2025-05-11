import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { auth, db } from '../../firebase'
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut
} from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export const useUserStore = defineStore('user', () => {
  // State
  const user = ref(null)
  const userData = ref(null)
  const loading = ref(false)
  const error = ref(null)
  
  // Getters
  const isAuthenticated = computed(() => !!user.value)
  const deviceId = computed(() => userData.value?.dispositivoID || null)
  
  // Actions
  const fetchUserData = async (userId) => {
    try {
      loading.value = true
      error.value = null
      
      const userDoc = await getDoc(doc(db, "usuarios", userId))
      
      if (userDoc.exists()) {
        userData.value = userDoc.data()
        localStorage.setItem('dispositivoID', userData.value.dispositivoID)
      } else {
        userData.value = null
      }
    } catch (err) {
      console.error('Error fetching user data:', err)
      error.value = err.message
    } finally {
      loading.value = false
    }
  }
  
  const login = async (email, password) => {
    try {
      loading.value = true
      error.value = null
      
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      user.value = userCredential.user
      
      await fetchUserData(user.value.uid)
      
      return { success: true }
    } catch (err) {
      console.error('Login error:', err)
      error.value = getAuthErrorMessage(err.code)
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }
  
  const register = async (name, email, password) => {
    try {
      loading.value = true
      error.value = null
      
      const deviceId = generateUniqueId()
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      user.value = userCredential.user
      
      await setDoc(doc(db, "usuarios", user.value.uid), {
        nombre: name,
        email: email,
        dispositivoID: deviceId,
        fechaRegistro: new Date()
      })
      
      await setDoc(doc(db, "ubicaciones", deviceId), {
        latitud: 0,
        longitud: 0,
        ultimaActualizacion: new Date(),
        usuario: user.value.uid
      })
      
      await fetchUserData(user.value.uid)
      
      return { success: true, deviceId }
    } catch (err) {
      console.error('Registration error:', err)
      error.value = getAuthErrorMessage(err.code)
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }
  
  const logout = async () => {
    try {
      loading.value = true
      error.value = null
      
      await firebaseSignOut(auth)
      user.value = null
      userData.value = null
      localStorage.removeItem('dispositivoID')
      
      return { success: true }
    } catch (err) {
      console.error('Logout error:', err)
      error.value = err.message
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }
  
  const init = async () => {
    user.value = auth.currentUser
    
    if (user.value) {
      await fetchUserData(user.value.uid)
    }
  }
  
  const generateUniqueId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let id = ''
    for (let i = 0; i < 6; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return id
  }
  
  const getAuthErrorMessage = (code) => {
    switch (code) {
      case 'auth/invalid-credential':
        return 'Correo o contraseña incorrectos'
      case 'auth/user-not-found':
        return 'No existe una cuenta con este correo'
      case 'auth/wrong-password':
        return 'Contraseña incorrecta'
      case 'auth/too-many-requests':
        return 'Demasiados intentos fallidos. Intenta más tarde'
      case 'auth/email-already-in-use':
        return 'Este correo ya está registrado'
      case 'auth/invalid-email':
        return 'Correo electrónico inválido'
      case 'auth/weak-password':
        return 'La contraseña es demasiado débil. Mínimo 6 caracteres'
      default:
        return 'Error de autenticación. Intenta nuevamente'
    }
  }
  
  return {
    user,
    userData,
    loading,
    error,
    
    isAuthenticated,
    deviceId,
    
    login,
    register,
    logout,
    fetchUserData,
    init
  }
}) 