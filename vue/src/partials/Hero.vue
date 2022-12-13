<template>
  <section class="relative overflow-hidden">

    <!-- Bg gradient -->
    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10" aria-hidden="true"></div>

    <!-- Illustration -->
    <div class="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
      <img src="../images/hero-illustration.svg" class="max-w-none" width="2143" height="737" alt="Hero Illustration">
    </div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Hero content -->
        <div class="max-w-xl mx-auto md:max-w-[640px] md:mx-0 text-center md:text-left">

          <div data-aos="zoom-out">

          </div>
          <h1 class="h1 font-uncut-sans mb-6" data-aos="zoom-out" data-aos-delay="100">The MEV marketplace for <em class="font-italic">searchers</em> and <em class="font-italic">protocols</em></h1>
          <p class="text-xl text-gray-400 mb-10" data-aos="zoom-out" data-aos-delay="200">Let's set the Dark Forest on 🔥</p>
          <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4" data-aos="zoom-out" data-aos-delay="300">
            <div>
              <a class="btn text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group" href="searchers">
                Become a Searcher <span class="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"></span>
              </a>
            </div>
            <div>
              <a class="btn text-gray-300 bg-gradient-to-t from-purple-800 to-purple-700 hover:to-gray-800 w-full shadow-lg" href="projectsg">Hire a Searcher</a>
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