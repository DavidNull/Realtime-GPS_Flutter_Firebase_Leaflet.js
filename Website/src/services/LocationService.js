import { db } from '../../firebase'
import { doc, onSnapshot, getDoc } from 'firebase/firestore'

class LocationService {
  subscribeToLocation(deviceId, callback) {
    if (!deviceId) {
      callback({ error: 'No device ID provided' })
      return () => {}
    }
    
    const locationRef = doc(db, "ubicaciones", deviceId)
    
    return onSnapshot(locationRef, 
      (doc) => {
        if (doc.exists()) {
          const data = doc.data()
          callback({
            latitude: data.latitud,
            longitude: data.longitud,
            lastUpdate: data.ultimaActualizacion?.toDate() || new Date(),
            deviceId
          })
        } else {
          callback({ error: 'No location data found' })
        }
      },
      (error) => {
        console.error("Location subscription error:", error)
        callback({ error: error.message })
      }
    )
  }

  async getLatestLocation(deviceId) {
    try {
      if (!deviceId) {
        throw new Error('No device ID provided')
      }
      
      const locationRef = doc(db, "ubicaciones", deviceId)
      const locationDoc = await getDoc(locationRef)
      
      if (locationDoc.exists()) {
        const data = locationDoc.data()
        return {
          latitude: data.latitud,
          longitude: data.longitud,
          lastUpdate: data.ultimaActualizacion?.toDate() || new Date(),
          deviceId
        }
      } else {
        throw new Error('No location data found')
      }
    } catch (error) {
      console.error("Error getting location:", error)
      throw error
    }
  }
}

export default new LocationService() 