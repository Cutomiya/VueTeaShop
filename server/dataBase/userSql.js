// 封装了函数，查询用户相关内容
const User = {
  queryUserTel (option) {
    return 'select * from user where tel =' + option.userTel + ''
  },
  queryUserPwd (option) {
    return 'select * from user where (tel = ' + option.userTel + ') and pwd = ' + option.userPwd + ''
  },
  insertData (option) {
    let userTel = option.userTel
    let userPwd = option.userPwd || '666666'
    // 引入包
    let jwt = require('jsonwebtoken')
    // 用户信息
    let payload = { tel: userTel }
    // 口令
    let secret = 'command'
    // 生成token
    let token = jwt.sign(payload, secret)
    return 'insert into user (tel,pwd,imgUrl,nickName,token) values ("' + userTel + '","' + userPwd + '","头像.png","nienie","' + token + '")'
  }
}

exports = module.exports = User
