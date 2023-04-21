<template>
  
  <div class="projekt">
   <!--  {{ state }} -->
   <div>
      <!-- part 0 -->
  

      <!-- part 1 -->
      <div class="w-full hero-side mx-auto flex justify-center   text-center text-[#5F5F5F] bg-[#1A1A1A]  py-2  ">
        <h1>Projekter</h1>
      </div>
      <p class="mine-projekter flex ">Her er en liste over nogen af de projekter jeg har lavet</p>
   </div> 
  
   <div class="portfolio-container w-full ">
      <div class="portfolio-item w-full"  v-for="item in state" :key="item">
        <p class="category" :class="item.category">
          {{ item.category }} 
        </p>
        
        <h4>{{ item.title }} - id:  {{ item.id }}</h4>
        
        <div class="overflow-hidden rounded-lg">
          <img :src="item.image" alt="image"  class="w-full h-38 object-cover">
        </div>
     
       
        <p>
          Date: {{ item.date }}
        </p>
        
        <br>

        <!-- part 3 -->
        <button>
          <RouterLink :to="{ name: 'portfoliodetail', params: { id: item.id }}">Se Mere</RouterLink>
       </button>
      </div>
    </div>


  </div>
</template>

<script setup>
// part 0 - showcase class binding with isActive
import { ref } from 'vue'
// part 1 - get state from portfoliodb
import portfoliodb from '../modules/portfoliodb';

const isActive = ref(true)

// part 1 - get state from portfoliodb
const { state  } = portfoliodb()

</script>

<style>
.mine-projekter{
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
  padding: 1rem 1rem 0 1rem;
  margin: 1rem;
}

  .about {
    min-height: 100%;
   }

  .portfolio-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center; 
  }
  .portfolio-item {
    margin: 1rem;
    padding: 1rem;
  
    max-width: 400px;
    max-height: fit-content;

    font-size: 1.5rem;
  }

  .category {
    display: inline-block;
    padding: 0.25rem 0.5rem;
   
    font-size: 12px;
    font-weight: 700;


    text-transform: uppercase;
  }

  .Web {
    color: #cd5c0b;
    border: 2px solid #cd5c0b;
   border-radius: 0.5rem;
  }

  .Video {
    color: #23b062;
    border: 2px solid #23b062;
    border-radius: 0.5rem;
  }

  .Photoshop {
    color: #2f4ccb;
    border: 2px solid #2f4ccb;
    border-radius: 0.5rem;
  }

  .incomplete {
    color: #bc0c0c;
  }

  .complete {
    color: #14b314;
  }


</style>
