import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { VueDapp } from 'vue-dapp'
import { ethers } from 'ethers'

import 'aos/dist/aos.css';
import './css/style.css'

const app = createApp(App)

app.use(router)
app.use(VueDapp, {autoConnect: false})
app.mount('#app')
