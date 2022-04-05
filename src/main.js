import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import LottieVuePlayer from '@lottiefiles/vue-lottie-player'
Vue.use(LottieVuePlayer)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
