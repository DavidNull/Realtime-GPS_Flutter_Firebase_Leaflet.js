<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
      <div class="text-center">
        <router-link to="/">
          <img class="mx-auto h-16 w-auto" src="/images/favicon.png" alt="Logo">
        </router-link>
        <h2 class="mt-6 text-3xl font-extrabold text-primary">
          Iniciar Sesión
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          O
          <router-link to="/register" class="font-medium text-blue-800 hover:text-blue-500">
            <strong>regístrate</strong> si aún no tienes cuenta
          </router-link>
        </p>
      </div>
      
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div v-if="errorMessage" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {{ errorMessage }}
        </div>
        
        <div class="rounded-md -space-y-px">
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
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input 
              id="remember-me" 
              name="remember-me" 
              type="checkbox" 
              v-model="rememberMe"
              class="h-4 w-4 text-primary focus:ring-primary/50 border-gray-300 rounded" 
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Recordarme
            </label>
          </div>
        </div>

        <div>
          <button 
            type="submit" 
            class="btn btn-primary w-full flex justify-center py-2"
            :disabled="isLoading"
          >
            <span v-if="isLoading" class="flex items-center">
              <svg class="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Iniciando sesión...
            </span>
            <span v-else>Iniciar Sesión</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'

export default {
  name: 'LoginView',
  setup() {
    const email = ref('')
    const password = ref('')
    const rememberMe = ref(false)
    const isLoading = ref(false)
    const errorMessage = ref('')
    
    const router = useRouter()
    
    const userStore = useUserStore()

    const handleLogin = async () => {
      try {
        isLoading.value = true
        errorMessage.value = ''
        
        const result = await userStore.login(email.value, password.value)
        
        if (result.success) {
          if (rememberMe.value) {
            localStorage.setItem('rememberUser', 'true')
          }
          
          router.push('/map')
        } else {
          errorMessage.value = result.error || 'Error al iniciar sesión'
        }
      } catch (error) {
        console.error('Login error:', error)
        errorMessage.value = 'Error al iniciar sesión'
      } finally {
        isLoading.value = false
      }
    }
    
    return {
      email,
      password,
      rememberMe,
      isLoading,
      errorMessage,
      handleLogin
    }
  }
}
</script> 