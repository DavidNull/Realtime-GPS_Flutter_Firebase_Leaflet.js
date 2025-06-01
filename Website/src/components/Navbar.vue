<template>
  <nav class="navbar-container">
    <div class="container mx-auto px-6 py-3 flex justify-between items-center">
      <!-- Left side: Navigation Links (only when authenticated) -->
      <div class="flex items-center space-x-6">
        <!-- Removed map link -->
      </div>
      
      <!-- Center: Logo -->
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
.navbar-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-link {
  color: white;
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 8px 12px;
  border-radius: 8px;
}

.nav-link:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-1px);
}

.logo-link {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  user-select: none;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo-link:hover {
  color: white;
  transform: scale(1.05);
}

.profile-button {
  display: flex;
  align-items: center;
  color: white;
  font-weight: 600;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 16px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.profile-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

.avatar-img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
  border: 2px solid rgba(255, 255, 255, 0.8);
}

.avatar-initials {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: #667eea;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  font-size: 14px;
  font-weight: bold;
}

.dropdown-icon {
  width: 16px;
  height: 16px;
  margin-left: 6px;
  color: rgba(255, 255, 255, 0.8);
}

.dropdown-menu {
  position: absolute;
  right: 0;
  margin-top: 8px;
  width: 14rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 9999;
  padding: 4px 0;
}

.dropdown-item {
  display: block;
  width: 100%;
  text-align: left;
  padding: 12px 16px;
  font-size: 14px;
  color: #4a5568;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.logout-item:hover {
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  color: white;
}

.register-button {
  background: rgba(255, 255, 255, 0.9);
  color: #667eea;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}

.register-button:hover {
  background: white;
  color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .logo-link {
    font-size: 1.25rem;
  }
  
  .profile-button {
    padding: 6px 12px;
    font-size: 14px;
  }
  
  .dropdown-menu {
    width: 12rem;
  }
}
</style> 