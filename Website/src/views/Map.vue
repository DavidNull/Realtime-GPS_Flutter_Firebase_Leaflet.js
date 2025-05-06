<template>
  <div class="min-h-screen flex flex-col">
    <!-- Map container -->
    <div id="map-container" class="flex-grow relative">
      <!-- Login message for unauthenticated users -->
      <div v-if="!isAuthenticated" class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 z-10">
        <div class="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
          <h2 class="text-2xl font-bold mb-4">¿Dónde está tu hijo?</h2>
          <p class="mb-6">Inicia sesión para ver la ubicación de tu hijo en tiempo real</p>
          <router-link to="/login" class="btn btn-primary">
            Iniciar Sesión
          </router-link>
        </div>
      </div>
      
      <!-- Map element -->
      <div id="map" class="w-full h-full"></div>
      
      <!-- Location info -->
      <div v-if="locationData && isAuthenticated" class="absolute bottom-4 left-4 right-4 md:left-auto md:w-80 bg-white p-4 rounded-lg shadow-lg">
        <div class="flex items-center justify-between mb-2">
          <h3 class="font-bold">Información de Ubicación</h3>
          <span v-if="locationUpdating" class="flex items-center text-primary">
            <svg class="animate-spin h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Actualizando...
          </span>
        </div>
        
        <div v-if="locationError" class="text-red-500 mb-2">
          {{ locationError }}
        </div>
        
        <div v-else>
          <div class="grid grid-cols-2 gap-2 mb-2">
            <div class="bg-gray-100 p-2 rounded">
              <div class="text-gray-600 text-sm">Latitud</div>
              <div class="font-medium">{{ locationData.latitude }}</div>
            </div>
            <div class="bg-gray-100 p-2 rounded">
              <div class="text-gray-600 text-sm">Longitud</div>
              <div class="font-medium">{{ locationData.longitude }}</div>
            </div>
          </div>
          
          <div class="bg-gray-100 p-2 rounded mb-2">
            <div class="text-gray-600 text-sm">Última actualización</div>
            <div class="font-medium">{{ formatDateTime(locationData.lastUpdate) }}</div>
          </div>
          
          <div v-if="locationData.deviceId" class="bg-gray-100 p-2 rounded">
            <div class="text-gray-600 text-sm">ID del dispositivo</div>
            <div class="font-medium">{{ locationData.deviceId }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'
import 'leaflet/dist/leaflet.css'
import MapPresenter from '../presenters/MapPresenter'

export default {
  name: 'MapView',
  setup() {
    // Create presenter
    const presenter = new MapPresenter()
    
    // Lifecycle hooks
    onMounted(() => {
      // Initialize map
      import('leaflet').then((L) => {
        presenter.initMap(L, 'map')
      })
    })
    
    onUnmounted(() => {
      presenter.cleanup()
    })
    
    // Return state properties from presenter for the view
    return {
      isAuthenticated: presenter.state.isAuthenticated,
      locationData: presenter.state.locationData,
      locationError: presenter.state.locationError,
      locationUpdating: presenter.state.locationUpdating,
      formatDateTime: presenter.formatDateTime
    }
  }
}
</script>

<style>
#map-container {
  height: calc(100vh - 130px); /* Adjust for header and footer */
}
#map {
  z-index: 1;
}
</style> 