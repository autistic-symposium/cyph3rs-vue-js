<template>
	<router-view></router-view>
	<vd-board :connectors="connectors" dark />
</template>

<script setup lang="ts">

    import { MetaMaskConnector, WalletConnectConnector, CoinbaseWalletConnector } from 'vue-dapp';
    import { onMounted } from "vue";
    import AOS from "aos";

    onMounted(() => {
        AOS.init({
          once: true,
          disable: 'phone',
          duration: 500,
          easing: 'ease-out-cubic',
          }
        );
    })

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
        appName: 'Searchers Market',
        jsonRpcUrl: `https://mainnet.infura.io/v3/${infuraId}`,
      }),
    ]
    
</script>


