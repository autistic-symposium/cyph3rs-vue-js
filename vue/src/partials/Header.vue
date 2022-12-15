<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding -->
        <div class="text-xl text-gray-200 font-bold">
        <router-link to="/">
            Searchers.Market
        </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="flex grow">

          <!-- Desktop sign in links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <li class="ml-3">

            <!-- CONNECT WALLET -->
            <div v-if="isActivated" class="flex items-center">
              <div class="btn-sm text-gray-200 bg-gradient-to-t from-green-2 hover:to-purple-500 w-full shadow-lg font-bold group">
                  {{ shortenAddress(address) }}
              </div>
            </div>

            <button v-else @click="open" class="btn-sm text-gray-200 bg-gradient-to-t from-green-2 hover:to-purple-500 w-full shadow-lg font-bold group">
              Connect Wallet
            </button>

            <!-- END CONNECT WALLET -->

            </li>
          </ul>
        </nav>

      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { useBoard, useEthers, shortenAddress } from 'vue-dapp'
  const { open } = useBoard()
  const { address, balance, isActivated } = useEthers()
  const navigation: { name: string; href: string }[] = [
    {
      name: 'Header'
    },
  ]
</script>