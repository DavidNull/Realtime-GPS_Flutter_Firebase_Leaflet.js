<template>
  <div class="profile-container">
    <h1 class="profile-title animate__animated animate__fadeInDown">Mi Perfil</h1>
    
    <div v-if="userStore.loading && !userStore.userData" class="loading-container">
      <svg class="loading-spinner animate__animated animate__rotateIn animate__infinite" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <p class="loading-text animate__animated animate__pulse animate__infinite">Cargando perfil...</p>
    </div>
    
    <div v-else-if="userStore.error" class="error-container animate__animated animate__shakeX">
      <p class="error-title">Error al cargar el perfil</p>
      <p>{{ userStore.error }}</p>
    </div>
    
    <div v-else-if="userStore.userData" class="profile-fields">
      <div class="field-container sky" data-aos="fade-up" data-aos-delay="100">
        <label class="field-label sky">Nombre</label>
        <p class="field-value sky">{{ userStore.userData.nombre }}</p>
      </div>
      <div class="field-container emerald" data-aos="fade-up" data-aos-delay="200">
        <label class="field-label emerald">Correo Electrónico</label>
        <p class="field-value emerald">{{ userStore.userData.email }}</p>
      </div>
      <div class="field-container amber" data-aos="fade-up" data-aos-delay="300">
        <label class="field-label amber">ID de Dispositivo</label>
        <p class="field-value amber"><span class="device-id">{{ userStore.userData.dispositivoID }}</span></p>
        <p class="device-id-hint" data-aos="fade-up" data-aos-delay="800">Usa esta ID en la aplicación móvil para sincronizar tu ubicación.</p>
      </div>
      <div class="field-container violet" data-aos="fade-up" data-aos-delay="400">
        <label class="field-label violet">Fecha de Registro</label>
        <p class="field-value violet">{{ formatDate(userStore.userData.fechaRegistro) }}</p>
      </div>
    </div>
    
    <div v-else class="no-data-container">
      <p class="no-data-text">No se pudieron cargar los datos del perfil. Asegúrate de haber iniciado sesión.</p>
    </div>

    <div class="button-container" data-aos="zoom-in" data-aos-delay="500">
      <router-link to="/map" class="back-to-map-button">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 14.5c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5v-5c0-2.485 4.03-4.5 9-4.5s9 2.015 9 4.5v5z" stroke="currentColor" stroke-width="2"/>
          <path d="M21 9.5c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5" stroke="currentColor" stroke-width="2"/>
        </svg>
        Volver al Mapa
      </router-link>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../stores/userStore'
import { onMounted, computed } from 'vue' // computed para observar --> userStore.user
import { auth } from '../../firebase' // Import auth para verificar "currentUser"

export default {
  name: 'ProfileView',
  setup() {
    const userStore = useUserStore()

    // Llama a fetchUserData si el usuario está autenticado pero los datos no están cargados <-- Para verificar ya que App.vue o Navbar deberían haberlo hecho
    onMounted(() => {
      const currentUser = auth.currentUser; // Comprobar directamente de Firebase auth
      if (currentUser && !userStore.userData) {
        userStore.fetchUserData(currentUser.uid);
      }
    });

    const formatDate = (timestamp) => {
      if (!timestamp) return 'N/A';
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
      return date.toLocaleDateString('es-ES', {
        year: 'numeric', month: 'long', day: 'numeric', 
        hour: '2-digit', minute: '2-digit' 
      });
    };

    return {
      userStore, // La expone para acceder a userData, loading, error
      formatDate
    }
  }
}
</script>

<style scoped>
@import '../styles/profile.css';
</style> 