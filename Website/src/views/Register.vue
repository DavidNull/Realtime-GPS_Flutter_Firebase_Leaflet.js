<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
      <div class="text-center">
        <router-link to="/">
          <img class="mx-auto h-16 w-auto" src="/images/favicon.png" alt="Logo">
        </router-link>
        <h2 class="mt-6 text-3xl font-extrabold text-primary">
          Crear una cuenta
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          O
          <router-link to="/login" class="font-medium text-blue-800 hover:text-blue-500">
            <strong>inicia sesión</strong> si ya tienes cuenta
          </router-link>
        </p>
      </div>
      
      <form class="mt-8 space-y-6" @submit.prevent="handleRegister">
        <div v-if="errorMessage" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {{ errorMessage }}
        </div>
        
        <div v-if="successMessage" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
          <div class="font-bold">¡Registro exitoso!</div>
          <div>{{ successMessage }}</div>
        </div>
        
        <div class="rounded-md -space-y-px">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              v-model="name"
              required 
              class="input"
              placeholder="Tu nombre"
            />
          </div>
      
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              v-model="email"
              required 
              class="input"
              placeholder="correo@ejemplo.com"
            />
          </div>
          <br>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input 
              id="password" 
              name="password" 
              type="password"
              v-model="password" 
              required 
              class="input"
              placeholder="••••••••"
            />
          </div>
          <br>
          <div class="mb-4">
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">Confirmar contraseña</label>
            <input 
              id="confirmPassword" 
              name="confirmPassword" 
              type="password"
              v-model="confirmPassword" 
              required 
              class="input"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div>
          <button 
            type="submit" 
            class="btn btn-primary w-full flex justify-center py-2"
            :disabled="isLoading || !isFormValid"
          >
            <span v-if="isLoading" class="flex items-center">
              <svg class="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Registrando...
            </span>
            <span v-else>Registrarse</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'

export default {
  name: 'RegisterView',
  setup() {
    // State
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const isLoading = ref(false)
    const errorMessage = ref('')
    const successMessage = ref('')
    const deviceId = ref('')
    
    // Router
    const router = useRouter()
    
    // User store
    const userStore = useUserStore()
    
    // Computed
    const isFormValid = computed(() => {
      return (
        name.value.trim() !== '' &&
        email.value.trim() !== '' &&
        password.value.length >= 6 &&
        password.value === confirmPassword.value
      )
    })
    
    // Methods
    const handleRegister = async () => {
      try {
        // Reset messages
        errorMessage.value = ''
        successMessage.value = ''
        
        // Basic validation
        if (password.value !== confirmPassword.value) {
          errorMessage.value = 'Las contraseñas no coinciden'
          return
        }
        
        if (password.value.length < 6) {
          errorMessage.value = 'La contraseña debe tener al menos 6 caracteres'
          return
        }
        
        // Start loading
        isLoading.value = true
        
        // Register user
        const result = await userStore.register(name.value, email.value, password.value)
        
        if (result.success) {
          deviceId.value = result.deviceId
          successMessage.value = `Tu ID de dispositivo es: ${result.deviceId}. Guarda esta ID, la necesitarás para la aplicación móvil.`
          
          // Redirect to map after a delay
          setTimeout(() => {
            router.push('/map')
          }, 3000)
        } else {
          errorMessage.value = result.error || 'Error al registrar usuario'
        }
      } catch (error) {
        console.error('Registration error:', error)
        errorMessage.value = 'Error al registrar usuario'
      } finally {
        isLoading.value = false
      }
    }
    
    return {
      name,
      email,
      password,
      confirmPassword,
      isLoading,
      errorMessage,
      successMessage,
      isFormValid,
      handleRegister
    }
  }
}
</script> 