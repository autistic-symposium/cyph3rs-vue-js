<template>
  <section class="relative">

    <!-- Illustration -->
    <div class="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
      <img src="../images/pricing-illustration.svg" class="max-w-none" width="618" height="468" alt="Pricing Illustration">
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-800">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 font-uncut-sans mb-4">Find a plan that's right for you</h2>
          <div class="max-w-2xl mx-auto">
            <p class="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</p>
          </div>
        </div>

        <!-- Pricing tables -->
        <div class="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none pt-4">

          <!-- Pricing table 1 -->
          <div class="relative flex flex-col h-full p-6" data-aos="zoom-out">
            <div class="mb-6">
              <div class="text-lg font-semibold mb-1">Starter</div>
              <div class="font-uncut-sans inline-flex items-baseline mb-2">
                <span class="text-3xl font-medium text-gray-400">$</span>
                <span class="text-4xl font-bold leading-7">49</span>
                <span class="font-medium text-gray-400">/mo</span>
              </div>
              <div class="text-gray-400 mb-6">For teams building apps for many public & private users.</div>
              <a class="btn-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group" href="#0">
                Start Free Trial <span class="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </a>
            </div>
            <div class="font-medium mb-4">Features include:</div>
            <ul class="text-gray-400 space-y-3 grow">
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Unlimited placeholder texts</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Consectetur adipiscing elit</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Excepteur sint occaecat cupidatat</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Officia deserunt mollit anim</span>
              </li>
            </ul>
          </div>

          <!-- Pricing table 2 -->
          <div class="relative flex flex-col h-full p-6 bg-gray-800" data-aos="zoom-out" data-aos-delay="100">
            <div class="absolute top-0 right-0 mr-6 -mt-4">
              <div class="inline-flex items-center text-sm font-semibold py-1 px-3 text-emerald-600 bg-emerald-200 rounded-full">
                <svg class="fill-emerald-500 mr-2" width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.315.068a.5.5 0 0 0-.745.347A7.31 7.31 0 0 1 3.182 3.6a7.924 7.924 0 0 1-.8.83A6.081 6.081 0 0 0 0 9.035a5.642 5.642 0 0 0 2.865 4.9.5.5 0 0 0 .746-.4 2.267 2.267 0 0 1 .912-1.67 4.067 4.067 0 0 0 1.316-1.4 4.662 4.662 0 0 1 1.819 3.1.5.5 0 0 0 .742.371c1.767-.999 2.86-2.87 2.865-4.9-.001-3.589-2.058-6.688-5.95-8.968Z" />
                </svg>
                <span>Most Popular</span>
              </div>
            </div>
            <div class="mb-6">
              <div class="text-lg font-semibold mb-1">Business</div>
              <div class="font-uncut-sans inline-flex items-baseline mb-2">
                <span class="text-3xl font-medium text-gray-400">$</span>
                <span class="text-4xl font-bold leading-7">79</span>
                <span class="font-medium text-gray-400">/mo</span>
              </div>
              <div class="text-gray-400 mb-6">For teams building apps for many public & private users.</div>
              <a class="btn-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group" href="#0">
                Start Free Trial <span class="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </a>
            </div>
            <div class="font-medium mb-4">Everything in Starter, plus:</div>
            <ul class="text-gray-400 space-y-3 grow">
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Consectetur adipiscing elit</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Consectetur adipiscing elit</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Excepteur sint occaecat cupidatat</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Officia deserunt mollit anim</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Excepteur sint occaecat cupidatat</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Officia deserunt mollit anim</span>
              </li>
            </ul>
          </div>

          <!-- Pricing table 3 -->
          <div class="relative flex flex-col h-full p-6" data-aos="zoom-out" data-aos-delay="200">
            <div class="mb-6">
              <div class="text-lg font-semibold mb-1">Enterprise</div>
              <div class="font-uncut-sans inline-flex items-baseline mb-2">
                <span class="text-3xl font-medium text-gray-400">$</span>
                <span class="text-4xl font-bold leading-7">129</span>
                <span class="font-medium text-gray-400">/mo</span>
              </div>
              <div class="text-gray-400 mb-6">For teams building apps for many public & private users.</div>
              <a class="btn-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group" href="#0">
                Start Free Trial <span class="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </a>
            </div>
            <div class="font-medium mb-4">Everything in Business, plus:</div>
            <ul class="text-gray-400 space-y-3 grow">
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Unlimited placeholder texts</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Consectetur adipiscing elit</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Excepteur sint occaecat cupidatat</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Officia deserunt mollit anim</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'Pricing',
}
</script>