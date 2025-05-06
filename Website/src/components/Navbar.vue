<template>
  <nav class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <router-link to="/" class="text-xl font-bold text-gray-800">
          Where is my kid? 🧒🏻🌍
        </router-link>
      </div>
      
      <div class="flex items-center space-x-4">
        <router-link to="/" class="text-gray-700 hover:text-primary">
          Inicio
        </router-link>
        <router-link to="/map" class="text-gray-700 hover:text-primary">
          Mapa
        </router-link>
        
        <template v-if="isAuthenticated">
          <div class="relative" ref="dropdown">
            <button 
              @click="toggleDropdown" 
              class="flex items-center text-gray-700 hover:text-primary"
            >
              {{ userData?.nombre || 'Usuario' }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <button 
                @click="logout" 
                class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </template>
        
        <template v-else>
          <router-link to="/login" class="text-gray-700 hover:text-primary">
            Iniciar Sesión
          </router-link>
          <router-link to="/register" class="btn btn-primary">
            Registrarse
          </router-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { auth, db } from '../../firebase'
import { signOut } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { useUserStore } from '../stores/userStore'

export default {
  name: 'Navbar',
  setup() {
    const router = useRouter()
    const isDropdownOpen = ref(false)
    const dropdown = ref(null)
    const userData = ref(null)
    
    const isAuthenticated = computed(() => {
      return auth.currentUser !== null
    })
    
    // Load user data if authenticated
    onMounted(async () => {
      if (auth.currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "usuarios", auth.currentUser.uid))
          if (userDoc.exists()) {
            userData.value = userDoc.data()
          }
        } catch (error) {
          console.error("Error fetching user data:", error)
        }
      }
      
      // Close dropdown when clicking outside
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
    
    const logout = async () => {
      try {
        await signOut(auth)
        localStorage.removeItem('dispositivoID')
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
      logout
    }
  }
}
</script> 