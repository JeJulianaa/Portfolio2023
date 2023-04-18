<script setup>
  


</script>

<template>
  
  <main class="w-full bg-zinc-800" >
    <div class=" b-zinc-500 flex">
      
      <div class="w-6/12 pl-2 pt-16 2xl:pt-64 xl:pt-48 pl-24 lg:pt-36 md:pt-28 md:pl-12 sm:pl-12 pt-20 xs:pl-1 pt-5">
        <div class="bg-violet-600">
          <h1 class="homeTextOne text-sky-900 sm:text-violet-800 md:text-orange-500  lg:text-rose-400  2xl:text-green-600 xl:text-red-600"> Mit navn er </h1>
          <h1 class="homeTextOne pt-1 xs:pt-0">Alberte Torbensen</h1>
          <p class="homeTextTwo pt-4 xs:pt-0 pb-4">Jeg er content Creator</p>
         <button class="homeButtomProjekt text-center p-2 xs:p-4 lg:p-6 lg:mt-10 bg-sky-900 ">Se projekter</button>
      </div>
      </div>
      
      
      <div class="w-6/12">
        <img alt="Vue logo" class="w-full object-cover" src="@/assets/billeder/alberte-billede-crop.jpg" />
      </div>
    </div>

    <div class="border-red-600">

    </div>
  </main>
 
</template>

<style>


@media (min-width: 350px) {
  .homeTextOne{
  font-size: 1rem;
  }
  .homeButtomProjekt {
    font-size: 1rem;
  }

}

@media (min-width: 768px) {
  .homeTextOne{
  font-size: 2rem;
  }
}
@media (min-width: 640px) {
  .homeTextOne{
  font-size: 2rem;
  }
  .homeButtomProjekt {
    font-size: 2rem;
  }

}

@media (min-width: 768px) {
  .homeTextOne{
  font-size: 2rem;
  }
}

@media (min-width: 1024px) {
  .homeTextOne{
  font-size: 2rem;
  }
}

@media (min-width: 1280px) {
  .homeTextOne{
  font-size: 4rem;
  }
}
</style>

