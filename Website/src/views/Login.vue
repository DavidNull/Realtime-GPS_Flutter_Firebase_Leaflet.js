<template>
  <div class="login-page animate-fade-in">
    <!-- Animated Background Elements -->
    <div class="background-elements">
      <div class="floating-element element-1"></div>
      <div class="floating-element element-2"></div>
      <div class="floating-element element-3"></div>
    </div>

    <div class="form-container animate-fade-in-delay" :class="{ 'form-shake': hasError }">
      <!-- Welcome Section -->
      <div class="welcome-section">
        <h1 class="welcome-title">¡Bienvenido de vuelta!</h1>
        <p class="welcome-subtitle">Inicia sesión para monitorear a tu familia</p>
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

        <!-- Remember Me -->
        <div class="checkbox-group">
          <label class="checkbox-label">
            <input type="checkbox" v-model="rememberMe" :disabled="isLoading" class="checkbox-input" />
            <span class="checkbox-custom"></span>
            <span class="checkbox-text">Recordarme en este dispositivo</span>
          </label>
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

        <!-- Forgot Password -->
        <div class="forgot-password">
          <a href="#" class="forgot-link">¿Olvidaste tu contraseña?</a>
        </div>
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
/* Main layout */
.login-page {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 87.7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.5rem;
  position: relative;
}

.login-page::before {
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

/* Checkbox styling */
.checkbox-group {
  margin-bottom: 1rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 13px;
  color: #4a5568;
}

.checkbox-input {
  display: none;
}

.checkbox-custom {
  width: 16px;
  height: 16px;
  border: 2px solid #e2e8f0;
  border-radius: 4px;
  margin-right: 8px;
  position: relative;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
}

.checkbox-input:checked + .checkbox-custom {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-color: #667eea;
}

.checkbox-input:checked + .checkbox-custom::after {
  content: '';
  position: absolute;
  top: 1px;
  left: 4px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-text {
  font-weight: 500;
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
  margin-bottom: 0.5rem;
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

/* Error message */
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

.error-message svg {
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

/* Forgot password */
.forgot-password {
  text-align: center;
  margin-bottom: 1rem;
}

.forgot-link {
  color: #667eea;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.forgot-link:hover {
  color: #764ba2;
  text-decoration: underline;
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

/* Register link */
.register-link {
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

.register-link:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(81, 207, 102, 0.4);
  color: white;
  text-decoration: none;
}

.register-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.register-content svg {
  margin-right: 6px;
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

/* Responsive design */
@media (max-width: 480px) {
  .form-container {
    padding: 1.5rem;
    margin: 0.25rem;
    border-radius: 20px;
  }
  
  .login-page {
    padding: 0.25rem;
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
    margin-bottom: 0.25rem;
  }

  .divider {
    margin: 0.5rem 0;
  }
}

/* Focus states for accessibility */
.submit-button:focus-visible,
.register-link:focus-visible {
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