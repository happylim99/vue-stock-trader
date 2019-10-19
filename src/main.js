import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
//import 'bootstrap' //this is for javascript
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.filter('currency', (value) => {
	return '$' + value.toLocaleString()
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
