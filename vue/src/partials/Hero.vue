<template>
  <section class="relative overflow-hidden">

    <!-- Bg gradient -->
    <div
      class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10"
      aria-hidden="true"></div>


    <!-- Illustration -->
    <div class="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
      <img src="../images/hero-illustration.svg" class="max-w-none" width="2143" height="737" alt="Searchers Lane">
    </div>


    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Hero content -->
        <div class="max-w-xl mx-auto md:max-w-[640px] md:mx-0 text-center md:text-left">

          <div data-aos="zoom-out">

          </div>
          <h1 class="h1 font-sora text-gray-100 mb-6" data-aos="zoom-out" data-aos-delay="100">
            The marketplace for
            <em class="font-italic text-green-1">searchers</em>
            and <em class="font-italic text-green-2">protocols</em>
          </h1>


          <p class="text-xl text-gray-400 mb-10 font-bold" data-aos="zoom-out" data-aos-delay="200">
            Be part of the hottest PvP game of our generation
          </p>


          <div
            class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            data-aos="zoom-out" data-aos-delay="300">
            <div>
              <a href="https://cyph3rs.typeform.com/c/hRH3Z5sd"
                class="btn text-gray-800 bg-gradient-to-t from-green-1 hover:to-pink-600 w-full shadow-lg group font-bold">
                Become a Searcher
              </a>

              <!-- <router-link  class="btn text-gray-800 bg-gradient-to-t from-green-1 hover:to-pink-600 w-full shadow-lg group font-bold" 
                to="/searchers"> 
                 Become a Searcher 
              </router-link> -->
            </div>

            <div>

              <a href="https://cyph3rs.typeform.com/c/hRH3Z5sd"
                class="btn text-gray-800 bg-gradient-to-t from-green-1 hover:to-blue-600 w-full shadow-lg group font-bold">
                Hire a Searcher
              </a>


              <!--
              <router-link class="btn text-gray-800 bg-gradient-to-t from-green-1 hover:to-blue-600 w-full shadow-lg font-bold" to="/projects">
               Hire a Searcher
               </router-link>
               -->

            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>
