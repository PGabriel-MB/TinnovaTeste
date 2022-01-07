import Vue from 'vue'
import Vuex from 'vuex'
import Router from './routes'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
export const bus = new Vue();

Vue.use(Vuex)
Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
