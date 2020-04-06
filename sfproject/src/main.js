import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import './assets/border.css'
import './assets/reset.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
