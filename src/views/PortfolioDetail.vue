<template>
  <div>
   
      <button class="glow-button buttonBack text-center text-[#5F5F5F] border-4 border-[#5F5F5F] m-3 mt-2 p-2 px-4 rounded-lg " @click="goBack()">Gå Tilbage</button>
              {{ props.id }}
      
    
      <!-- v-for on state -->
      <!--   <div class="portfolio-item" v-for="item in portfolioDetails" :key="item"> -->
      <div class="w-full ">
          <div class="portfolio-container flex flex-wrap justify-center w-full ">
            <div class="w-full h-auto lg:w-2/5 px-4 mb-4 lg:mb-0  py-4  ">
              <!-- Content for the left column goes here -->
              <div class="portfolio-item" v-if="portfolioDetails" >
               <p class="category " :class="portfolioDetails.category">
                  {{ portfolioDetails.category }}
                </p>
                
                <h4 class="text-4xl pb-4">{{ portfolioDetails.title }} - id:  {{ portfolioDetails.id }}</h4>
                <p class="homeTextTwo pt-4 xs:pt-0 pb-1">Beskrivelse</p>
                <p>
                  {{ portfolioDetails.description }}
                </p>
                
                <br>
                
               
               
                <br>
                <h1>Github:</h1>
                <a :href="portfolioDetails.github">
                  {{ portfolioDetails.github }}
                </a>
               
                <p>
                  <br>
                  <h1>Programmer:</h1> {{ portfolioDetails.tech }}
                </p>
                <br>
                <p  v-if="portfolioDetails.yt">
                  Youtube Video:<a :href="portfolioDetails.yt">
                  {{ portfolioDetails.yt }}
                </a>
                </p>
                <p v-if="portfolioDetails.gruppe">
                  Sammen arbejdet med: {{ portfolioDetails.gruppe }}
                </p>
                <br>
                <p>
                  Dato: {{ portfolioDetails.date }}
                </p>
              </div>  
              <div v-else>Loading...</div>
               
              
              
            </div>
            <div class="w-full lg:w-1/2 px-4">
            <!-- Content for the right column goes here -->
            <div :class="imageClass" class="flex flex-wrap overflow-hidden ">
              <img :src="portfolioDetails.image" alt="image" class="rounded-lg object-fill lg:w-[48%] m-1" v-if="portfolioDetails.image">
                <img :src="portfolioDetails.imageTwo" alt="image" class=" rounded-lg object-fill w-full lg:w-[48%] m-1" v-if="portfolioDetails.imageTwo" >
                <img :src="portfolioDetails.imageThree" alt="image" class="rounded-lg w-full lg:w-[98%]" v-if="portfolioDetails.imageThree">
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

<style >
.portfolio-item{
  width: fit-content;
  color: #E3E3E3;
}
</style>