<template>

  <vd-board :connectors="connectors" dark />
  
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding -->
        <div class="text-xl text-gray-200 font-bold">
        <router-link to="/">
          CYPH3RS.xyz
        </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="flex grow">

          <!-- Desktop sign in links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <li class="ml-3">

            <!-- CONNECT WALLET -->

            <div v-if="isActivated" class="flex items-center">
              <button @click="disconnect" class="btn-sm text-gray-200 bg-gradient-to-t from-green-2 hover:to-purple-500 w-full shadow-lg font-bold group" >
                  Connected to {{ dnsAlias || shortenAddress(address) }}
              </button>
            </div>
  
            <div v-else @click="open" class="flex items-center">
              <button @click="connect" class="btn-sm text-gray-200 bg-gradient-to-t from-green-2 hover:to-purple-500 w-full shadow-lg font-bold group">
                Connect Wallet
              </button>
            </div>

            <!-- END CONNECT WALLET -->

            </li>
          </ul>
        </nav>

      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

    //////////////////////
    // IMPORTS
    //////////////////////

    import { MetaMaskConnector, WalletConnectConnector, CoinbaseWalletConnector } from 'vue-dapp';
    import { useBoard, useEthers, shortenAddress, useWallet } from 'vue-dapp'
  

    //////////////////////
    // CONSTANTS
    //////////////////////

    const { wallet, disconnect, onDisconnect, onAccountsChanged, onChainChanged } = useWallet()
    const { open } = useBoard()
    const { address, balance, isActivated, dnsAlias } = useEthers()

    //////////////////////
    // CONNECT WALLET
    //////////////////////

    const infuraId = import.meta.env.VITE_INFURA
    const connectors = [

      new MetaMaskConnector({
        appUrl: 'http://localhost:3000',
      }),

      new WalletConnectConnector({
        qrcode: true,
        rpc: {
          1: `https://mainnet.infura.io/v3/${infuraId}`,
        },
      }),

      new CoinbaseWalletConnector({
        appName: 'CYPH3RS INTELLIGENCE ',
        jsonRpcUrl: `https://mainnet.infura.io/v3/${infuraId}`,
      }),
    ];


  //////////////////////
  // NAVIGATION REFERENCE
  //////////////////////
  const navigation: { name: string; href: string }[] = [
    {
      name: 'Header'
    },
  ]

</script>