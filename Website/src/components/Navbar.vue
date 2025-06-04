<template>
  <nav class="navbar-container">
    <div class="container mx-auto px-6 py-3 flex justify-between items-center">
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
              <img v-if="userData?.photoURL" :src="userData.photoURL" alt="Avatar" class="avatar-img">
              <span v-else class="avatar-initials">
                {{ userData?.nombre ? userData.nombre[0].toUpperCase() : 'U' }}
              </span>
              {{ userData?.nombre || 'Usuario' }}
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

<style scoped>
@import '../styles/navbar.css';
</style> 