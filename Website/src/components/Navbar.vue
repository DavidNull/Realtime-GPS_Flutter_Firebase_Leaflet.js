<template>
  <nav class="bg-primary text-white shadow-lg sticky top-0 z-50">
    <div class="container mx-auto px-6 py-3 flex justify-between items-center">
      <!-- Left side: User menu (AUTHENTICATED) or Logo (NOT AUTHENTICATED)-->
      <div class="flex items-center space-x-4">
        <template v-if="isAuthenticated">
          <div class="relative" ref="dropdown">
            <button 
              @click="toggleDropdown" 
              class="flex items-center hover:text-gray-200 transition-colors duration-200 font-semibold p-2 rounded-md hover:bg-primary-dark/50"
            >
              <img v-if="userData?.photoURL" :src="userData.photoURL" alt="Avatar" class="w-8 h-8 rounded-full mr-2 border-2 border-white/80">
              <span v-else class="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center mr-2 text-sm font-bold">
                {{ userData?.nombre ? userData.nombre[0].toUpperCase() : 'U' }}
              </span>
              {{ userData?.nombre || 'Usuario' }}
              <svg class="w-4 h-4 ml-1.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div 
              v-if="isDropdownOpen" 
              class="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-xl overflow-hidden ring-1 ring-black ring-opacity-5 z-20 py-1">
              <router-link 
                to="/profile"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors duration-150"
                @click="isDropdownOpen = false"
              >
                Ver Perfil
              </router-link>
              <button 
                @click="handleLogout" 
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-danger hover:text-white transition-colors duration-150"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </template>
        <router-link v-else to="/" class="text-2xl font-bold hover:text-gray-200 transition-colors duration-200">
          Where is my kid? 🧒🏻🌍
        </router-link>
      </div>
      
      <!-- Center = Logo (if user is authenticated and logo is not on left) -->
      <div class="absolute left-1/2 transform -translate-x-1/2" v-if="isAuthenticated">
         <router-link to="/" class="text-2xl font-bold hover:text-gray-200 transition-colors duration-200">
          Where is my kid? 🧒🏻🌍
        </router-link>
      </div>

      <!-- Right side: Navigation Links -->
      <div class="flex items-center space-x-6">
        <router-link to="/" class="hover:text-gray-200 font-medium transition-colors duration-200">
          Inicio
        </router-link>
        <router-link to="/map" class="hover:text-gray-200 font-medium transition-colors duration-200">
          Mapa
        </router-link>
        
        <template v-if="!isAuthenticated">
          <router-link to="/login" class="hover:text-gray-200 font-medium transition-colors duration-200">
            Iniciar Sesión
          </router-link>
          <router-link to="/register" class="px-4 py-2 text-sm font-semibold text-primary bg-white rounded-md hover:bg-gray-200 transition-colors duration-200 shadow-sm">
            Registrarse
          </router-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { auth, db } from '../../firebase'
import { signOut as firebaseSignOut, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

export default {
  name: 'Navbar',
  setup() {
    const router = useRouter()
    const isDropdownOpen = ref(false)
    const dropdown = ref(null)
    const userData = ref(null)
    const isAuthenticated = ref(auth.currentUser !== null)

    const fetchUserData = async (userId) => {
      if (!userId) return;
      try {
        const userDocRef = doc(db, "usuarios", userId)
        const userDoc = await getDoc(userDocRef)
        if (userDoc.exists()) {
          userData.value = userDoc.data()
        } else {
          console.log("No such user document!");
          userData.value = null;
        }
      } catch (error) {
        console.error("Error fetching user data:", error)
        userData.value = null;
      }
    };

    onAuthStateChanged(auth, (user) => {
      isAuthenticated.value = !!user;
      if (user) {
        fetchUserData(user.uid);
      } else {
        userData.value = null;
      }
    });

    onMounted(() => {
      if (auth.currentUser) {
        fetchUserData(auth.currentUser.uid);
      }
      document.addEventListener('click', handleClickOutside)
    })
    
    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
    })
    
    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value
    }
    
    const handleClickOutside = (event) => {
      if (dropdown.value && !dropdown.value.contains(event.target)) {
        isDropdownOpen.value = false
      }
    }
    
    const handleLogout = async () => {
      try {
        await firebaseSignOut(auth)
        localStorage.removeItem('dispositivoID')
        userData.value = null;
        isDropdownOpen.value = false;
        router.push('/') 
      } catch (error) {
        console.error('Error logging out:', error)
      }
    }
    
    return {
      isAuthenticated,
      userData,
      isDropdownOpen,
      dropdown,
      toggleDropdown,
      handleLogout
    }
  }
}
</script> 