import { createApp } from 'vue'
import { VueDapp } from 'vue-dapp'
import router from './router'
import App from './App.vue'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import 'aos/dist/aos.css';
import './css/style.css'

const app = createApp(App)

const TOAST_DEFAULT_OPTIONS = {
  position: 'bottom-center',
  autoClose: 3000,
  closeOnClick: true,
  hideProgressBar: false
};

app.use(router)
app.use(Toast, TOAST_DEFAULT_OPTIONS);
app.use(VueDapp, {autoConnect: false})
app.mount('#app')
