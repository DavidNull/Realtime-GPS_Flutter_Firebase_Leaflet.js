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
              placeholder="Repite tu contraseña"
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
              :aria-label="showConfirmPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'"
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
            <svg v-if="isLoading" class="loading-spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12a9 9 0 11-6.219-8.56" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="8.5" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
              <line x1="20" y1="8" x2="20" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <line x1="23" y1="11" x2="17" y2="11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {{ isLoading ? 'Creando cuenta...' : 'Crear cuenta' }}
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
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="10,17 15,12 10,7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="15" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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

    const handleRegister = async () => {
      // Clear previous messages
      errorMessage.value = ''
      successMessage.value = ''

      // Validate form
      if (!isFormValid.value) {
        errorMessage.value = 'Por favor, completa todos los campos correctamente'
        triggerFormShake()
        return
      }

      isLoading.value = true

      try {
        // Create user with Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
        const user = userCredential.user

        // Save additional user data to Firestore
        await setDoc(doc(db, 'users', user.uid), {
          name: name.value,
          email: email.value,
          createdAt: new Date(),
          role: 'user'
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
/* Main layout */
.register-page {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 87.7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.5rem;
  position: relative;
}

.register-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, transparent 100%);
  pointer-events: none;
  z-index: 1;
}

/* Animated background elements */
.background-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.floating-element {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  animation: float 15s infinite ease-in-out;
}

.element-1 {
  width: 150px;
  height: 150px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.element-2 {
  width: 100px;
  height: 100px;
  top: 70%;
  right: 15%;
  animation-delay: 5s;
}

.element-3 {
  width: 80px;
  height: 80px;
  top: 30%;
  right: 25%;
  animation-delay: 10s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
  25% { transform: translateY(-15px) translateX(8px) scale(1.05); }
  50% { transform: translateY(8px) translateX(-10px) scale(0.95); }
  75% { transform: translateY(-10px) translateX(4px) scale(1.02); }
}

/* Form container */
.form-container {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.12),
    0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  padding: 1.5rem;
  width: 100%;
  max-width: 400px;
  margin: 0.5rem;
  position: relative;
  transition: all 0.3s ease;
}

.form-container:hover {
  transform: translateY(-1px);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.form-shake {
  animation: shake 0.6s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
  20%, 40%, 60%, 80% { transform: translateX(3px); }
}

/* Welcome section */
.welcome-section {
  text-align: center;
  margin-bottom: 1rem;
}

.welcome-title {
  font-size: 1.4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.welcome-subtitle {
  color: #718096;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Animations */
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 0.8s ease-out 0.2s backwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Input styling */
.input-group {
  position: relative;
  margin-bottom: 0.75rem;
}

.input-label {
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 6px;
  transition: color 0.3s ease;
}

.input-label svg {
  margin-right: 6px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-field {
  width: 100%;
  padding: 12px 14px;
  padding-right: 40px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 15px;
  background: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.input-field:focus {
  outline: none;
  border-color: #667eea;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 
    0 0 0 3px rgba(102, 126, 234, 0.1),
    0 3px 12px rgba(102, 126, 234, 0.1);
  transform: translateY(-1px);
}

.input-field.input-valid {
  border-color: #48bb78;
  background: rgba(240, 253, 244, 0.8);
}

.input-field.input-error {
  border-color: #f56565;
  background: rgba(254, 242, 242, 0.8);
  animation: inputError 0.3s ease;
}

@keyframes inputError {
  0%, 100% { transform: translateX(0); }
  25%, 75% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
}

.input-status {
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.password-toggle {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #a0aec0;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 4px;
  border-radius: 6px;
}

.password-toggle:hover {
  color: #667eea;
  background: rgba(102, 126, 234, 0.1);
}

.field-error-message {
  color: #f56565;
  font-size: 11px;
  margin-top: 3px;
  font-weight: 500;
}

/* Transitions */
.error-slide-enter-active, .error-slide-leave-active {
  transition: all 0.3s ease;
}

.error-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.error-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.field-error-enter-active, .field-error-leave-active {
  transition: all 0.3s ease;
}

.field-error-enter-from, .field-error-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

/* Button styling */
.submit-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 3px 15px rgba(102, 126, 234, 0.3);
  margin-bottom: 0.75rem;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.submit-button:active:not(:disabled) {
  transform: translateY(0);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.submit-content {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.loading {
  opacity: 0.8;
}

.loading-spinner {
  animation: spin 1s linear infinite;
  margin-right: 6px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Error and success messages */
.error-message {
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  color: white;
  padding: 10px 14px;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 12px rgba(255, 107, 107, 0.3);
  animation: errorSlideIn 0.3s ease;
}

.success-message {
  background: linear-gradient(135deg, #51cf66, #40c057);
  color: white;
  padding: 10px 14px;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 12px rgba(81, 207, 102, 0.3);
  animation: errorSlideIn 0.3s ease;
}

.error-message svg,
.success-message svg {
  margin-right: 6px;
  flex-shrink: 0;
}

@keyframes errorSlideIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Divider */
.divider {
  text-align: center;
  margin: 0.75rem 0;
}

.divider-text {
  color: #718096;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
}

/* Login link */
.login-link {
  display: block;
  background: linear-gradient(135deg, #51cf66, #40c057);
  color: white;
  padding: 12px 18px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  box-shadow: 0 3px 15px rgba(81, 207, 102, 0.3);
  text-align: center;
}

.login-link:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(81, 207, 102, 0.4);
  color: white;
  text-decoration: none;
}

.login-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-content svg {
  margin-right: 6px;
}

/* Responsive design */
@media (max-width: 480px) {
  .form-container {
    padding: 1.5rem;
    margin: 0.25rem;
    border-radius: 20px;
  }
  
  .register-page {
    padding: 0.25rem;
  }

  .input-field {
    padding: 12px 14px;
    padding-right: 45px;
  }

  .submit-button {
    padding: 14px 20px;
  }

  .floating-element {
    display: none;
  }

  .welcome-title {
    font-size: 1.75rem;
  }
}

@media (max-height: 700px) {
  .form-container {
    padding: 1rem;
    margin: 0.25rem;
  }
  
  .input-group {
    margin-bottom: 0.75rem;
  }

  .welcome-section {
    margin-bottom: 0.75rem;
  }
}

@media (max-height: 600px) {
  .form-container {
    padding: 0.75rem;
  }

  .input-group {
    margin-bottom: 0.5rem;
  }

  .welcome-section {
    margin-bottom: 0.5rem;
  }

  .submit-button {
    margin-bottom: 0.5rem;
  }

  .divider {
    margin: 0.5rem 0;
  }
}

/* Focus states for accessibility */
.submit-button:focus-visible,
.login-link:focus-visible {
  outline: 2px solid #667eea;
  outline-offset: 2px;
}

.input-field:focus-visible {
  outline: none;
}

.password-toggle:focus-visible {
  outline: 2px solid #667eea;
  outline-offset: 2px;
  border-radius: 6px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .form-container {
    border: 2px solid #000;
  }
  
  .input-field {
    border-width: 2px;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .floating-element {
    animation: none;
  }
}
</style> 