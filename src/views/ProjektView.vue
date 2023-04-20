<template>
  
  <div class="projekt">
   <!--  {{ state }} -->
   <div>
    <!-- part 0 -->
  

    <!-- part 1 -->
    <div class="w-full hero-side mx-auto flex justify-center   text-center text-[#5F5F5F] bg-[#1A1A1A]  py-2  ">
        <h1>Projekter</h1>
      </div>
      <p>Here is a list of my projects</p>
      
      <br>
    
      <div>
        <p>Future filter on category or a search bar</p>
        <p>Future sort by date or completed</p>
      </div>
   
   </div> 
   <br>

   <div class="portfolio-container ">
      <div class="portfolio-item"  v-for="item in state" :key="item">
        <p class="category" :class="item.category">
          {{ item.category }}
        </p>
        <h4>{{ item.title }} - id:  {{ item.id }}</h4>
        <p>
          {{ item.description }}
        </p>
        <img :src="item.image" alt="image" width="400" height="400">
        
        <br>
        LinkedIn:
        <a :href="item.link">
          {{ item.link }}
        </a>
        <br>
       
        <p>
          Date: {{ item.date }}
        </p>
        
        <br>

        <!-- part 3 -->
        <RouterLink :to="{ name: 'portfoliodetail', params: { id: item.id }}">UserDetails</RouterLink>
      
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
  
    max-width: 260px;
    max-height: fit-content;
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
