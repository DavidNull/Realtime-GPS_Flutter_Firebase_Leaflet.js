<template>
  <div> 
    <div id="map-container" class="relative w-full"> 
      <div v-if="!presenter.state.isAuthenticated.value" 
           class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 z-20 p-4">
        <div class="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
          <h2 class="text-2xl font-bold mb-4 text-gray-800">¿Dónde está tu hijo?</h2>
          <p class="mb-6 text-gray-600">Inicia sesión para ver la ubicación de tu hijo en tiempo real.</p>
          <router-link to="/login" class="btn btn-primary px-6 py-3 text-lg">
            Iniciar Sesión
          </router-link>
        </div>
      </div>
      
      <div id="map" class="w-full h-[calc(100vh_-_var(--navbar-height,_64px)_-_var(--footer-height,_68px))] min-h-[400px] z-10"></div> 
      
      <div v-if="presenter.state.locationData.value && presenter.state.isAuthenticated.value" 
           class="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:left-4 md:transform-none md:w-96 bg-white p-4 rounded-lg shadow-xl z-20">
        <div class="flex items-center justify-between mb-2">
          <h3 class="font-bold text-gray-700">Información de Ubicación</h3>
          <span v-if="presenter.state.locationUpdating.value" class="flex items-center text-primary">
            <svg class="animate-spin h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Actualizando...
          </span>
        </div>
        <div v-if="presenter.state.locationError.value" class="text-red-600 bg-red-50 p-3 rounded-md mb-2">
          {{ presenter.state.locationError.value }}
        </div>
        <div v-else-if="presenter.state.locationData.value" class="text-sm">
          <div class="grid grid-cols-2 gap-3 mb-3">
            <div class="bg-gray-50 p-3 rounded-md">
              <div class="text-gray-500 text-xs">Latitud</div>
              <div class="font-medium text-gray-800">{{ presenter.state.locationData.value.latitude.toFixed(6) }}</div>
            </div>
            <div class="bg-gray-50 p-3 rounded-md">
              <div class="text-gray-500 text-xs">Longitud</div>
              <div class="font-medium text-gray-800">{{ presenter.state.locationData.value.longitude.toFixed(6) }}</div>
            </div>
          </div>
          <div class="bg-gray-50 p-3 rounded-md mb-3">
            <div class="text-gray-500 text-xs">Última actualización</div>
            <div class="font-medium text-gray-800">{{ presenter.formatDateTime(presenter.state.locationData.value.lastUpdate) }}</div>
          </div>
          <div v-if="presenter.state.locationData.value.deviceId" class="bg-gray-50 p-3 rounded-md">
            <div class="text-gray-500 text-xs">ID del dispositivo</div>
            <div class="font-medium text-gray-800 truncate">{{ presenter.state.locationData.value.deviceId }}</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';
import 'leaflet/dist/leaflet.css';
import MapPresenter from '../presenters/MapPresenter';

export default {
  name: 'MapView',
  setup() {
    const presenter = new MapPresenter();
    
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
    };
  }
}
</script>

<style>
#map {
  cursor: auto;
  height: calc(100vh - 132px); 
  min-height: 400px; 
}

#map .leaflet-grab {
  cursor: grab;
}

#map .leaflet-grabbing {
  cursor: grabbing;
}
</style> 