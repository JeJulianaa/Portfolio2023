<template>
  <div>
     test : {{ $route.params.id  }} + {{ id }}
    <div>
      <!-- v-for on state -->
    <!--   <div class="portfolio-item" v-for="item in portfolioDetails" :key="item"> -->
      <div class="portfolio-item" v-if="portfolioDetails" >
        <p class="category" :class="portfolioDetails.category">
          {{ portfolioDetails.category }}
        </p>
        <h4>{{ portfolioDetails.title }} - id:  {{ portfolioDetails.id }}</h4>
        <p>
          {{ portfolioDetails.description }}
        </p>
        <img :src="portfolioDetails.image" alt="image" width="200" height="200">
        
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
        <p>
          Date: {{ portfolioDetails.date }}
        </p>
        <p >
          Completed: <span :class="portfolioDetails.complete">{{ portfolioDetails.completed }}</span>
        </p>
        <br>
      </div>

      <div v-else>Loading...</div>
      
      <button @click="goBack()">Go Back</button>
      Details test {{ props.id }}
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
    return state.value.find(item => item.id == id.value)
  })

  const goBack = () => {
    router.go(-1)
  } 
</script>

<style lang="scss">

</style>