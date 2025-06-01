import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Map from '../views/Map.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import { auth } from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresGuest: true } // Solo para usuarios no autenticados
  },
  {
    path: '/map',
    name: 'Map',
    component: Map,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresGuest: true } // Solo para usuarios no autenticados
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresGuest: true } // Solo para usuarios no autenticados
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Función para obtener el estado de autenticación actual
const getCurrentUser = () => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      resolve(user)
    })
  })
}

// Guard de navegación global
router.beforeEach(async (to, from, next) => {
  const user = await getCurrentUser()
  
  // Si la ruta requiere autenticación y no hay usuario
  if (to.meta.requiresAuth && !user) {
    return next('/login')
  }
  
  // Si la ruta es solo para invitados (no autenticados) y hay usuario autenticado
  if (to.meta.requiresGuest && user) {
    return next('/map')
  }
  
  next()
})

export default router 