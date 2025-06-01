<template>
  <div class="min-h-screen">
    <!-- MAP VIDEO section -->
    <div class="relative">
      <div class="absolute inset-0 overflow-hidden">
        <video autoplay loop muted class="min-w-full min-h-full object-cover">
          <source src="/videos/Fondoindex.mp4" type="video/mp4">
        </video>
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div class="relative container mx-auto px-4 py-32 flex flex-col items-center text-white">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-center">Where is my kid?</h1>
        <p class="text-xl md:text-2xl mb-8 text-center max-w-2xl">
          La plataforma que te mantiene conectado con la ubicación de tus hijos en tiempo real
        </p>
        <div class="flex space-x-4">
          <router-link to="/register" class="btn btn-primary text-lg px-6 py-3">
            Comenzar Ahora
          </router-link>
        </div>
      </div>
    </div>
    
    <!-- "Sabias que?" section -->
    <div class="bg-slate-800 text-white py-16 relative">
      <!-- Animated floating elements inspired by modern UI designs -->
      <!-- https://github.com/css-tricks/floating-elements-animation -->
      <div class="background-elements">
        <div class="floating-element element-1"></div>
        <div class="floating-element element-2"></div>
        <div class="floating-element element-3"></div>
        <div class="floating-element element-4"></div>
        <div class="floating-element element-5"></div>
        <div class="floating-element element-6"></div>
        <div class="floating-element element-7"></div>
        <div class="floating-element element-8"></div>
        <div class="floating-element element-9"></div>
        <div class="floating-element element-10"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl font-bold text-center mb-12">¿Sabías que?</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-slate-700 rounded-lg p-6 shadow-md transform transition-transform hover:scale-105">
            <h3 class="text-xl font-semibold mb-3 text-sky-400">Atropellos infantiles</h3>
            <p>En España <strong>el 16% de los atropellos al año son a menores de 14 años</strong>, eso son <strong>1540 niños al año.</strong></p>
          </div>
          
          <div class="bg-slate-700 rounded-lg p-6 shadow-md transform transition-transform hover:scale-105">
            <h3 class="text-xl font-semibold mb-3 text-green-400">Accidentes en la calle</h3>
            <p>Un estudio realizado en Andalucía indica que <strong>el 34,6% de los accidentes infantiles ocurren en la calle por ir desatendidos o solos.</strong></p>
          </div>
          
          <div class="bg-slate-700 rounded-lg p-6 shadow-md transform transition-transform hover:scale-105">
            <h3 class="text-xl font-semibold mb-3 text-red-400">Secuestros de menores</h3>
            <p>Los <strong>secuestros de menores</strong> con fines criminales en España <strong>aumentaron un 125% de 2023 a 2024</strong>, pasando de 8 a 18.</p>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <h4 class="text-2xl font-bold mb-6">¿Y si fuera tu hijo?</h4>
        </div>
      </div>
    </div>
    
    <!-- "Que ofrecemos?" section -->
    <div class="bg-gray-200 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">¿Qué ofrecemos?</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg p-6 shadow-md">
            <div class="text-primary text-4xl mb-4">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-gray-700">Seguimiento en Tiempo Real</h3>
            <p class="text-gray-600">Monitorea la ubicación exacta de tus hijos <strong>en tiempo real</strong>.</p>
          </div>
          
          <div class="bg-white rounded-lg p-6 shadow-md">
            <div class="text-primary text-4xl mb-4">
              <i class="fas fa-mobile-alt"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-gray-700">App Móvil Sencilla</h3>
            <p class="text-gray-600">Aplicación móvil fácil de usar para tus hijos con solo 2 opciones: <strong>Añadir ID</strong> y <strong>enviar ubicación</strong>.</p>
          </div>
          
          <div class="bg-white rounded-lg p-6 shadow-md">
            <div class="text-primary text-4xl mb-4">
              <i class="fas fa-lock"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-gray-700">Privacidad y Seguridad</h3>
            <p class="text-gray-600">Datos encriptados y sistema donde solo puede acceder a la ubicación el usuario que tiene el ID.</p>
            <!--Con encriptación me refiero a AES-256 y HTTPS -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
/* 
  - https://github.com/animate-css/animate.css
  - https://github.com/michalsnik/aos (Animate On Scroll)
  - https://github.com/juliangarnier/anime (Anime.js)
*/

.background-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
}

.floating-element {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15));
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: float 16s infinite ease-in-out;
}

/* Different sizes and positions for variety */
.element-1 {
  width: 80px;
  height: 80px;
  top: 5%;
  left: 5%;
  animation-delay: 0s;
}

.element-2 {
  width: 60px;
  height: 60px;
  top: 10%;
  right: 10%;
  animation-delay: 3s;
}

.element-3 {
  width: 90px;
  height: 90px;
  top: 85%;
  left: 15%;
  animation-delay: 6s;
}

.element-4 {
  width: 50px;
  height: 50px;
  top: 90%;
  right: 20%;
  animation-delay: 9s;
}

.element-5 {
  width: 70px;
  height: 70px;
  top: 88%;
  right: 5%;
  animation-delay: 12s;
}

.element-6 {
  width: 65px;
  height: 65px;
  top: 3%;
  right: 30%;
  animation-delay: 15s;
}

.element-7 {
  width: 55px;
  height: 55px;
  top: 92%;
  left: 40%;
  animation-delay: 18s;
}

.element-8 {
  width: 75px;
  height: 75px;
  top: 7%;
  left: 25%;
  animation-delay: 21s;
}

.element-9 {
  width: 45px;
  height: 45px;
  top: 85%;
  right: 35%;
  animation-delay: 24s;
}

.element-10 {
  width: 85px;
  height: 85px;
  top: 4%;
  right: 50%;
  animation-delay: 27s;
}

/* 
  Floating animation keyframes
  Creates a smooth, organic movement pattern
*/
@keyframes float {
  0% { 
    transform: translateY(0px) translateX(0px) scale(1) rotate(0deg); 
  }
  25% { 
    transform: translateY(-40px) translateX(30px) scale(1.1) rotate(90deg); 
  }
  50% { 
    transform: translateY(20px) translateX(-25px) scale(0.9) rotate(180deg); 
  }
  75% { 
    transform: translateY(-30px) translateX(20px) scale(1.05) rotate(270deg); 
  }
  100% { 
    transform: translateY(0px) translateX(0px) scale(1) rotate(360deg); 
  }
}

/* Hide floating elements on smaller screens for better performance */
@media (max-width: 768px) {
  .floating-element {
    display: none;
  }
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  .floating-element {
    animation: none;
  }
}
</style> 