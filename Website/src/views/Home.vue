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
          <router-link to="/map" class="btn bg-white text-primary hover:bg-gray-100 text-lg px-6 py-3">
            Ver Mapa
          </router-link>
        </div>
      </div>
    </div>
    
    <!-- "Sabias que?" section -->
    <div class="bg-slate-800 text-white py-16">
      <div class="container mx-auto px-4">
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
          <router-link to="/register" class="btn btn-primary text-lg px-6 py-3">
            Regístrate Ahora
          </router-link>
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