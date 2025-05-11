<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useUserStore } from './stores/userStore'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  setup() {
    const userStore = useUserStore();
    const titles = ["🌍 Where is my kid? 🌍", "🧒🏻 Where is my kid? 🧒🏻", "📍 Where is my kid? 📍"];
    let currentTitleIndex = 0;
    let titleInterval = null;

    const changeTitle = () => {
      document.title = titles[currentTitleIndex];
      currentTitleIndex = (currentTitleIndex + 1) % titles.length;
    };

    onMounted(() => {
      userStore.init();

      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log('App.vue: User is signed in:', user.uid);
          userStore.user = user;
          userStore.fetchUserData(user.uid);
        } else {
          console.log('App.vue: User is signed out');
          userStore.user = null;
          userStore.userData = null;
        }
      });
      
      changeTitle();
      titleInterval = setInterval(changeTitle, 2000);
    });

    onUnmounted(() => {
      if (titleInterval) {
        clearInterval(titleInterval);
      }
    });

    return {
    }
  }
}
</script> 