import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store, // inject store into all components so they can have direct access to it
  render: h => h(App)
}).$mount('#app')
