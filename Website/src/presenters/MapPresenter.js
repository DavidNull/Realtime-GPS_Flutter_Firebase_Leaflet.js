import { ref, computed, watch } from 'vue'
import { auth } from '../../firebase'
import { useUserStore } from '../stores/userStore'
import LocationService from '../services/LocationService'
import LocationModel from '../models/LocationModel'

export default class MapPresenter {
  constructor(view) {
    this.view = view
    
    this.state = {
      // User state
      isAuthenticated: computed(() => auth.currentUser !== null),
      
      locationData: ref(null),
      locationError: ref(null),
      locationUpdating: ref(false),
      
      map: ref(null),
      marker: ref(null),
      
      unsubscribeLocation: ref(null)
    }
    
    this._setupWatchers()
  }
  
  initMap(L, mapId) {
    // Better initial coordinates for Spain (more centered)
    this.state.map.value = L.map(mapId, {
      zoomControl: false
    }).setView([40.0, -4.0], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.state.map.value);

    this.L = L;

    // Ensure proper sizing and centering
    setTimeout(() => {
      if (this.state.map.value) {
        this.state.map.value.invalidateSize();
        // Re-center the map to ensure proper display
        this.state.map.value.setView([40.0, -4.0], 6);
        console.log("Map invalidSize called and recentered");
      }
    }, 200); // Increased delay for better reliability

    window.addEventListener('resize', () => {
      if (this.state.map.value) {
        this.state.map.value.invalidateSize();
      }
    });

    if (this.state.isAuthenticated.value) {
      this.loadLocationData();
    }
  }
  
  async loadLocationData() {
    try {
      this.state.locationUpdating.value = true
      this.state.locationError.value = null
      
      const userStore = useUserStore()
      let deviceId = null
      
      if (userStore.deviceId) {
        deviceId = userStore.deviceId
      } else {
        deviceId = localStorage.getItem('dispositivoID')
      }
      
      if (!deviceId) {
        await userStore.fetchUserData(auth.currentUser.uid)
        deviceId = userStore.deviceId
        
        if (!deviceId) {
          this.state.locationError.value = 'No se encontró ID de dispositivo'
          this.state.locationUpdating.value = false
          return
        }
      }
      
      try {
        const locationData = await LocationService.getLatestLocation(deviceId)
        this._updateLocationData(locationData)
      } catch (error) {
        this.state.locationError.value = 'Error al cargar ubicación inicial'
        console.error(error)
      }
      
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
  
  _updateLocationData(location) {
    const locationModel = new LocationModel({
      latitud: location.latitude,
      longitud: location.longitude,
      ultimaActualizacion: location.lastUpdate
    }, location.deviceId);

    this.state.locationData.value = locationModel;

    if (this.state.map.value && locationModel.latitude && locationModel.longitude && this.L) {
      const L = this.L;

      const childIcon = L.icon({
          iconUrl: '/images/niño.png',
          iconSize:     [50, 50], 
          iconAnchor:   [25, 50], 
          popupAnchor:  [0, -50] 
      });

      if (!this.state.marker.value) {
        this.state.marker.value = L.marker(
          [locationModel.latitude, locationModel.longitude]
        ).addTo(this.state.map.value);
      } else {
        this.state.marker.value.setLatLng([locationModel.latitude, locationModel.longitude]);
      }

      this.state.map.value.setView([locationModel.latitude, locationModel.longitude], 15);
    }
  }
  
  _setupWatchers() {
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
  
  cleanup() {
    if (this.state.unsubscribeLocation.value) {
      this.state.unsubscribeLocation.value()
    }
    
    if (this.state.map.value) {
      this.state.map.value.remove()
    }
  }
  
  formatDateTime(date) {
    if (!date) return 'N/A'
    
    // Format "DD/MM/YYYY HH:MM:SS"
    const d = new Date(date)
    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`
  }
} 