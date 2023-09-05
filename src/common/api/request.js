import { Indicator } from 'mint-ui'
import axios from 'axios'
import store from '@/store/index'
import router from '@/router'
export default {
  common: {
    method: 'GET',
    data: {},
    params: {},
    headers: {}
  },
  $axios (options = {}) {
    options.method = options.method || this.common.method
    options.data = options.data || this.common.data
    options.params = options.params || this.common.params
    options.headers = options.headers || this.common.headers
    // 请求前显示加载
    if (options.headers.token) { // 如果当前
      options.headers.token = store.state.user.token
      // console.log(options.headers.token)
      if (!options.headers.token) {
        router.push('/login')
      }
    }
    Indicator.open()
    return axios(options).then(v => {
      let data = v.data
      return new Promise((resolve, reject) => {
        if (!v) return reject(new Error())
        setTimeout(() => {
          Indicator.close()
        }, 200)
        resolve(data)
      })
    })
  }
}
// 在企业项目中一定会对axios进行二次封装
