<template>
  <div class="login-page animate-fade-in">
    <!-- bolas que flotan -->
    <div class="background-elements">
      <div class="floating-element element-1"></div>
      <div class="floating-element element-2"></div>
      <div class="floating-element element-3"></div>
    </div>

    <div class="form-container animate-fade-in-delay" :class="{ 'form-shake': hasError }">
      <!-- Sección de bienvenida -->
      <div class="welcome-section">
        <h1 class="welcome-title">¡Bienvenido de vuelta!</h1>
        <p class="welcome-subtitle">Inicia sesión para monitorear a tus hijos</p>
      </div>

      <!-- Error Message -->
      <transition name="error-slide">
        <div v-if="errorMessage" class="error-message">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="2"/>
            <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="2"/>
          </svg>
          {{ errorMessage }}
        </div>
      </transition>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="login-form">
        <!-- Email Field -->
        <div class="input-group">
          <label for="email" class="input-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
            </svg>
            Correo electrónico
          </label>
          <div class="input-wrapper">
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="ejemplo@correo.com"
              class="input-field"
              :class="{
                'input-valid': emailValid && email.length > 0,
                'input-error': emailError && email.length > 0
              }"
              required
              autocomplete="email"
              :disabled="isLoading"
              @blur="validateEmail"
              @input="clearEmailError"
            />
            <div class="input-status">
              <svg v-if="emailValid && email.length > 0" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4" stroke="#48bb78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="#48bb78" stroke-width="2"/>
              </svg>
            </div>
          </div>
          <transition name="field-error">
            <div v-if="emailError && email.length > 0" class="field-error-message">
              {{ emailError }}
            </div>
          </transition>
        </div>

        <!-- Password Field -->
        <div class="input-group">
          <label for="password" class="input-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
              <circle cx="12" cy="16" r="1" stroke="currentColor" stroke-width="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="2"/>
            </svg>
            Contraseña
          </label>
          <div class="input-wrapper">
            <input
              id="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Tu contraseña segura"
              class="input-field"
              :class="{
                'input-valid': passwordValid && password.length > 0,
                'input-error': passwordError && password.length > 0
              }"
              required
              autocomplete="current-password"
              :disabled="isLoading"
              @blur="validatePassword"
              @input="clearPasswordError"
            />
            <div class="input-status">
              <svg v-if="passwordValid && password.length > 0" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4" stroke="#48bb78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="#48bb78" stroke-width="2"/>
              </svg>
            </div>
            <button
              type="button"
              @click="togglePasswordVisibility"
              class="password-toggle"
              :disabled="isLoading"
            >
              <svg v-if="showPassword" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
              </svg>
            </button>
          </div>
          <transition name="field-error">
            <div v-if="passwordError && password.length > 0" class="field-error-message">
              {{ passwordError }}
            </div>
          </transition>
        </div>

        <!-- Submit Button -->
        <button 
          type="submit" 
          :disabled="!isFormValid || isLoading"
          class="submit-button"
          :class="{ 'loading': isLoading }"
        >
          <div class="submit-content">
            <svg v-if="isLoading" class="loading-spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12a9 9 0 11-6.219-8.56" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {{ isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión' }}
          </div>
        </button>
      </form>

      <!-- Divider -->
      <div class="divider">
        <span class="divider-text">¿Aún no tienes una cuenta?</span>
      </div>

      <!-- Register Link -->
      <router-link to="/register" class="register-link">
        <div class="register-content">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="8.5" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
            <line x1="20" y1="8" x2="20" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="23" y1="11" x2="17" y2="11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Crear nueva cuenta
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
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
    const showPassword = ref(false)
    const hasError = ref(false)
    
    // Validation states
    const emailError = ref('')
    const passwordError = ref('')
    const emailValid = ref(false)
    const passwordValid = ref(false)
    
    const router = useRouter()
    const userStore = useUserStore()

    // Form validation
    const isFormValid = computed(() => {
      return email.value && password.value && !emailError.value && !passwordError.value
    })

    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!email.value) {
        emailError.value = 'El correo es requerido'
        emailValid.value = false
      } else if (!emailRegex.test(email.value)) {
        emailError.value = 'Introduce un correo válido'
        emailValid.value = false
      } else {
        emailError.value = ''
        emailValid.value = true
      }
    }

    const validatePassword = () => {
      if (!password.value) {
        passwordError.value = 'La contraseña es requerida'
        passwordValid.value = false
      } else if (password.value.length < 6) {
        passwordError.value = 'La contraseña debe tener al menos 6 caracteres'
        passwordValid.value = false
      } else {
        passwordError.value = ''
        passwordValid.value = true
      }
    }

    const clearEmailError = () => {
      emailError.value = ''
    }

    const clearPasswordError = () => {
      passwordError.value = ''
    }

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value
    }

    const handleLogin = async () => {
      try {
        validateEmail()
        validatePassword()
        
        if (!isFormValid.value) return

        isLoading.value = true
        errorMessage.value = ''
        hasError.value = false
        
        const result = await userStore.login(email.value, password.value)
        
        if (result.success) {
          if (rememberMe.value) {
            localStorage.setItem('rememberUser', 'true')
          }
          
          router.push('/map')
        } else {
          errorMessage.value = result.error || 'Error al iniciar sesión'
          hasError.value = true
          setTimeout(() => hasError.value = false, 600)
        }
      } catch (error) {
        console.error('Login error:', error)
        errorMessage.value = 'Error al iniciar sesión'
        hasError.value = true
        setTimeout(() => hasError.value = false, 600)
      } finally {
        isLoading.value = false
      }
    }

    // Real-time validation
    watch(email, () => {
      if (emailValid.value || emailError.value) {
        validateEmail()
      }
    })

    watch(password, () => {
      if (passwordValid.value || passwordError.value) {
        validatePassword()
      }
    })
    
    return {
      email,
      password,
      rememberMe,
      isLoading,
      errorMessage,
      showPassword,
      hasError,
      emailError,
      passwordError,
      emailValid,
      passwordValid,
      isFormValid,
      validateEmail,
      validatePassword,
      clearEmailError,
      clearPasswordError,
      togglePasswordVisibility,
      handleLogin
    }
  }
}
</script>

<style scoped>
@import '../styles/login.css';
</style> 