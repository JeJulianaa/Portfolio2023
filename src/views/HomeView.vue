<script setup>
  


</script>

<template>
  
  <main class="bg-[#1A1A1A]" >
    
    <div class="w-full flex ">
         
      
          <div class="flex flex-wrap mx-auto   ">
            <img class=" w-1/2 xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 coverbillede object-none relative " src="@/assets/billeder/alberte-baggrund.png" alt="">
            <div class=" w-1/2 pt-10 pb-32 m-0 lg:pb-10 md:p-0 md:pt-0  xl:mt-12 xl:pt-20 px-8 absolute  top-0 coverbillede xs:pb-6 xs:pt-4 sm:m-8 xs:m-4 xs:px-2 rounded-lg">
              
              <!-- Content for the left column goes here -->
              <div class="px-4 pt-10 m-0 p-0  xl:pt-0 sm:p-9  xs:p-0">
                <h1 class="text-[#E15600] sm:text-2xl md:text-2xl   "> Mit navn er </h1>
                  <h1 class=" text-[#10E8FF] sm:text-2xl md:text-3xl lg:text-3xl pt-1 xs:pt-0 ">Alberte Juliana Torbensen</h1>
                  <p class="homeTextTwo pt-4 xs:pt-0 pb-4 lg:pb-2">Multi Medie Designer</p>
                
                  <RouterLink to="/projekt" class="">
                    <button class="text-[#FEF5DB] border-[#FEF5DB] w-3/4 text-3xl xs:w-full xs:p-1 xs:text-xl sm:text-2xl xl:w-1/2  sm:w-full md:w-full md:text-3xl glow-button homeButtonProjekt  text-center  border-4  rounded-lg p-4 lg:p-6 lg:mt-10 ">
                      <h1 class=" ">Se Projekter</h1>
                    </button>
                  </RouterLink>
              </div>
            </div>
            <div class="w-full lg:w-1/2 pl-4 xs:pl-0 lg:pl-4">
              <!-- Content for the right column goes here -->
              <img alt="Vue logo"  src="@/assets/billeder/alberte-billede-home.jpg" class="w-full basis-1/2 h-full object-cover " />
              
            </div>
          </div>
        </div>
        
    <div class="bg-[#1A1A1A]">
      
      

        <hr class="border-2">
        <!--section1 photo-->
        <div class="h-1 bg-[#1A1A1A]">

        </div>
        <div class="w-full flex justify-end">
      

          <div class="w-full sections flex flex-wrap w-5/6 justify-end ">
            <div class="w-full lg:w-[60%] pb-2  lg: py-5" >
              <!-- Content for the left column goes here -->
              <div class="border-4 border-[#2E2E30] rounded-lg text-center pt-[11%] h-full">
                <h1 class="text-7xl  text-center text-[#E15600] xs:text-4xl sm:text-7xl">
                Fremhævede <h1 class="text-7xl px-20 mb-5 lg:mb-0 pb-8 py-5 text-[#10E8FF] xs:text-4xl sm:text-7xl">Projekter</h1>
                </h1>
                <p class="text pb-8">
        
                </p>
                
             </div>
            </div>
            <div class="w-full lg:w-[40%] pt-1">
              <!-- Content for the right column goes here -->
              <div class="w-full h-full childTwo pl-2 py-2 pt-4  rounded-lg  xs:w-full sm:w-full">
                <RouterLink to="/portfoliodetail/1">
                  <a href="#" class="">
                    <img  src="@/assets/billeder/Mockup-pc-dreams.jpg" alt="" class="w-full object-container rounded-lg glow-photo-button h-full object-cover">
                  </a>
                </RouterLink>
              </div>
                
            </div>
          </div>
        </div>
        
      <!--section 2 big photo-->

      <div class="w-full flex justify-end ">
          <div class="boxreverse flex flex-wrap  justify-end pt-1 ">
            <div class="w-full lg:w-1/2 px-[1rem] md:px-14 lg:mb-0  py-4 border-4  rounded-lg border-[#2E2E30]" >
              <!-- Content for the left column goes here -->
              <h1 class="text-5xl text-[#E15600] pt-2">
                Branding med et kreativ twist </h1>

             
              <p class="text-slate-50 pb-2">
               Som multimediedesigner og content creator bringer 
               jeg et nyt perspektiv til hvert projekt.
               Med færdigheder inden for UX/UI, content creation, 
               web development og en dedikation til at holde sig op to-date med de nyeste trends.
              </p>
              <RouterLink to="/omMig">
                <button class="w-1/2 glow-button homeButtonProjekt  text-center   border-4 rounded-lg p-2 xs:pl-4 lg:p-6 lg:mt-10  ">
                  <h1 class="text-3xl">Om Mig</h1>
                </button>
             </RouterLink>
            
            </div>
            <div class="w-full lg:w-1/2 pl-2">
              <!-- Content for the right column goes here -->
              <div class="childTwo h-full  pl-1  h-fit rounded-lg">
                
                <RouterLink to="/portfoliodetail/2">
                  <a href="#" class="">
                    <img src="@/assets/billeder/noodles-promotion.jpg" alt="" class="w-full object-container rounded-lg glow-photo-button h-full object-cover">
                  </a>
                </RouterLink>
              </div>
                
            </div>
          </div>
        </div>

       

      

      <!--section3 photo-->
      <div class="w-full flex  justify-end">
          <div class="flex flex-wrap md:flex-row justify-end  lg: py-3 pb-6 lg:flex-wrap xs:flex-col-reverse sm:flex-col-reverse ">
            
            <div class="w-full border-4 border-[#2E2E30] rounded-lg lg:w-[60%] pr-2 lg:mb-0 py-2 px-[1rem] md:px-14 " >
             
              <!-- Content for the left column goes here -->
              <h1 class="text-5xl pt-4 text-[#FAB100] ">
                Se flere af mine
             </h1>
             <h1 class="text-5xl text-[#E15600]">projekter</h1>
               <p class="text pb-1">
               du kan finde flere af mine projekter inde under "projekter"
                Hvis du har spørgsmål omkring nogen af mine projekter eller om andre ting, så er du velkommen til at kontakte mig. 
                Du kan finde mine kontakt oplysninger under "kontakt"
              </p>
              <RouterLink to="/projekt">
                <button class="w-1/2 glow-button text-3xl   text-center   border-4 rounded-lg p-2 xs:p-4 lg:p-6 lg:mt-10  ">
                  Se Alle Projekter
                </button>
             </RouterLink>
            </div>
            <div class="w-full lg:w-[40%] ">
              <!-- Content for the right column goes here -->
              <div class="w-full h-full childTwo  rounded-lg px-2">
                <RouterLink to="/portfoliodetail/3">
                  <a href="#" class="">
                    <img src="@/assets/billeder/eventoversigt-beyond.jpg" alt="" class="w-full object-container rounded-lg glow-photo-button h-full object-cover">
                  </a>
                </RouterLink>
               
              </div>
             
            </div>
          </div>
        </div>
      
      
      

      

      
        


      
    </div>
    

    
           
     
 </main>
 
</template>

<style> 
.mitNavn{
  color: #FAB100;
}
.AlberteT{
  color:#E62D00;
  animation: flicker 0.5s ease-out both;
}



 



.homeButtomProjekt {
      color: rgb(2, 106, 118);
      border-color: rgb(2, 106, 118);
    }
    button{
      font-family: "neon";
      color: rgb(2, 106, 118);
      border-color: rgb(2, 106, 118);}

.glow-photo-button:hover{
  color: rgb(49, 49, 49);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease-in-out;
  border-color: aliceblue;
  text-shadow: 5px 5px 15px rgba(255, 255, 255, 0.4);;

}


@media (min-width: 350px) {
  
  h1{
    font-family: "neon";}

   button{
      font-family: "neon";
      color: rgb(2, 106, 118);
      border-color: rgb(2, 106, 118);
      
      
    }

    .homeButtomProjekt {
      color: rgb(2, 106, 118);
      border-color: rgb(2, 106, 118);
    }
}


@media (min-width: 640px) {
  .homeTextOne{
  font-size: 2rem;
  }
  .homeButtomProjekt {
    font-size: 2rem;
  }
  h1{
    font-family: "neon";}
}

@media (min-width: 768px) {
  .homeTextOne{
  font-size: 2.6rem;
  }
  h1{
    font-family: "neon";}
}

@media (min-width: 1024px) {
  .homeTextOne{
  font-size: 3.3rem;
  }
  h1{
    font-family: "neon";}
}

@media (min-width: 1280px) {
  .homeTextOne{
  font-size: 3rem;
  }
  h1{
    font-family: "neon";}
  
}

.coverbillede{
  background-color: rgba(9, 9, 9, 0.933);
  
}

</style>

