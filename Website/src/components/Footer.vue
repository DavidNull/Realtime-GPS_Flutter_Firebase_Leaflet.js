<template>
  <footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
          <p>© {{ currentYear }} Where is my kid? | Desarrollado por David Cela Pedraza</p>
        </div>
        <div class="flex space-x-6">
          <a href="https://github.com/DavidNull" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-primary transition-colors duration-200">
            <i class="fab fa-github fa-2x"></i>
            <span class="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/david-cela-pedraza/" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-primary transition-colors duration-200">
            <i class="fab fa-linkedin fa-2x"></i>
            <span class="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Footer',
  setup() {
    const currentYear = ref(new Date().getFullYear())
    
    return {
      currentYear
    }
  }
}
</script> 