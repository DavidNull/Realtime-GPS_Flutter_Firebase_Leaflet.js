<template>
  <nav class="navbar-container">
    <div class="container mx-auto px-4 py-3">
      <!-- Mobile Layout -->
      <div class="md:hidden flex justify-between items-center">
        <button @click="toggleMobileMenu" class="mobile-menu-button">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <router-link to="/" class="logo-link mobile-logo">
          Where is my kid? 🧒🏻🌍
        </router-link>
        
        <div class="w-6"></div> 
      </div>

      <!-- Desktop  -->
      <div class="hidden md:flex justify-between items-center">
        <div class="flex items-center space-x-6">
        </div>
        
        <div class="absolute left-1/2 transform -translate-x-1/2">
          <router-link to="/" class="logo-link">
            Where is my kid? 🧒🏻🌍
          </router-link>
        </div>

        <!-- Right side: User Profile (AUTHENTICATED) or Navigation Links (NOT AUTHENTICATED) -->
        <div class="flex items-center space-x-4">
          <template v-if="isAuthenticated">
            <div class="relative" ref="dropdown">
              <button 
                @click="toggleDropdown" 
                class="profile-button"
              >
                <img src="/images/tutor.png" alt="Avatar" class="avatar-img">
                <span class="hidden sm:inline">{{ userData?.nombre || 'Usuario' }}</span>
                <svg class="dropdown-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div 
                v-if="isDropdownOpen" 
                class="dropdown-menu">
                <router-link 
                  to="/profile"
                  class="dropdown-item"
                  @click="isDropdownOpen = false"
                >
                  Ver Perfil
                </router-link>
                <button 
                  @click="handleLogout" 
                  class="dropdown-item logout-item"
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </template>
          <template v-else>
            <router-link to="/login" class="nav-link">
              Iniciar Sesión
            </router-link>
            <router-link to="/register" class="register-button">
              Registrarse
            </router-link>
          </template>
        </div>
      </div>

      <!-- Mobile  -->
      <!-- https://codepen.io/lloydtao/pen/abpKwXW -->
      
      <div v-if="isMobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-white/20">
        <div class="flex flex-col space-y-3 pt-4">
          <template v-if="isAuthenticated">
            <div class="flex items-center space-x-3 px-4 py-2 bg-white/10 rounded-lg">
              <img src="/images/tutor.png" alt="Avatar" class="avatar-img">
              <span class="text-white font-medium">{{ userData?.nombre || 'Usuario' }}</span>
            </div>
            <router-link 
              to="/profile"
              class="mobile-nav-link"
              @click="closeMobileMenu"
            >
              Ver Perfil
            </router-link>
            <button 
              @click="handleMobileLogout" 
              class="mobile-nav-link text-left"
            >
              Cerrar Sesión
            </button>
          </template>
          <template v-else>
            <router-link 
              to="/login" 
              class="mobile-nav-link"
              @click="closeMobileMenu"
            >
              Iniciar Sesión
            </router-link>
            <router-link 
              to="/register" 
              class="mobile-nav-link"
              @click="closeMobileMenu"
            >
              Registrarse
            </router-link>
          </template>
        </div>
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
    const isMobileMenuOpen = ref(false)
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

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false
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

    const handleMobileLogout = async () => {
      await handleLogout()
      closeMobileMenu()
    }
    
    return {
      isAuthenticated,
      userData,
      isDropdownOpen,
      isMobileMenuOpen,
      dropdown,
      toggleDropdown,
      toggleMobileMenu,
      closeMobileMenu,
      handleLogout,
      handleMobileLogout
    }
  }
}
</script>

<style scoped>
@import '../styles/navbar.css';
</style> 
