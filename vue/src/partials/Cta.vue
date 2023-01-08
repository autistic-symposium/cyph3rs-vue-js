<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- CTA box -->
      <div class="relative bg-gradient-to-tr from-green-2 rounded py-10 px-8 md:py-16 md:px-12 overflow-hidden"
        data-aos="zoom-out">

        <!-- Bg illustration -->
        <div class="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 mt-8 -z-10" aria-hidden="true">
          <svg width="582" height="662" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter x="-37.5%" y="-37.5%" width="175%" height="175%" filterUnits="objectBoundingBox" id="b">
                <feGaussianBlur stdDeviation="50" in="SourceGraphic" />
              </filter>
              <filter x="-37.5%" y="-37.5%" width="175%" height="175%" filterUnits="objectBoundingBox" id="c">
                <feGaussianBlur stdDeviation="50" in="SourceGraphic" />
              </filter>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
                <stop stop-color="#D8E4FF" stop-opacity="0" offset="0%" />
                <stop stop-color="#31E981" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <circle fill-opacity="1" fill="url(#a)" filter="url(#b)" cx="314" cy="278" r="200" />
              <circle fill-opacity=".2" fill="#D8E4FF" filter="url(#c)" cx="518" cy="345" r="200" />
            </g>
          </svg>
        </div>

        <div class="flex flex-col lg:flex-row justify-between items-center">

          <!-- CTA content -->
          <div class="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
            <h3 class="text-4xl font-bold font-sora mb-2 text-gray-200">
              Build and deploy your own MEV bot
            </h3>

            <p class="text-gray-900 font-bold">
              Learn from our classes, bot templates, and state-of-art research.
              Design innovative strategies and conquer the chains while building your reputation.</p>
          </div>

          <!-- CTA button -->
          <div class="shrink-0">

           <!-- <router-link
              class="btn text-gray-200 bg-gradient-to-t from-green-1 hover:to-purple-800 w-full group shadow-lg font-bold"
              to="/rookies">
              Become a web3 legend <span
                class="tracking-normal text-purple-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </router-link>
            -->

              <a href="https://academy.cyph3rs.xyz/"
                class="btn text-gray-200 bg-gradient-to-t from-green-1 hover:to-purple-800 w-full group shadow-lg font-bold"
                to="/searchers">
                Become a web3 legend
                <span
                  class="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
             </a>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Cta',
}
</script>