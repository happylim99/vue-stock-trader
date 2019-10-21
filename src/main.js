import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios'
//import 'bootstrap' //this is for javascript
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.filter('currency', (value) => {
	return '$' + value.toLocaleString()
})

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://vuejs-stock-trader-8fdc8.firebaseio.com/'
axios.defaults.headers.get['Accepts'] = 'application/json'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
