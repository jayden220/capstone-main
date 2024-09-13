import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
// import Toast from 'vue-toastification';
// import 'vue-toastification/dist/index.css';
// createApp(App).use(Toast).mount('#app');
createApp(App).use(store).use(router).use(VueCookies, {expires:'1h'}).mount('#app')

