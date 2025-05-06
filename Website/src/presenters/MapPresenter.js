import { ref, computed, watch } from 'vue'
import { auth } from '../../firebase'
import { useUserStore } from '../stores/userStore'
import LocationService from '../services/LocationService'
import LocationModel from '../models/LocationModel'

/**
 * Map Presenter (MVP Pattern)
 * 
 * Handles business logic for the Map view
 */
export default class MapPresenter {
  /**
   * Create a new MapPresenter
   * 
   * @param {Object} view - The view component reference
   */
  constructor(view) {
    // Store view reference
    this.view = view
    
    // Initialize reactive state
    this.state = {
      // User state
      isAuthenticated: computed(() => auth.currentUser !== null),
      
      // Location state
      locationData: ref(null),
      locationError: ref(null),
      locationUpdating: ref(false),
      
      // Map state
      map: ref(null),
      marker: ref(null),
      
      // Service references
      unsubscribeLocation: ref(null)
    }
    
    // Set up watchers
    this._setupWatchers()
  }
  
  /**
   * Initialize the map
   * 
   * @param {Object} L - Leaflet library
   * @param {string} mapId - HTML element ID for the map
   */
  initMap(L, mapId) {
    // Initialize map
    this.state.map.value = L.map(mapId, {
      zoomControl: false
    }).setView([40.416775, -3.703790], 6) // Initial view of Spain
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.state.map.value)
    
    // Add zoom control in a better position
    L.control.zoom({
      position: 'bottomright'
    }).addTo(this.state.map.value)
    
    // Adjust map size when window resizes
    window.addEventListener('resize', () => {
      if (this.state.map.value) {
        this.state.map.value.invalidateSize()
      }
    })
    
    // Load location data if user is authenticated
    if (this.state.isAuthenticated.value) {
      this.loadLocationData()
    }
  }
  
  /**
   * Load location data for the current user
   */
  async loadLocationData() {
    try {
      this.state.locationUpdating.value = true
      this.state.locationError.value = null
      
      // Get device ID from user store or localStorage
      const userStore = useUserStore()
      let deviceId = null
      
      if (userStore.deviceId) {
        deviceId = userStore.deviceId
      } else {
        deviceId = localStorage.getItem('dispositivoID')
      }
      
      if (!deviceId) {
        // Fetch user data if no device ID is found
        await userStore.fetchUserData(auth.currentUser.uid)
        deviceId = userStore.deviceId
        
        if (!deviceId) {
          this.state.locationError.value = 'No se encontró ID de dispositivo'
          this.state.locationUpdating.value = false
          return
        }
      }
      
      // Get initial location data
      try {
        const locationData = await LocationService.getLatestLocation(deviceId)
        this._updateLocationData(locationData)
      } catch (error) {
        this.state.locationError.value = 'Error al cargar ubicación inicial'
        console.error(error)
      }
      
      // Subscribe to location updates
      if (this.state.unsubscribeLocation.value) {
        this.state.unsubscribeLocation.value()
      }
      
      this.state.unsubscribeLocation.value = LocationService.subscribeToLocation(deviceId, (location) => {
        if (location.error) {
          this.state.locationError.value = location.error
        } else {
          this._updateLocationData(location)
        }
        this.state.locationUpdating.value = false
      })
    } catch (error) {
      this.state.locationError.value = 'Error al cargar ubicación'
      console.error(error)
      this.state.locationUpdating.value = false
    }
  }
  
  /**
   * Update location data on the map
   * 
   * @param {Object} location - Location data from the service
   */
  _updateLocationData(location) {
    // Create a LocationModel instance
    const locationModel = new LocationModel({
      latitud: location.latitude,
      longitud: location.longitude,
      ultimaActualizacion: location.lastUpdate
    }, location.deviceId)
    
    // Update state
    this.state.locationData.value = locationModel
    
    // Update map if it exists
    if (this.state.map.value && locationModel.latitude && locationModel.longitude) {
      // Dynamically import Leaflet to ensure it's available
      import('leaflet').then((L) => {
        // Create or update marker
        if (!this.state.marker.value) {
          this.state.marker.value = L.marker([locationModel.latitude, locationModel.longitude])
            .addTo(this.state.map.value)
        } else {
          this.state.marker.value.setLatLng([locationModel.latitude, locationModel.longitude])
        }
        
        // Center map on marker
        this.state.map.value.setView([locationModel.latitude, locationModel.longitude], 15)
      })
    }
  }
  
  /**
   * Set up watchers for reactive state
   */
  _setupWatchers() {
    // Watch for authentication changes
    watch(() => this.state.isAuthenticated.value, (isAuthenticated) => {
      if (isAuthenticated && this.state.map.value) {
        this.loadLocationData()
      } else if (!isAuthenticated) {
        // Clean up if user signs out
        if (this.state.unsubscribeLocation.value) {
          this.state.unsubscribeLocation.value()
          this.state.unsubscribeLocation.value = null
        }
        
        if (this.state.marker.value && this.state.map.value) {
          this.state.map.value.removeLayer(this.state.marker.value)
          this.state.marker.value = null
        }
        
        this.state.locationData.value = null
      }
    })
  }
  
  /**
   * Clean up resources when component is unmounted
   */
  cleanup() {
    if (this.state.unsubscribeLocation.value) {
      this.state.unsubscribeLocation.value()
    }
    
    if (this.state.map.value) {
      this.state.map.value.remove()
    }
  }
  
  /**
   * Format a date as a readable string
   * 
   * @param {Date} date - Date to format
   * @returns {string} Formatted date
   */
  formatDateTime(date) {
    if (!date) return 'N/A'
    
    // Format date as "DD/MM/YYYY HH:MM:SS"
    const d = new Date(date)
    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`
  }
} 