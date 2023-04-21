<template>
  <div>
   
      <button class="glow-button buttonBack text-center text-[#5F5F5F] border-4 border-[#5F5F5F] m-3 mt-2 p-2 px-4 rounded-lg " @click="goBack()">Gå Tilbage</button>
              {{ props.id }}
      
    
      <!-- v-for on state -->
      <!--   <div class="portfolio-item" v-for="item in portfolioDetails" :key="item"> -->
      <div class="w-full ">
          <div class="flex flex-wrap justify-center ">
            <div class="w-full h-auto lg:w-2/5 px-4 mb-4 lg:mb-0  py-4  ">
              <!-- Content for the left column goes here -->
              <div class="portfolio-item" v-if="portfolioDetails" >
               <p class="category" :class="portfolioDetails.category">
                  {{ portfolioDetails.category }}
                </p>
                
                <h4 class="text-5xl">{{ portfolioDetails.title }} - id:  {{ portfolioDetails.id }}</h4>
                <p class="homeTextTwo pt-4 xs:pt-0 pb-4">Beskrivelse</p>
                <p>
                  {{ portfolioDetails.description }}
                </p>
                
                <br>
                
                LinkedIn:
                <a :href="portfolioDetails.link">
                  {{ portfolioDetails.link }}
                </a>
                <br>
                Github:
                <a :href="portfolioDetails.github">
                  {{ portfolioDetails.github }}
                </a>
                <p>
                  TechStack: {{ portfolioDetails.tech }}
                </p>
                <p  v-if="portfolioDetails.yt">
                  Youtube Video:<a :href="portfolioDetails.yt">
                  {{ portfolioDetails.yt }}
                </a>
                </p>
                <p>
                  Sammen arbejdet med: {{ portfolioDetails.gruppe }}
                </p>
                <p>
                  Date: {{ portfolioDetails.date }}
                </p>
              </div>  
              <div v-else>Loading...</div>
               
              
              
            </div>
            <div class="w-full lg:w-1/2 px-4">
            <!-- Content for the right column goes here -->
            <div :class="imageClass" class="flex flex-wrap overflow-hidden ">
              <img :src="portfolioDetails.image" alt="image" class="rounded-lg object-cover w-3/4 mr-2 mb-2" v-if="portfolioDetails.image">
                <img :src="portfolioDetails.imageTwo" alt="image" class=" rounded-lg object-cover w-full lg:w-40 mb-2" v-if="portfolioDetails.imageTwo" >
                <img :src="portfolioDetails.imageThree" alt="image" class="rounded-lg w-full lg:w-[95%]" v-if="portfolioDetails.imageThree">
            </div>
          </div>
          </div>
          <div class="m-3 mt-2 p-2 px-4">
            
          </div>
          
        </div>
        
      
    </div>
  
</template>


<script setup>

import { toRefs, computed } from 'vue'
import portfoliodb from '../modules/portfoliodb';

//part 4 - router to go back
import { useRouter } from 'vue-router'
const router = useRouter()

  // part 1 - get state from portfoliodb
  const { state  } = portfoliodb()

  // part 2 - get id from route
  const props = defineProps({
    id: String
  })
  const { id } = toRefs(props)

  // part 3 - filter state on id -> must be computed to work with v-for
  const portfolioDetails = computed(() => { 
    return state.value.find(item => item.id == id.value);

  });
  
  const imageClass = computed(() => {
    if (portfolioDetails.value.image && portfolioDetails.value.imageTwo && portfolioDetails.value.imageThree) {
    return 'w-full flex flex-col-2';
  } else if (portfolioDetails.value.image && portfolioDetails.value.imageTwo) {
    return 'w-full flex';
  } else if (portfolioDetails.value.image) {
    return 'w-full';
  } else {
    return '';
  }
});
  


  


  const goBack = () => {
    router.go(-1)
  } 

  
</script>

<style lang="scss">

</style>