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
    return 'insert into user (tel,pwd,imgUrl,nickName,token) values ("' + userTel + '","666666","1.jpg","","")'
  }
}

exports = module.exports = User
