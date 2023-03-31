import { LOGIN, INIT_USER } from './mutations-types'

export default {
  state: {
    loginStatus: false,
    token: null,
    userInfo: {}
  },
  getters: {},
  mutations: {
    [LOGIN] (state, user) { // 设置
      state.loginStatus = true
      state.token = user.token
      state.userInfo = user
      // 持久化存储 =》 本地存储
      localStorage.setItem('temUserInfo', JSON.stringify(user))
    },
    [INIT_USER] (state) { // 读取
      let userInfo = JSON.parse(localStorage.getItem('temUserInfo'))
      if (userInfo) {
        state.loginStatus = true
        state.token = userInfo.token
        state.userInfo = userInfo
      }
    },
    loginOut (state) {
      state.loginStatus = false
      state.token = null
      state.userInfo = {}
      localStorage.removeItem('temUserInfo')
    }
  },
  actions: {}
}
