/**
 * Location Model
 * 
 * Represents location data from Firebase
 */
export default class LocationModel {
  constructor(data, deviceId) {
    this.latitude = data.latitud || 0
    this.longitude = data.longitud || 0
    this.lastUpdate = this._parseTimestamp(data.ultimaActualizacion) || new Date()
    this.userId = data.usuario || null
    this.deviceId = deviceId || null
  }
  
  _parseTimestamp(timestamp) {
    if (!timestamp) return new Date()
    
    if (timestamp instanceof Date) return timestamp
    
    if (typeof timestamp.toDate === 'function') return timestamp.toDate()
    
    if (typeof timestamp === 'number') {
      return timestamp < 1000000000000 
        ? new Date(timestamp * 1000)
        : new Date(timestamp)
    }
    
    return new Date()
  }
  
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
  
  getTimeElapsed() {
    const now = new Date()
    const diff = now - this.lastUpdate
    
    const seconds = Math.floor(diff / 1000)
    
    if (seconds < 60) return `Hace ${seconds} segundos`
    
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `Hace ${minutes} minutos`
    
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `Hace ${hours} horas`
    
    const days = Math.floor(hours / 24)
    return `Hace ${days} días`
  }
  
  isRecent() {
    const now = new Date()
    const diff = now - this.lastUpdate
    
    return diff < 5 * 60 * 1000
  }
} 