<template>
  <div class="projekt">
   <!--  {{ state }} -->
   <div>
    <!-- part 0 -->
    <div :class="{ active: isActive }">tt</div>

    <!-- part 1 -->
      <h1>Portfolio</h1>
      <p>Here is a list of my projects</p>
      
      <br>
    
      <div>
        <p>Future filter on category or a search bar</p>
        <p>Future sort by date or completed</p>
      </div>
   
   </div> 
   <br>

   <div class="portfolio-container">
   <div class="portfolio-item"  v-for="item in state" :key="item">
      <p class="category" :class="item.category">
        {{ item.category }}
      </p>
      <h4>{{ item.title }} - id:  {{ item.id }}</h4>
      <p>
        {{ item.description }}
      </p>
      <img :src="item.image" alt="image" width="200" height="200">
      
      <br>
      LinkedIn:
      <a :href="item.link">
        {{ item.link }}
      </a>
      <br>
      Github:
      <a :href="item.github">
         {{ item.github }}
      </a>
      <p>
        TechStack: {{ item.tech }}
      </p>
      <p>
        Date: {{ item.date }}
      </p>
      <p >
        Completed: <span :class="item.complete">{{ item.completed }}</span>
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
    border: 1px solid #ccc;
   
    max-width: 250px;
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
    border-left: 2px solid #cd5c0b;
  }

  .Video {
    color: #23b062;
    border-left: 2px solid #23b062;
  }

  .Photoshop {
    color: #2f4ccb;
    border-left: 2px solid #2f4ccb;
  }

  .incomplete {
    color: #bc0c0c;
  }

  .complete {
    color: #14b314;
  }


</style>
