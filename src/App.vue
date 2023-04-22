<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template class="">
  <header class="">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="100" height="100" />

    <div class="wrapper ">

      <nav>
        <RouterLink to="/">Hjem</RouterLink>
        <RouterLink to="/projekt">Projekter</RouterLink>
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

  <!--space between section and contact-->
  <div class="h-1 bg-[#1A1A1A]">

  </div>
  <hr class="border-2">
  <!--section contact-->
  <div class="container mx-auto px-4 pt-4 bg-[#212121]">
          <div class="flex flex-wrap -mx-4 ">
            <div class="w-full lg:w-1/2 px-4 mb-4 lg:mb-0 py-2" >
              <!-- Content for the left column goes here -->
              <h1 class="text-5xl pt-20">
                Multi medie designer
             </h1>
               <p class="text pb-8">
               Som multimediedesigner og content creator bringer 
               jeg et nyt perspektiv til hvert projekt.
               Med færdigheder inden for UX/UI, content creation, 
               web development og en dedikation til at holde sig op to-date med de nyeste trends.
              </p>
              <button class="w-1/2 glow-button homeButtonProjekt  text-center text-[#5F5F5F] border-[#5F5F5F] border-4 rounded-lg p-2 xs:p-4 lg:p-6 lg:mt-10  ">
                 Om Mig
              </button>
            </div>
            <div class="w-full lg:w-1/2 px-4">
              <!-- Content for the right column goes here -->
              <div class="childTwo   pl-2 py-2 pt-4 pb-9 h-fit rounded-lg">
                <a href="#" class="">
                  <img src="@/assets/billeder/alberte-billede-home.jpg" alt="" class="w-full object-container rounded-lg glow-photo-button">
                </a>
              </div>
                
            </div>
          </div>
        </div>

  <footer class="bg-[#2F2F31] text-white">
    <hr class="border-2">
  
    <div class="container mx-auto px-4 py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
      <div>
        <h4 class="text-lg font-bold">Contact Us</h4>
        <ul class="mt-4">
          <li>
            <span class="text-gray-400">Phone:</span> 21 16 38 58
          </li>
          <li>
            <span class="text-gray-400">Email:</span> Alberte.torbensen@gmail.com
          </li>
          <li>
            <span class="text-gray-400">Address:</span> Esbjerg 6700
          </li>
        </ul>
      </div>
      <div>
        <h4 class="text-lg font-bold">Links</h4>
        <ul class="mt-4">
          <li>
            <RouterLink to="/">Hjem</RouterLink>
          </li>
          <li>
            <RouterLink to="/projekt">Projekter</RouterLink>
          </li>
          
        </ul>
      </div>
      <div>
        <h4 class="text-lg font-bold">Links</h4>
        <ul class="mt-4">
          <li>
            <RouterLink to="/omMig">Om Mig</RouterLink>
          </li>
          <li>
            <RouterLink to="/kontakt">Kontakt</RouterLink>
          </li>
        </ul>
      </div>
      <div class="flex items-center justify-center md:col-start-4">
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
  background-color: #2F2F31;
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
