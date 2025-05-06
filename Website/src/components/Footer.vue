<template>
  <footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <p>© {{ currentYear }} Where is my kid? | David Cela Pedraza</p>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-300 hover:text-white">Privacy Policy</a>
          <a href="#" class="text-gray-300 hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref, onMounted } from 'vue'

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