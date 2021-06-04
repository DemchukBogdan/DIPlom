import Vue from 'vue'
import App from './App.vue'
import zircle from 'zircle'
import 'zircle/dist/zircle.css'
import axios from 'axios'

Vue.use(axios)
Vue.use(zircle)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
