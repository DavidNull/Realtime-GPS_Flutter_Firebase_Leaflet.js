<template>
  <div class="min-h-screen">
    <!-- MAP VIDEO section -->
    <div class="relative">
      <div class="absolute inset-0 overflow-hidden">
        <video autoplay loop muted class="min-w-full min-h-full object-cover animate-fade-from-black">
          <source src="/videos/Fondoindex.mp4" type="video/mp4">
        </video>
        <div class="absolute inset-0 bg-black bg-opacity-50 animate-fade-in"></div>
      </div>
      
      <div class="relative container mx-auto px-4 py-32 flex flex-col items-center text-white">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-center animate__animated animate__fadeInDown">Where is my kid?</h1>
        <p class="text-xl md:text-2xl mb-8 text-center max-w-2xl animate__animated animate__fadeInUp animate__delay-1s">
          La plataforma que te mantiene conectado con la ubicación de tus hijos en tiempo real
        </p>
        <div class="flex space-x-4 animate__animated animate__fadeInUp animate__delay-2s">
          <router-link to="/register" class="btn-gradient text-lg px-8 py-4 hover:animate__animated hover:animate__pulse">
            Comenzar Ahora
          </router-link>
        </div>
      </div>
    </div>
    
    <!-- "Sabias que?" section -->
    <div class="bg-slate-800 text-white py-16 relative">
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
        <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-up">¿Sabías que?</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-slate-700 rounded-lg p-6 shadow-md transform transition-all duration-300 hover:scale-105 hover:animate__animated hover:animate__pulse" data-aos="fade-up" data-aos-delay="100">
            <h3 class="text-xl font-semibold mb-3 text-sky-400">Atropellos infantiles</h3>
            <p>En España <strong>el 16% de los atropellos al año son a menores de 14 años</strong>, eso son <strong>1540 niños al año.</strong></p>
          </div>
          
          <div class="bg-slate-700 rounded-lg p-6 shadow-md transform transition-all duration-300 hover:scale-105 hover:animate__animated hover:animate__pulse" data-aos="fade-up" data-aos-delay="200">
            <h3 class="text-xl font-semibold mb-3 text-green-400">Accidentes en la calle</h3>
            <p>Un estudio realizado en Andalucía indica que <strong>el 34,6% de los accidentes infantiles ocurren en la calle por ir desatendidos o solos.</strong></p>
          </div>
          
          <div class="bg-slate-700 rounded-lg p-6 shadow-md transform transition-all duration-300 hover:scale-105 hover:animate__animated hover:animate__pulse" data-aos="fade-up" data-aos-delay="300">
            <h3 class="text-xl font-semibold mb-3 text-red-400">Secuestros de menores</h3>
            <p>Los <strong>secuestros de menores</strong> con fines criminales en España <strong>aumentaron un 125% de 2023 a 2024</strong>, pasando de 8 a 18.</p>
          </div>
        </div>
        
        <div class="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <h4 class="text-2xl font-bold mb-6 animate__animated animate__pulse animate__infinite animate__slower">¿Y si fuera tu hijo?</h4>
        </div>
      </div>
    </div>
    
    <!-- "Que ofrecemos?" section -->
    <div class="bg-gray-200 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800" data-aos="zoom-in">¿Qué ofrecemos?</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg p-6 shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:animate__animated hover:animate__bounceIn" data-aos="fade-right" data-aos-delay="100">
            <div class="text-primary text-4xl mb-4" data-aos="bounce-in" data-aos-delay="200">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-gray-700 hover:animate__animated hover:animate__rubberBand">Seguimiento en Tiempo Real</h3>
            <p class="text-gray-600">Monitorea la ubicación exacta de tus hijos <strong>en tiempo real</strong>.</p>
          </div>
          
          <div class="bg-white rounded-lg p-6 shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:animate__animated hover:animate__bounceIn" data-aos="fade-up" data-aos-delay="200">
            <div class="text-primary text-4xl mb-4" data-aos="bounce-in" data-aos-delay="300">
              <i class="fas fa-mobile-alt"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-gray-700 hover:animate__animated hover:animate__rubberBand">App Móvil Sencilla</h3>
            <p class="text-gray-600">Aplicación móvil fácil de usar para tus hijos con solo 2 opciones: <strong>Añadir ID</strong> y <strong>enviar ubicación</strong>.</p>
          </div>
          
          <div class="bg-white rounded-lg p-6 shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:animate__animated hover:animate__bounceIn" data-aos="fade-left" data-aos-delay="300">
            <div class="text-primary text-4xl mb-4" data-aos="bounce-in" data-aos-delay="400">
              <i class="fas fa-lock"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-gray-700 hover:animate__animated hover:animate__rubberBand">Privacidad y Seguridad</h3>
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
@import url('@/styles/home.css');
</style>