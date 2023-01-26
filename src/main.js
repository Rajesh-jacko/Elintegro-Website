import Vue from 'vue'
import App from './App.vue'
import './assets/css/main.css'
import vuetify from './plugins/vuetify'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
Vue.config.productionTip = false
// AOS.init({
//   duration: 1400,
//   once:false
// }),
new Vue({
  vuetify,

  render: h => h(App)
}).$mount('#app')
