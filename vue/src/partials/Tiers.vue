<template>
  <section class="relative">

    <!-- Illustration -->
    <div class="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
      <img src="../images/pricing-illustration.svg" class="max-w-none" width="618" height="468" alt="Join Searchers">
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-800">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 font-sora mb-4">
            The network of bots-as-a-service defining the future of finance</h2>
          <div class="max-w-2xl mx-auto">
            <p class="text-xl text-gray-400 font-bold">
            Whether you are an experienced searcher operator or just starting the MEV game, joining Cyph3rs will take you to the next level</p>
          </div>

          
        </div>


        <!-- tables -->
        <div class="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none pt-4">

          <!-- ROOKIE -->
          <!-- ----------------- -->
          <!-- ----------------- -->
          <div class="relative flex flex-col h-full p-6 bg-gray-800 rounded py-10 px-8" data-aos="zoom-out" data-aos-delay="100">
            <div class="absolute top-0 left-0 mr-6 -mt-4">
              <div class="inline-flex items-center text-sm font-semibold py-1 px-3 text-emerald-600 bg-emerald-200 rounded-full">
                <svg class="fill-emerald-500 mr-2" width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.315.068a.5.5 0 0 0-.745.347A7.31 7.31 0 0 1 3.182 3.6a7.924 7.924 0 0 1-.8.83A6.081 6.081 0 0 0 0 9.035a5.642 5.642 0 0 0 2.865 4.9.5.5 0 0 0 .746-.4 2.267 2.267 0 0 1 .912-1.67 4.067 4.067 0 0 0 1.316-1.4 4.662 4.662 0 0 1 1.819 3.1.5.5 0 0 0 .742.371c1.767-.999 2.86-2.87 2.865-4.9-.001-3.589-2.058-6.688-5.95-8.968Z" />
                </svg>
                <span>Zero to Hero</span>
              </div>
            </div>

            <div class="mb-6">
              <div class="text-lg font-bold mb-1">Rookies and Builders</div>
              <div class="text-gray-400 mb-6 font-bold">
                For anyone who wants to become a successful searcher operator.
              </div>

              <router-link class="btn-sm text-white font-bold bg-gradient-to-t from-green-1 hover:to-pink-500 w-full shadow-lg group" to="/rookies">
               Join as a Rookie
                <span class="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
               </router-link>
            </div>

            <ul class="text-gray-400 space-y-3 grow">
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Understand MEV extraction, the actors, and the current landscape</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Boostrap your bot from dozens of templates</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Learn how to design profitable strategies on your favorite chain</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Connect with projects and other searchers</span>
              </li>


            </ul>
          </div>


          <!-- SEARCHER -->
          <!-- ----------------- -->
          <!-- ----------------- -->

          <div class="relative flex flex-col h-full p-6 bg-gray-800 rounded py-10 px-8 " data-aos="zoom-out" data-aos-delay="100">
            <div class="mb-6">
              
              <div class="text-lg font-bold mb-1">
              Searcher Operators</div>
              
              <div class="text-gray-400 mb-6 font-bold">
                For experienced searchers looking for great opportunities.
              </div>

              <router-link class="btn-sm text-white font-bold bg-gradient-to-t from-green-1 hover:to-blue-500 w-full shadow-lg group" to="/searchers">
               Join as a Searcher
                <span class="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
               </router-link>

            </div>

            <ul class="text-gray-400 space-y-3 grow">
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Access to strategies research and 
                analysis of retired bots</span>
              </li>
              
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Browse bounties and get matched to projects</span>
              </li>
            <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Connect with other searchers and earn coins from sharing your XP</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Build your reputation and become a web3 legend</span>
              
              </li>

            </ul>
          </div>



          <!-- PROJECTS -->
          <!-- ----------------- -->
          <!-- ----------------- -->
          <div class="relative flex flex-col h-full p-6 bg-gray-800 rounded py-10 px-8" data-aos="zoom-out" data-aos-delay="100">

            <div class="mb-6">
              <div class="text-lg font-bold mb-1">Projects and Protocols</div>
              <div class="text-gray-400 mb-6 font-bold">
                For DeFi projects that are affected by MEV extraction.
              </div>

              <router-link class="btn-sm text-white font-bold bg-gradient-to-t from-green-1 hover:to-purple-500 w-full shadow-lg group" to="/projects">
               Join as a Project
                <span class="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
               </router-link>

            </div>
            <ul class="text-gray-400 space-y-3 grow">

              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Safely connect with a network of searchers and builders</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Hire experienced operators and recruit customized searchers</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Run competitions, post grants, and build community</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Stay updated with the latest news in the MEV space</span>
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
