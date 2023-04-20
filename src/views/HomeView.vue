<script setup>
  


</script>

<template>
  
  <main class="bg-[#1A1A1A]" >
    <div class="w-full flex justify-end">
          <div class="flex flex-wrap justify-end">
            <div class="w-full h-auto lg:w-2/5 px-4 mb-4 lg:mb-0  py-4">
              <!-- Content for the left column goes here -->
              <h1 class="homeTextOne text-sky-900 sm:text-violet-800 md:text-orange-500  lg:text-rose-400  2xl:text-green-600 xl:text-red-600"> Mit navn er </h1>
                <h1 class="homeTextOne pt-1 xs:pt-0">Alberte Torbensen</h1>
                <p class="homeTextTwo pt-4 xs:pt-0 pb-4">Jeg er content Creator</p>
              
                <RouterLink to="/projekt">
                  <button class="w-3/4 glow-button homeButtonProjekt text-center text-[#5F5F5F] border-4 border-[#5F5F5F] rounded-lg p-4 lg:p-6 lg:mt-10 ">
                    Se Projekter
                  </button>
                </RouterLink>
              
            </div>
            <div class="w-full lg:w-1/2 px-4">
              <!-- Content for the right column goes here -->
              <img alt="Vue logo"  src="@/assets/billeder/alberte-billede-home.jpg" class="w-full basis-1/2 h-full object-cover " />
              
            </div>
          </div>
        </div>
        
    <div class="bg-[#1A1A1A]">
      
      

        <hr class="border-2">
        <!--section1 photo-->
        <div class="h-32 bg-[#1A1A1A]">

        </div>
        <div class="w-full flex justify-end">
      

          <div class="flex flex-wrap w-5/6 justify-end">
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
              <RouterLink to="/omMig">
                <button class="w-1/2 glow-button homeButtonProjekt  text-center text-[#5F5F5F] border-[#5F5F5F] border-4 rounded-lg p-2 xs:p-4 lg:p-6 lg:mt-10  ">
                  Om Mig
                </button>
             </RouterLink>
            </div>
            <div class="w-full lg:w-1/2 px-4">
              <!-- Content for the right column goes here -->
              <div class="childTwo   pl-2 py-2 pt-4 h-fit rounded-lg">
                <a href="#" class="">
                  <img src="@/assets/billeder/workex.png" alt="" class="w-full object-container rounded-lg glow-photo-button">
                </a>
              </div>
                
            </div>
          </div>
        </div>
        
      <!--section 2 big photo-->

      <div class="w-full flex justify-end ">
          <div class="flex flex-wrap justify-end ">
            <div class="w-full h-auto lg:w-2/5 px-4 mb-4 lg:mb-0  py-4" >
              <!-- Content for the left column goes here -->
              <div class="border-4 rounded-lg py-24 h-full">
                <h1 class="text-5xl  text-center">
                  Fremhævede Projekter
              </h1>
              <p class="text pb-8">
               Som multimediedesigner og content creator bringer 
               jeg et nyt perspektiv til hvert projekt.
               Med færdigheder inden for UX/UI, content creation, 
               web development og en dedikation til at holde sig op to-date med de nyeste trends.
              </p>
               
             </div>
            </div>
            <div class="w-full lg:w-1/2 px-4">
              <!-- Content for the right column goes here -->
              <div class="childTwo   pl-2 py-2 pt-4 h-fit rounded-lg">
                <a href="#" class="">
                  <img src="@/assets/billeder/workex.png" alt="" class="w-full object-container rounded-lg glow-photo-button">
                </a>
              </div>
                
            </div>
          </div>
        </div>

       

      

      <!--section3 photo-->
      <div class="w-full flex justify-end">
          <div class="flex flex-wrap w-5/6 justify-end">
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
              <RouterLink to="/projekt">
                <button class="w-1/2 glow-button homeButtonProjekt  text-center text-[#5F5F5F] border-[#5F5F5F] border-4 rounded-lg p-2 xs:p-4 lg:p-6 lg:mt-10  ">
                  Se Alle Projekter
                </button>
             </RouterLink>
            </div>
            <div class="w-full lg:w-1/2 px-4">
              <!-- Content for the right column goes here -->
              <div class="childTwo   pl-2 py-2 pt-4 h-fit rounded-lg">
                <a href="#" class="">
                  <img src="@/assets/billeder/workex.png" alt="" class="w-full object-container rounded-lg glow-photo-button">
                </a>
              </div>
                
            </div>
          </div>
        </div>
      
      
      

      

      
        


      
    </div>
    

    
           
     
 </main>
 
</template>

<style> 
.glowbutton{
 
  transition: all 0.2s ease-in-out;
}
.glow-button:hover {
  color: rgba(255, 255, 255, 1);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease-in-out;
  border-color: aliceblue;
  text-shadow: 5px 5px 15px rgba(255, 255, 255, 0.4);;
}


.glow-photo-button:hover{
  color: rgb(49, 49, 49);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease-in-out;
  border-color: aliceblue;
  text-shadow: 5px 5px 15px rgba(255, 255, 255, 0.4);;

}


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
  font-size: 2.6rem;
  }
}

@media (min-width: 1024px) {
  .homeTextOne{
  font-size: 3.3rem;
  }
}

@media (min-width: 1280px) {
  .homeTextOne{
  font-size: 4rem;
  }
}
</style>

