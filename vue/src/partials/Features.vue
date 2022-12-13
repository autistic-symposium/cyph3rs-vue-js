<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="text-center pb-12 md:pb-20">
          <h2 class="h2 font-uncut-sans" data-aos="zoom-out">Focus on solving bigger problems</h2>
        </div>

        <div class="pb-16" data-aos="zoom-out">
          <img src="../images/features.svg" width="1104" height="512" alt="Features">
        </div>

        <!-- Items -->
        <div class="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">

          <!-- 1st item -->
          <div class="flex flex-col items-center" data-aos="zoom-out">
            <div class="mb-4">
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="89.85%" id="icon1-b">
                    <stop stop-color="#3B82F6" stop-opacity=".64" offset="0%" />
                    <stop stop-color="#F472B6" stop-opacity=".876" offset="100%" />
                  </radialGradient>
                  <circle id="icon1-a" cx="28" cy="28" r="28" />
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <use fill="url(#icon1-b)" xlink:href="#icon1-a" />
                  <g stroke="#FDF2F8" stroke-linecap="square" stroke-width="2">
                    <path d="M17 28h22" opacity=".64" />
                    <path d="M20 23v-3h3M33 20h3v3M36 33v3h-3M23 36h-3v-3" />
                  </g>
                </g>
              </svg>
            </div>
            <h4 class="h4 text-gray-200 text-center mb-2">Ready for the future</h4>
            <p class="text-lg text-gray-400 text-center">A flexible foundation that evolves with complex ecosystem.</p>
          </div>

          <!-- 2nd item -->
          <div class="flex flex-col items-center" data-aos="zoom-out" data-aos-delay="200">
            <div class="mb-4">
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="89.85%" id="icon2-b">
                    <stop stop-color="#3B82F6" stop-opacity=".64" offset="0%" />
                    <stop stop-color="#F472B6" stop-opacity=".876" offset="100%" />
                  </radialGradient>
                  <circle id="icon2-a" cx="28" cy="28" r="28" />
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <use fill="url(#icon2-b)" xlink:href="#icon2-a" />
                  <g stroke="#FDF2F8" stroke-linecap="square" stroke-width="2">
                    <path d="m22 24-4 4 4 4M34 24l4 4-4 4" />
                    <path d="m26 36 4-16" opacity=".64" />
                  </g>
                </g>
              </svg>
            </div>
            <h4 class="h4 text-gray-200 text-center mb-2">Ready for the future</h4>
            <p class="text-lg text-gray-400 text-center">A flexible foundation that evolves with complex ecosystem.</p>
          </div>

          <!-- 3rd item -->
          <div class="flex flex-col items-center" data-aos="zoom-out" data-aos-delay="400">
            <div class="mb-4">
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="89.85%" id="icon3-b">
                    <stop stop-color="#3B82F6" stop-opacity=".64" offset="0%" />
                    <stop stop-color="#F472B6" stop-opacity=".876" offset="100%" />
                  </radialGradient>
                  <circle id="icon3-a" cx="28" cy="28" r="28" />
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <use fill="url(#icon3-b)" xlink:href="#icon3-a" />
                  <g stroke="#FDF2F8" stroke-linecap="square" stroke-width="2">
                    <path d="m18 31 4 4 12-15" />
                    <path d="M39 25h-3M39 30h-7M39 35H28" opacity=".64" />
                  </g>
                </g>
              </svg>
            </div>
            <h4 class="h4 text-gray-200 text-center mb-2">Ready for the future</h4>
            <p class="text-lg text-gray-400 text-center">A flexible foundation that evolves with complex ecosystem.</p>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Features',
}
</script>