<template>
  <div class="register-page animate-fade-in">
    <!-- Animated Background Elements -->
    <div class="background-elements">
      <div class="floating-element element-1"></div>
      <div class="floating-element element-2"></div>
      <div class="floating-element element-3"></div>
    </div>

    <div class="form-container animate-fade-in-delay" :class="{ 'form-shake': formShake }">
      <!-- Welcome Section -->
      <div class="welcome-section">
        <h1 class="welcome-title">Crea tu cuenta</h1>
        <p class="welcome-subtitle">Únete para proteger y localizar a tu familia</p>
      </div>

      <!-- Error Message -->
      <transition name="error-slide">
        <div v-if="errorMessage" class="error-message">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="2"/>
            <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="2"/>
          </svg>
          {{ errorMessage }}
        </div>
      </transition>

      <!-- Success Message -->
      <transition name="error-slide">
        <div v-if="successMessage" class="success-message">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
          </svg>
          {{ successMessage }}
        </div>
      </transition>

      <!-- Register Form -->
      <form @submit.prevent="handleRegister" class="register-form">
        <!-- Name Field -->
        <div class="input-group">
          <label for="name" class="input-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
            </svg>
            Nombre completo
          </label>
          <div class="input-wrapper">
            <input
              id="name"
              v-model="name"
              type="text"
              placeholder="Escribe tu nombre completo"
              class="input-field"
              :class="{
                'input-valid': nameValidation.isValid && name.length > 0,
                'input-error': !nameValidation.isValid && name.length > 0
              }"
              required
              autocomplete="name"
              :aria-describedby="!nameValidation.isValid && name.length > 0 ? 'name-error' : null"
            />
            <div class="input-status">
              <svg v-if="nameValidation.isValid && name.length > 0" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4" stroke="#48bb78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="#48bb78" stroke-width="2"/>
              </svg>
              <svg v-else-if="!nameValidation.isValid && name.length > 0" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#f56565" stroke-width="2"/>
                <line x1="15" y1="9" x2="9" y2="15" stroke="#f56565" stroke-width="2"/>
                <line x1="9" y1="9" x2="15" y2="15" stroke="#f56565" stroke-width="2"/>
              </svg>
            </div>
          </div>
          <transition name="field-error">
            <div v-if="!nameValidation.isValid && name.length > 0" id="name-error" class="field-error-message">
              {{ nameValidation.message }}
            </div>
          </transition>
        </div>

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
                'input-valid': emailValidation.isValid && email.length > 0,
                'input-error': !emailValidation.isValid && email.length > 0
              }"
              required
              autocomplete="email"
              :aria-describedby="!emailValidation.isValid && email.length > 0 ? 'email-error' : null"
            />
            <div class="input-status">
              <svg v-if="emailValidation.isValid && email.length > 0" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4" stroke="#48bb78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="#48bb78" stroke-width="2"/>
              </svg>
              <svg v-else-if="!emailValidation.isValid && email.length > 0" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#f56565" stroke-width="2"/>
                <line x1="15" y1="9" x2="9" y2="15" stroke="#f56565" stroke-width="2"/>
                <line x1="9" y1="9" x2="15" y2="15" stroke="#f56565" stroke-width="2"/>
              </svg>
            </div>
          </div>
          <transition name="field-error">
            <div v-if="!emailValidation.isValid && email.length > 0" id="email-error" class="field-error-message">
              {{ emailValidation.message }}
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
              placeholder="Mínimo 6 caracteres"
              class="input-field"
              :class="{
                'input-valid': passwordValidation.isValid && password.length > 0,
                'input-error': !passwordValidation.isValid && password.length > 0
              }"
              required
              autocomplete="new-password"
              :aria-describedby="!passwordValidation.isValid && password.length > 0 ? 'password-error' : null"
            />
            <div class="input-status">
              <svg v-if="passwordValidation.isValid && password.length > 0" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4" stroke="#48bb78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="#48bb78" stroke-width="2"/>
              </svg>
              <svg v-else-if="!passwordValidation.isValid && password.length > 0" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#f56565" stroke-width="2"/>
                <line x1="15" y1="9" x2="9" y2="15" stroke="#f56565" stroke-width="2"/>
                <line x1="9" y1="9" x2="15" y2="15" stroke="#f56565" stroke-width="2"/>
              </svg>
            </div>
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="password-toggle"
              :aria-label="showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'"
            >
              <svg v-if="showPassword" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
              </svg>
            </button>
          </div>
          <transition name="field-error">
            <div v-if="!passwordValidation.isValid && password.length > 0" id="password-error" class="field-error-message">
              {{ passwordValidation.message }}
            </div>
          </transition>
        </div>

        <!-- Confirm Password Field -->
        <div class="input-group">
          <label for="confirmPassword" class="input-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
              <circle cx="12" cy="16" r="1" stroke="currentColor" stroke-width="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="2"/>
            </svg>
            Confirmar contraseña
          </label>
          <div class="input-wrapper">
            <input
              id="confirmPassword"
              v-model="confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              placeholder="Confirma tu contraseña"
              class="input-field"
              :class="{
                'input-valid': confirmPasswordValidation.isValid && confirmPassword.length > 0,
                'input-error': !confirmPasswordValidation.isValid && confirmPassword.length > 0
              }"
              required
              autocomplete="new-password"
              :aria-describedby="!confirmPasswordValidation.isValid && confirmPassword.length > 0 ? 'confirm-password-error' : null"
            />
            <div class="input-status">
              <svg v-if="confirmPasswordValidation.isValid && confirmPassword.length > 0" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4" stroke="#48bb78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="#48bb78" stroke-width="2"/>
              </svg>
              <svg v-else-if="!confirmPasswordValidation.isValid && confirmPassword.length > 0" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#f56565" stroke-width="2"/>
                <line x1="15" y1="9" x2="9" y2="15" stroke="#f56565" stroke-width="2"/>
                <line x1="9" y1="9" x2="15" y2="15" stroke="#f56565" stroke-width="2"/>
              </svg>
            </div>
            <button
              type="button"
              @click="showConfirmPassword = !showConfirmPassword"
              class="password-toggle"
              :aria-label="showConfirmPassword ? 'Ocultar confirmar contraseña' : 'Mostrar confirmar contraseña'"
            >
              <svg v-if="showConfirmPassword" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
              </svg>
            </button>
          </div>
          <transition name="field-error">
            <div v-if="!confirmPasswordValidation.isValid && confirmPassword.length > 0" id="confirm-password-error" class="field-error-message">
              {{ confirmPasswordValidation.message }}
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
            <svg v-if="isLoading" class="loading-spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12a9 9 0 11-6.219-8.56" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="8.5" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
              <line x1="20" y1="8" x2="20" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <line x1="23" y1="11" x2="17" y2="11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {{ isLoading ? 'Creando cuenta...' : 'Crear Cuenta' }}
          </div>
        </button>
      </form>

      <!-- Divider -->
      <div class="divider">
        <span class="divider-text">¿Ya tienes una cuenta?</span>
      </div>

      <!-- Login Link -->
      <router-link to="/login" class="login-link">
        <div class="login-content">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Iniciar sesión
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../../firebase'

export default {
  name: 'Register',
  setup() {
    const router = useRouter()
    
    // Form data
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const showPassword = ref(false)
    const showConfirmPassword = ref(false)
    
    // UI state
    const isLoading = ref(false)
    const errorMessage = ref('')
    const successMessage = ref('')
    const formShake = ref(false)

    // Validation computed properties
    const nameValidation = computed(() => {
      if (name.value.length === 0) return { isValid: true, message: '' }
      if (name.value.length < 2) return { isValid: false, message: 'El nombre debe tener al menos 2 caracteres' }
      if (name.value.length > 50) return { isValid: false, message: 'El nombre no puede tener más de 50 caracteres' }
      if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(name.value)) return { isValid: false, message: 'El nombre solo puede contener letras y espacios' }
      return { isValid: true, message: '' }
    })

    const emailValidation = computed(() => {
      if (email.value.length === 0) return { isValid: true, message: '' }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email.value)) return { isValid: false, message: 'Por favor, introduce un email válido' }
      return { isValid: true, message: '' }
    })

    const passwordValidation = computed(() => {
      if (password.value.length === 0) return { isValid: true, message: '' }
      if (password.value.length < 6) return { isValid: false, message: 'La contraseña debe tener al menos 6 caracteres' }
      if (password.value.length > 128) return { isValid: false, message: 'La contraseña es demasiado larga' }
      return { isValid: true, message: '' }
    })

    const confirmPasswordValidation = computed(() => {
      if (confirmPassword.value.length === 0) return { isValid: true, message: '' }
      if (confirmPassword.value !== password.value) return { isValid: false, message: 'Las contraseñas no coinciden' }
      return { isValid: true, message: '' }
    })

    const isFormValid = computed(() => {
      return nameValidation.value.isValid &&
             emailValidation.value.isValid &&
             passwordValidation.value.isValid &&
             confirmPasswordValidation.value.isValid &&
             name.value.length > 0 &&
             email.value.length > 0 &&
             password.value.length > 0 &&
             confirmPassword.value.length > 0
    })

    const triggerFormShake = () => {
      formShake.value = true
      setTimeout(() => {
        formShake.value = false
      }, 600)
    }

    const generateUniqueId = () => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      let id = ''
      for (let i = 0; i < 6; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length))
      }
      return id
    }

    const handleRegister = async () => {
      // Clear messages
      errorMessage.value = ''
      successMessage.value = ''

      if (!isFormValid.value) {
        errorMessage.value = 'Por favor, completa todos los campos correctamente'
        triggerFormShake()
        return
      }

      isLoading.value = true

      try {
        // Generate unique device ID
        const deviceId = generateUniqueId()

        // Create user with Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
        const user = userCredential.user

        // Save additional user data to Firestore
        await setDoc(doc(db, 'usuarios', user.uid), {
          nombre: name.value,
          email: email.value,
          fechaRegistro: new Date(),
          dispositivoID: deviceId
        })

        // Create ubicaciones document
        await setDoc(doc(db, 'ubicaciones', deviceId), {
          latitud: 0,
          longitud: 0,
          ultimaActualizacion: new Date(),
          usuario: user.uid
        })

        successMessage.value = '¡Cuenta creada exitosamente!'
        
        // Redirect to login after a brief delay
        setTimeout(() => {
          router.push('/login')
        }, 1500)

      } catch (error) {
        console.error('Error creating account:', error)
        
        switch (error.code) {
          case 'auth/email-already-in-use':
            errorMessage.value = 'Este email ya está registrado'
            break
          case 'auth/invalid-email':
            errorMessage.value = 'Email inválido'
            break
          case 'auth/operation-not-allowed':
            errorMessage.value = 'Operación no permitida'
            break
          case 'auth/weak-password':
            errorMessage.value = 'La contraseña es muy débil'
            break
          default:
            errorMessage.value = 'Error al crear la cuenta. Inténtalo de nuevo.'
        }
        
        triggerFormShake()
      } finally {
        isLoading.value = false
      }
    }

    return {
      // Form data
      name,
      email,
      password,
      confirmPassword,
      showPassword,
      showConfirmPassword,
      
      // UI state
      isLoading,
      errorMessage,
      successMessage,
      formShake,
      
      // Validation
      nameValidation,
      emailValidation,
      passwordValidation,
      confirmPasswordValidation,
      isFormValid,
      
      // Methods
      handleRegister,
      triggerFormShake
    }
  }
}
</script>

<style scoped>
@import '../styles/register.css';
</style> 