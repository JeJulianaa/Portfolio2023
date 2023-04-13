<template>
  <div>
    <h1>Event Page</h1>
    <img alt="Vue logo" class="logo" src="@/assets/winter-tree.jpeg" width="125" height="125" />
    <div class="box1">test</div>
    <p class="text-2xl ...">The quick brown fox ...</p>
    <p class="text-sky-400/100">The quick brown fox...</p>

    {{ dataStuff }}

    <div v-for="i in myArray" :key="i">
      {{ i }}
    </div>
    {{ myArray }}

    <div>{{ products }}</div>

    <div class="product" v-for="product in products" :key="product">
      <h4> {{ product.name }} </h4>
      <p> {{ product.price }} </p>
    </div>

    <button @click="showHide()" >show/hide</button>
    <div v-show="show">Visible</div>
    <!-- <div v-else>Hidden</div> -->
    <hr>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let show = ref(true);

let showHide = () => {
  show.value = !show.value;
}


let dataStuff = 'Hello World';
let myArray = [1, 2, 3, 4, 5];
let products = [
  { name: 'Apple', price: 1 },
  { name: 'Orange', price: 2 }
];

</script>

<style>
.product{
  background-color: rgb(70, 178, 171);
  margin: 16px;
  padding: 16px;
}
.box1 {
  background-color: red;
}
</style>