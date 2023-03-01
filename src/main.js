import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/common.css'// 引入公共css
import '@/assets/css/iconfont.css'

import '@/assets/js/flexible'

import LyTab from 'ly-tab'
Vue.use(LyTab)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
