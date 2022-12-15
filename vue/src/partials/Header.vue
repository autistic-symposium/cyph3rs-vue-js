<template>

  <vd-board :connectors="connectors" dark />
  
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

            <!-- CONNECT WALLET -->
            <p v-if="wallet.error" class="text-sm text-red-500">{{ wallet.error }}</p>


            <li class="ml-3">
              <div v-if="isActivated" class="flex items-center">
                <button @click="disconnect" class="btn-sm text-gray-200 bg-gradient-to-t from-green-2 hover:to-purple-500 w-full shadow-lg font-bold group" >
                    Disconect from {{ dnsAlias || shortenAddress(address) }}
                </button>
                <Dropdown
                  class="mt-22 ml-10"
                  :options="supportedChainId"
                  v-model:selected="selectedChainId"
                  :filter-fn="displayChainName">
                </Dropdown>
              </div>
    
              <div v-else @click="open" class="flex items-center">
                <button @click="connect" class="btn-sm text-gray-200 bg-gradient-to-t from-green-2 hover:to-purple-500 w-full shadow-lg font-bold group">
                  Connect Wallet
                </button>
              </div>

            </li>
          
          <!-- END CONNECT WALLET -->
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

    import Dropdown from '../components/Dropdown.vue'

    import { MetaMaskConnector, 
            WalletConnectConnector, 
            CoinbaseWalletConnector,
            useBoard, 
            useEthers, 
            shortenAddress, 
            useWallet,
            displayChainName,
            useEthersHooks,
            SafeConnector,
            Connector
            } from 'vue-dapp'
    import { onMounted, ref, watch } from 'vue'


    //////////////////////
    // CONSTANTS
    //////////////////////

    const { open } = useBoard()
    const { wallet, disconnect, onDisconnect, onAccountsChanged, onChainChanged } = useWallet()
    const { address, balance, chainId, isActivated, dnsAlias } = useEthers()
    const { onActivated, onChanged } = useEthersHooks()

    //////////////////////
    // CONNECT WALLET
    //////////////////////

    const infuraId = import.meta.env.VITE_INFURA

    onDisconnect(() => {
      console.log('disconnect')
    })
    onAccountsChanged(() => {
      console.log('accounts changed')
    })
    onChainChanged((chainId: any) => {
      console.log('chain changed', chainId)
    })

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
        appName: 'Searchers Market',
        jsonRpcUrl: `https://mainnet.infura.io/v3/${infuraId}`,
      }),
    ];

    const connectorsCreated = ref(false)

    onMounted(async () => {
      const safe = new SafeConnector()
      if (await safe.isSafeApp()) {
        connectors = [safe]
      }
      connectorsCreated.value = true
      })
    
    const { availableNetworks } = useEthers()
    const supportedChainId = Object.keys(availableNetworks.value).map((key) => Number(key), )

    const selectedChainId = ref(0)
    onActivated(() => {
      selectedChainId.value = chainId.value as number
    })
    const isChainChanged = ref(false)
    onChanged(() => {
      selectedChainId.value = chainId.value as number
      isChainChanged.value = true
    })
    // For turning back to previous chainId without calling switchChain() again
    const switchError = ref(false)
    watch(selectedChainId, async (val, oldVal) => {
      if (oldVal === 0) return // ignore initial change
      if (switchError.value) {
        switchError.value = false
        return
      }
      // if (isChainChanged.value) {
      //   isChainChanged.value = false
      //   return
      // }
      try {
        if (wallet.connector) {
          await wallet.connector.switchChain!(val)
        }
      } catch (e: any) {
        switchError.value = true
        selectedChainId.value = oldVal
        console.error(e)
      }
    })

  //////////////////////
  // NAVIGATION REFERENCE
  //////////////////////
  const navigation: { name: string; href: string }[] = [
    {
      name: 'Header'
    },
  ]

</script>