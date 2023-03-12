import { Indicator } from 'mint-ui'
import axios from 'axios'
export default {
  common: {
    method: 'GET',
    data: {},
    params: {}
  },
  $axios (options = {}) {
    options.method = options.method || this.common.method
    options.data = options.data || this.common.data
    options.params = options.params || this.common.params
    // 请求前显示加载
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
