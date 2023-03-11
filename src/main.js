import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './assets/css/common.css'// 引入公共css
import '@/assets/css/iconfont.css'

import '@/assets/js/flexible'

import LyTab from 'ly-tab'
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'

Vue.use(LyTab)
BScroll.use(ObserveDOM)
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
