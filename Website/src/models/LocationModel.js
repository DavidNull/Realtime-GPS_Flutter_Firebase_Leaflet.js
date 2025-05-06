/**
 * Location Model
 * 
 * Represents location data from Firebase
 */
export default class LocationModel {
  /**
   * Create a new LocationModel
   * 
   * @param {Object} data - Raw location data from Firebase
   * @param {number} data.latitud - Latitude
   * @param {number} data.longitud - Longitude
   * @param {Date|Object} data.ultimaActualizacion - Last update timestamp
   * @param {string} data.usuario - User ID associated with this location
   * @param {string} deviceId - Device ID
   */
  constructor(data, deviceId) {
    this.latitude = data.latitud || 0
    this.longitude = data.longitud || 0
    this.lastUpdate = this._parseTimestamp(data.ultimaActualizacion) || new Date()
    this.userId = data.usuario || null
    this.deviceId = deviceId || null
  }
  
  /**
   * Parse a Firebase timestamp to a JavaScript Date
   * 
   * @param {any} timestamp - Firebase timestamp
   * @returns {Date} JavaScript Date object
   */
  _parseTimestamp(timestamp) {
    if (!timestamp) return new Date()
    
    // If it's already a Date object
    if (timestamp instanceof Date) return timestamp
    
    // If it's a Firebase timestamp with toDate method
    if (typeof timestamp.toDate === 'function') return timestamp.toDate()
    
    // If it's a number (seconds or milliseconds)
    if (typeof timestamp === 'number') {
      // Check if it's seconds (Firebase) or milliseconds (JS)
      return timestamp < 1000000000000 
        ? new Date(timestamp * 1000) // Convert seconds to milliseconds
        : new Date(timestamp)
    }
    
    // Default
    return new Date()
  }
  
  /**
   * Format the lastUpdate as a readable string
   * 
   * @returns {string} Formatted date and time
   */
  getFormattedLastUpdate() {
    return this.lastUpdate.toLocaleString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }
  
  /**
   * Get time elapsed since the last update
   * 
   * @returns {string} Human-readable time elapsed
   */
  getTimeElapsed() {
    const now = new Date()
    const diff = now - this.lastUpdate
    
    // Convert to seconds
    const seconds = Math.floor(diff / 1000)
    
    if (seconds < 60) return `Hace ${seconds} segundos`
    
    // Convert to minutes
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `Hace ${minutes} minutos`
    
    // Convert to hours
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `Hace ${hours} horas`
    
    // Convert to days
    const days = Math.floor(hours / 24)
    return `Hace ${days} días`
  }
  
  /**
   * Check if the location data is recent (less than 5 minutes old)
   * 
   * @returns {boolean} True if the location is recent
   */
  isRecent() {
    const now = new Date()
    const diff = now - this.lastUpdate
    
    // Return true if less than 5 minutes old
    return diff < 5 * 60 * 1000
  }
} 