<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding -->
        <div class="text-xl text-gray-200 font-bold">
            
          Searchers.Market
          
        </div>

        <!-- Desktop navigation -->
        <nav class="flex grow">

          <!-- Desktop sign in links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <li class="ml-3">

              <router-link class="btn-sm text-gray-200 bg-gradient-to-t from-green-2 hover:to-purple-500 w-full shadow-lg font-bold group" to="#0">
                Go to app  <span class="tracking-normal text-purple-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"></span>
              </router-link>
            </li>
          </ul>

        </nav>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>