<template>
  <div id="map-container" >
    <div id="map" class="w-full"></div>
    
    <!-- Location Info Panel (bottom-left) -->
    <div v-if="isAuthenticated && presenter.state.locationData.value" 
         class="absolute bottom-4 left-4 z-20">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300"
           :class="{'max-h-12': !isPanelExpanded, 'max-h-64': isPanelExpanded}">
        <!-- Toggle Header -->
        <div @click="isPanelExpanded = !isPanelExpanded" 
             class="flex items-center justify-between px-4 py-2 cursor-pointer bg-blue-50 hover:bg-blue-100 transition-colors min-h-12">
          <div class="flex items-center space-x-2">
            <span class="text-green-500 text-base">📍</span>
            <span class="font-semibold text-gray-700 text-sm">Ubicación</span>
          </div>
          <svg class="w-4 h-4 text-gray-500 transition-transform duration-300"
               :class="{'rotate-180': isPanelExpanded}"
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        
        <!-- Expandable Content -->
        <div v-if="isPanelExpanded" class="p-4 space-y-3 text-sm">
          <div class="flex justify-between">
            <span class="text-gray-600">Latitud:</span>
            <span class="font-mono text-gray-800">{{ presenter.state.locationData.value?.latitude?.toFixed(6) }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Longitud:</span>
            <span class="font-mono text-gray-800">{{ presenter.state.locationData.value?.longitude?.toFixed(6) }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Última actualización:</span>
            <span class="text-gray-800">{{ presenter.state.locationData.value?.getFormattedLastUpdate() }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Hace:</span>
            <span class="text-gray-800" :class="{'text-green-600': presenter.state.locationData.value?.isRecent()}">
              {{ presenter.state.locationData.value?.getTimeElapsed() }}
            </span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Overlay for non-authenticated users -->
    <div v-if="!isAuthenticated" class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10">
      <div class="text-center text-white p-8 bg-primary rounded-lg shadow-xl max-w-md mx-4">
        <div class="text-6xl mb-4">🔒</div>
        <h2 class="text-2xl font-bold mb-4">Acceso Restringido</h2>
        <p class="text-lg mb-6">Para ver la ubicación en tiempo real, necesitas iniciar sesión en tu cuenta.</p>
        <div class="space-y-3">
          <router-link to="/login" class="block w-full bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200">
            Iniciar Sesión
          </router-link>
          <router-link to="/register" class="block w-full border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition-colors duration-200">
            Crear Cuenta
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref, computed } from 'vue';
import { auth } from '../../firebase';
import 'leaflet/dist/leaflet.css';
import MapPresenter from '../presenters/MapPresenter';

export default {
  name: 'MapView',
  setup() {
    const presenter = new MapPresenter();
    const isAuthenticated = computed(() => auth.currentUser !== null);
    const isPanelExpanded = ref(false);
    
    onMounted(() => {
      import('leaflet').then(L => {
        presenter.initMap(L.default || L, 'map'); 
      }).catch(error => {
        console.error("Failed loading Leaflet", error);
      });
    });
    
    onUnmounted(() => {
      presenter.cleanup();
    });
    
    return {
      presenter,
      isAuthenticated,
      isPanelExpanded
    };
  }
}
</script>

<style scoped>
@import '../styles/map.css';

:global(.leaflet-control-container) {
  pointer-events: auto;
}
</style> 