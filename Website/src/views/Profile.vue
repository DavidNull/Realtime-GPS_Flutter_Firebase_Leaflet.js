<template>
  <div class="container mx-auto mt-10 p-8 bg-white rounded-xl shadow-2xl max-w-2xl border border-gray-200">
    <h1 class="text-4xl font-bold text-primary mb-8 border-b-2 border-primary pb-4">Mi Perfil</h1>
    
    <div v-if="userStore.loading && !userStore.userData" class="text-center py-12">
      <svg class="animate-spin h-10 w-10 text-primary mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <p class="text-gray-600 text-lg">Cargando perfil...</p>
    </div>
    
    <div v-else-if="userStore.error" class="bg-red-50 border-l-4 border-red-400 text-red-800 p-6 rounded-md shadow-md mb-6">
      <p class="font-bold text-lg">Error al cargar el perfil</p>
      <p>{{ userStore.error }}</p>
    </div>
    
    <div v-else-if="userStore.userData" class="space-y-8">
      <div class="p-6 bg-sky-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        <label class="block text-sm font-semibold text-sky-700 mb-1">Nombre</label>
        <p class="mt-1 text-xl text-sky-900">{{ userStore.userData.nombre }}</p>
      </div>
      <div class="p-6 bg-emerald-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        <label class="block text-sm font-semibold text-emerald-700 mb-1">Correo Electrónico</label>
        <p class="mt-1 text-xl text-emerald-900">{{ userStore.userData.email }}</p>
      </div>
      <div class="p-6 bg-amber-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        <label class="block text-sm font-semibold text-amber-700 mb-1">ID de Dispositivo</label>
        <p class="mt-1 text-xl text-amber-900 font-mono bg-amber-100 p-3 rounded inline-block shadow-inner">{{ userStore.userData.dispositivoID }}</p>
        <p class="mt-2 text-xs text-gray-500">Usa esta ID en la aplicación móvil para sincronizar tu ubicación.</p>
      </div>
      <div class="p-6 bg-violet-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        <label class="block text-sm font-semibold text-violet-700 mb-1">Fecha de Registro</label>
        <p class="mt-1 text-xl text-violet-900">{{ formatDate(userStore.userData.fechaRegistro) }}</p>
      </div>
    </div>
    
    <div v-else class="text-center py-12">
      <p class="text-gray-500 text-lg">No se pudieron cargar los datos del perfil. Asegúrate de haber iniciado sesión.</p>
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