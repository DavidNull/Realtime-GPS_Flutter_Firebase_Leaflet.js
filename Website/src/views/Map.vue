<template>
  <div id="map-container" class="overflow-hidden relative">
    <div id="map" class="w-full"></div>
    
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
      isAuthenticated
    };
  }
}
</script>

<style scoped>
#map-container {
  position: relative;
  z-index: 1;
  overflow: hidden;
  height: calc(100vh - 120px); /* Ajustar para dejar espacio para navbar y footer */
}

#map {
  height: 100%;
  min-height: 400px;
  cursor: auto;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

/* Remove global overflow hidden - only for the map container */
/* :global(html), :global(body) {
  overflow: hidden !important;
  height: 100vh !important;
} */

/* Disable Leaflet map controls that might cause scrolling */
:global(.leaflet-container) {
  overflow: hidden !important;
}

:global(.leaflet-control-container) {
  pointer-events: auto;
}

/* Remove global height and overflow restrictions to allow footer */
/* :global(#app) {
  height: 100vh !important;
  overflow: hidden !important;
} */

/* Keep scrollbar hidden only for the map container */
#map-container::-webkit-scrollbar {
  display: none;
}

#map-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style> 