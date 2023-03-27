// 封装了函数，查询用户相关内容
const User = {
  queryUserTel (option) {
    return 'select * from user where tel =' + option.userTel + ''
  },
  queryUserPwd (option) {
    return 'select * from user where (tel = ' + option.userTel + ') and pwd = ' + option.userPwd + ''
  }
}

exports = module.exports = User
