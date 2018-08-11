import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

Vue.component('header-comp', Header)
Vue.component('footer-comp', Footer)

new Vue({
  el: '#app',
  render: h => h(App)
})
