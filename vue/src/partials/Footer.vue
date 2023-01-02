<template>
  <footer>
      <div class="py- md:py-10 border-t border-gray-800">
          <div class="max-w-4xl mx-auto sm:px-20">


          <div class="grid sm:grid-cols-3 gap-20 md:py-8">

            <div class="lg:col-span-1">
              <h6 class="text-s font-bold mb-2">
              <router-link class="text-gray-600 hover:text-green-400 transition duration-150 ease-in-out font-bold" to="/privacy">
              Privacy Policy
              </router-link></h6>

            </div>


            <div class="lg:col-span-1">
              <h6 class="text-s font-bold mb-2">
              <router-link class="text-gray-600 hover:text-green-400 transition duration-150 ease-in-out font-bold" to="/terms">
              Terms of Service
              </router-link></h6>
            </div>

            <div class="lg:col-span-1">
              <h5 class="text-xs text-gray-00 font-bold mb-2">
                
                CYPH3RS INTELLIGENCE © 2023
    
              </h5>
            </div>

           <br>

          </div>

        </div>
        </div>
      </footer>

</template>

<script>
    export default {
      name: 'Footer',
    }
</script>