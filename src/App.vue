<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="100" height="100" />

    <div class="wrapper ">

      <nav>
        <RouterLink to="/">Hjem</RouterLink>
        <RouterLink to="/projekt">Projekt</RouterLink>
        <RouterLink to="/omMig">Om Mig</RouterLink>
        <RouterLink to="/kontakt">Kontakt</RouterLink>
      </nav>
    </div>
  </header>

  

  <!-- must do this for fade out to work -->
  <RouterView v-slot="{ Component }">
    <transition name="slide-fade">
      <component :is="Component" />
    </transition>
  </RouterView>

<!-- <Transition mode="out-in" name="slide-fade"> -->  <!-- no name, slide-fade, bounce -->
<!--     <RouterView />
  </Transition>   -->

  <footer class="bg-gray-900 text-white">
      <div class="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h4 class="text-lg font-bold">Contact Us</h4>
          <ul class="mt-4">
            <li>
              <span class="text-gray-400">Phone:</span> 555-555-5555
            </li>
            <li>
              <span class="text-gray-400">Email:</span> info@example.com
            </li>
            <li>
              <span class="text-gray-400">Address:</span> 123 Main St, Anytown USA
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-bold">Links</h4>
          <ul class="mt-4">
            <li>
              <a href="/" class="text-gray-400 hover:text-white">Home</a>
            </li>
            <li>
              <a href="/about" class="text-gray-400 hover:text-white mt-2">About</a>
            </li>
            <li>
              <a href="/contact" class="text-gray-400 hover:text-white mt-2">Contact</a>
            </li>
            <li>
              <a href="/projects" class="text-gray-400 hover:text-white mt-2">Projects</a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src="/logo.png" alt="Logo" class="w-12 h-12 mb-4">
          <p class="text-gray-400">&copy; 2023 Your Company Name</p>
        </div>
      </div>
    </footer>
</template>



<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}


.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}


/* v-transition end */


header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: #CFC9C9;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    min-height:100px ; /* Added */
    place-items: center; 
    /* padding-right: calc(var(--section-gap) / 2); */ /* changed */
    width: 100%;
    
  }

  .logo {
    margin: 0 2rem 0 0;
    
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: 100%;  /* changed */

  }

  nav {
    text-align: right;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
