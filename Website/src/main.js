import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'

// Importar AOS y Animate.css
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Inicializar AOS
app.mount('#app').$nextTick(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })
}) 