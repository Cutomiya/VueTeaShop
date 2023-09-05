const express = require('express')
const app = express()
const cors = require('cors')
const connention = require('../dataBase/sql')
const user = require('../dataBase/userSql')
const jwt = require('jsonwebtoken')
// const QcloudSms = require('qcouldsms_js')

app.use(cors())
let id

// 加入购物车
app.post('/api/addCar', (req, res, next) => {
  let goodsId = req.query.goodsId
  // console.log(req)
  // token
  let token = req.headers.token
  let obj = jwt.decode(token) // 解析token
  // console.log(obj.tel)
  connention.query(`select * from user where tel = ${obj.tel}`, (error, result) => {
    // console.log(result)
    connention.query(`select * from goodslist where id = ${goodsId}`, (err, resp) => {
      // console.log(resp)
      let goodsName = resp[0].name
      let goodsPrice = resp[0].price
      let goodsImgUrl = resp[0].url
      connention.query('insert into goodscart')
      if (err) return false
    })
    if (error) {
      return false
    }
  })
})

// 找回密码
app.post('/api/setPassword', (req, res, next) => {
  let data = {
    userTel: req.query.userTel,
    userPwd: req.query.userPwd
  }
  connention.query(user.queryUserTel(data), (err, re) => {
    if (err) console.log(err)
    let id = re[0].id
    let pwd = re[0].pwd
    connention.query(`update user set pwd = replace(pwd, ${pwd}, ${data.userPwd}) where id = ${id}`, (er, r) => {
      if (er) console.log(er)
      res.send({
        code: 200,
        data: {
          success: true,
          msg: '修改成功'
        }
      })
    })
  })
})

// 查询用户手机号
app.post('/api/selectUser', (req, res, next) => {
  // console.log(req.query)
  let tel = req.query
  connention.query(user.queryUserTel(tel), (err, result) => {
    if (err) console.log(err)
    if (result.length > 0) {
      res.send({
        code: 200,
        data: {
          success: true,
          msg: '用户存在'
        }
      })
    } else {
      res.send({
        code: 200,
        data: {
          success: false,
          msg: '用户不存在'
        }
      })
    }
  })
})

// 用户注册
app.post('/api/register', (req, res, next) => {
  let data = {
    userTel: req.query.userTel,
    userPwd: req.query.userPwd
  }
  connention.query(user.queryUserTel(data), (err, results) => {
    console.log(results)
    if (err) console.log(err)
    if (results.length > 0) { // 用户存在
      res.send({
        code: 200,
        data: {
          success: false,
          msg: '用户已存在',
          data: results[0]
        }
      })
    } else {
      connention.query(user.insertData(data), (e, result) => {
        if (e) console.log(e)
        connention.query(user.queryUserTel(data), (error, resu) => {
          if (error) console.log(error)
          if (resu.length > 0) { // 用户存在
            res.send({
              code: 200,
              data: {
                success: true,
                msg: '注册成功',
                data: resu[0]
              }
            })
          }
        })
      })
    }
  })
})

// 用户登录
app.post('/api/addUser', (req, res, next) => {
  let tel = {
    userTel: req.query.userTel
  }
  // console.log(tel);
  connention.query(user.queryUserTel(tel), (err, results) => {
    if (err) console.log(err)
    if (results.length > 0) { // 用户存在
      res.send({
        code: 200,
        data: {
          success: true,
          msg: '登录成功',
          data: results[0]
        }
      })
    } else {
      connention.query(user.insertData(tel), (e, result) => {
        if (e) console.log(e)
        connention.query(user.queryUserTel(tel), (error, resu) => {
          if (error) console.log(error)
          if (resu.length > 0) { // 用户存在
            res.send({
              code: 200,
              data: {
                success: true,
                msg: '登录成功',
                data: resu[0]
              }
            })
          }
        })
      })
    }
  })
})

// 账户手机验证
app.post('/api/code', (req, res, next) => {
  // let tel = req.query.userTel
  // let QcloudSms = require('qcloudsms_js')
  // // 短信应用SDK AppID
  // let appid = 1400806813 // SDK AppID是1400开头
  // // 短信应用SDK AppKey
  // let appkey = '9ff91d87c2cd7cd0ea762f141975d1df37481d48700d70ac37470aefc60f9bad'
  // // 需要发送短信的手机号码
  // let phoneNumbers = [tel]
  // // 短信模板ID，需要在短信应用中申请
  // let templateId = 7839 // NOTE: 这里的模板ID`7839`只是一个示例，真实的模板ID需要在短信控制台中申请
  // // 签名
  // let smsSign = '腾讯云' // NOTE: 这里的签名只是示例，请使用真实的已申请的签名, 签名参数使用的是`签名内容`，而不是`签名ID`
  // // 实例化QcloudSms
  // let qcloudsms = QcloudSms(appid, appkey)
  // // 设置请求回调处理, 这里只是演示，用户需要自定义相应处理回调
  // function callback(err, res, resData) {
  //   if (err) {
  //     console.log('err: ', err)
  //   } else {
  //     console.log('request data: ', res.req)
  //     console.log('response data: ', resData)
  //   }
  // }
})

// 账户密码验证
app.post('/api/login', (req, res, next) => {
  let params = {
    userTel: req.query.userTel,
    userPwd: req.query.userPwd
  }
  connention.query(user.queryUserTel(params), (err, results) => {
    if (err) return
    if (results.length > 0) {
      connention.query(user.queryUserPwd(params), (err, result) => {
        if (err) return
        if (result.length > 0) {
          res.send({
            code: 200,
            data: {
              success: true,
              msg: '登录成功',
              data: result[0]
            }
          })
        } else {
          res.send({
            code: 302,
            data: {
              success: false,
              msg: '密码不正确'
            }
          })
        }
      })
    } else {
      res.send({
        code: 301,
        data: {
          success: false,
          msg: '手机号不存在'
        }
      })
    }
  })
})

// 商品详情页
app.get('/api/goods/id', (req, res, next) => {
  if (req.query.id) id = req.query.id
  connention.query('select * from goodslist where id=' + id + '', (error, results) => {
    // if (error) { throw error }
    if (error) return
    res.json({
      code: 0,
      data: results
    })
  })
})

// 分类栏的接口
app.get('/api/goods/cartList', (req, res, next) => {
  res.send({
    code: 0,
    data: [
      {
        id: 0,
        name: '默认',
        data: [
          {
            id: 0,
            name: '默认',
            list: [
              {
                id: 0,
                name: '星球1',
                url: '星球.png'
              }, {
                id: 1,
                name: '星球2',
                url: '星球.png'
              }, {
                id: 2,
                name: '星球3',
                url: '星球.png'
              }, {
                id: 3,
                name: '星球4',
                url: '星球.png'
              }, {
                id: 4,
                name: '星球5',
                url: '星球.png'
              }, {
                id: 5,
                name: '星球6',
                url: '星球.png'
              }
            ]
          }
        ]
      }, {
        id: 1,
        name: '第二页',
        data: [
          {
            id: 0,
            name: '第二页',
            list: [
              {
                id: 0,
                name: '星球1',
                url: '星球.png'
              }, {
                id: 1,
                name: '星球2',
                url: '星球.png'
              }, {
                id: 2,
                name: '星球3',
                url: '星球.png'
              }, {
                id: 3,
                name: '星球4',
                url: '星球.png'
              }, {
                id: 4,
                name: '星球5',
                url: '星球.png'
              }
            ]
          }
        ]
      }, {
        id: 2,
        name: '下页',
        data: [
          {
            id: 0,
            name: '下页',
            list: [
              {
                id: 0,
                name: '星球1',
                url: '星球.png'
              }, {
                id: 1,
                name: '星球2',
                url: '星球.png'
              }, {
                id: 2,
                name: '星球3',
                url: '星球.png'
              }, {
                id: 3,
                name: '星球4',
                url: '星球.png'
              }, {
                id: 4,
                name: '星球5',
                url: '星球.png'
              }, {
                id: 5,
                name: '星球6',
                url: '星球.png'
              }, {
                id: 6,
                name: '星球7',
                url: '星球.png'
              }
            ]
          }
        ]
      }, {
        id: 3,
        name: '哈哈',
        data: [
          {
            id: 0,
            name: '哈哈',
            list: [
              {
                id: 0,
                name: '星球1',
                url: '星球.png'
              }, {
                id: 1,
                name: '星球2',
                url: '星球.png'
              }, {
                id: 2,
                name: '星球3',
                url: '星球.png'
              }, {
                id: 3,
                name: '星球4',
                url: '星球.png'
              }
            ]
          }
        ]
      }
    ]
  })
})

// 搜索栏的数据
app.get('/api/goods/shopList', (req, res, next) => {
  // res.send({})
  // eslint-disable-next-line no-unused-vars
  let [searchName, orderName] = Object.keys(req.query)
  let [name, order] = Object.values(req.query)
  // console.log(searchName, orderName, name, order)
  connention.query('select * from goodslist where name like "%' + name + '%" order by ' + orderName + ' ' + order + '', (error, results) => {
    if (error) return console.log(error.message)
    res.send({
      code: 0,
      data: results
    })
  })
})

app.get('/api/index_list/1/data/1', (req, res, next) => {
  res.send({
    data: [
      {
        id: 0,
        type: 'advList',
        data: [
          {
            id: 1,
            url: 'swiper1.png'
          }
        ]
      }, { // 这里是猜你喜欢
        id: 1,
        type: 'likeList',
        data: [
          {
            id: 1,
            name: '冰茶超级好喝der~我超想喝的捏捏',
            url: 'rec1.jpg',
            price: '9'
          }, {
            id: 2,
            name: '绿茶也是可以的啦~我也很想喝的捏',
            url: 'rec2.jpg',
            price: '23'
          }, {
            id: 3,
            name: '红茶我超爱',
            url: 'rec3.jpg',
            price: '64'
          }, {
            id: 4,
            name: '奶盖捏捏nie',
            url: 'rec4.jpg',
            price: '12'
          }
        ]
      }
    ]
  })
})

// 首页的数据
app.get('/api/index_list/0/data/1', (req, res, next) => {
  res.send({
    code: 0,
    data: {
      topBar: [
        { id: 0, label: '推荐' },
        { id: 1, label: '大红袍' },
        { id: 2, label: '绿茶' },
        { id: 3, label: '铁观音' },
        { id: 4, label: '普洱' },
        { id: 5, label: '茶具' },
        { id: 6, label: '花茶' }
      ],
      data: [
        { // 这里是swiper
          id: 0,
          type: 'swiperList',
          data: [
            { id: 0, url: 'swiper1.png' },
            { id: 1, url: 'swiper2.png' },
            { id: 2, url: 'swiper3.png' }
          ]
        }, { // 这里是icon
          id: 1,
          type: 'iconList',
          data: [
            {
              id: 1,
              name: '汉堡',
              url: '01.png'
            },
            {
              id: 2,
              name: '果茶',
              url: '02.png'
            }, {
              id: 3,
              name: '早茶',
              url: '03.png'
            }, {
              id: 4,
              name: '咖啡',
              url: '04.png'
            }, {
              id: 5,
              name: '水果',
              url: '05.png'
            }
          ]
        }, { // 这里是爆款推荐
          id: 2,
          type: 'recList',
          data: [
            {
              id: 1,
              name: '冰茶超级好喝der~我超想喝的捏捏',
              url: 'rec1.jpg',
              price: '9'
            }, {
              id: 2,
              name: '绿茶也是可以的啦~我也很想喝的捏',
              url: 'rec2.jpg',
              price: '23'
            }, {
              id: 3,
              name: '红茶我超爱',
              url: 'rec3.jpg',
              price: '64'
            }, {
              id: 4,
              name: '奶盖捏捏nie',
              url: 'rec4.jpg',
              price: '12'
            }
          ]
        }, { // 这里是猜你喜欢
          id: 3,
          type: 'likeList',
          data: [
            {
              id: 1,
              name: '红茶派1',
              url: 'rec1.jpg',
              price: '123',
              content: '很好吃的捏虽然我也不知道有没有这样一种食品'
            }, {
              id: 2,
              name: '奶茶雪糕2',
              url: 'rec2.jpg',
              price: '54',
              content: '我好想吃捏哎呀真是的'
            }, {
              id: 3,
              name: '抹茶3',
              url: 'rec3.jpg',
              price: '22',
              content: '我爱抹茶和奶盖'
            }, {
              id: 4,
              name: '不知道叫啥4',
              url: 'rec4.jpg',
              price: '11',
              content: '蓝色的看上去还行'
            }, {
              id: 5,
              name: '哈哈1',
              url: 'rec2.jpg',
              price: '34',
              content: '嗯哼'
            }, {
              id: 6,
              name: '热热热2',
              url: 'rec3.jpg',
              price: '32',
              content: '不知道是什么呢'
            }, {
              id: 7,
              name: '哈哈哈哈3',
              url: 'rec4.jpg',
              price: '2522',
              content: '哎呀'
            }, {
              id: 8,
              name: '大法师4',
              url: 'rec1.jpg',
              price: '325',
              content: '还好'
            }, {
              id: 9,
              name: '大萨达1',
              url: 'rec3.jpg',
              price: '423',
              content: '嘤嘤嘤'
            }, {
              id: 10,
              name: '东方闪电2',
              url: 'rec4.jpg',
              price: '53',
              content: '大大'
            }, {
              id: 11,
              name: '浮点数3',
              url: 'rec1.jpg',
              price: '54',
              content: '嘎嘎嘎'
            }, {
              id: 12,
              name: '海风吹拂4',
              url: 'rec2.jpg',
              price: '77',
              content: '电风扇'
            }, {
              id: 13,
              name: '很丰富的1',
              url: 'rec4.jpg',
              price: '13',
              content: '大数据'
            }, {
              id: 14,
              name: '加工费2',
              url: 'rec1.jpg',
              price: '32',
              content: '巅峰赛'
            }, {
              id: 15,
              name: '减个肥3',
              url: 'rec2.jpg',
              price: '34',
              content: '法案'
            }, {
              id: 16,
              name: '科技馆4',
              url: 'rec3.jpg',
              price: '666',
              content: '大飒飒'
            }, {
              id: 17,
              name: '????',
              url: 'rec5.png',
              price: '???',
              content: '哈哈哈'
            }
          ]
        }
      ]
    }
  })
})
// 监听端口
app.listen(8081, () => {}) // 后台运行在8081端口

// const express = require('express')
// const router = express.Router()

// /* GET home page. */
// router.get('/', (req, res, next) => {
//   res.render('index', { title: 'Express' })
// })

// router.get('./api/home', (req, res, next) => {
//   res.send({
//     code: 0,
//     a: 2322
//   })
// })

// module.exports = router

// 跨域设置
// app.all('*', function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Credentials', true)
//   res.setHeader('Access-Control-Allow-Origin', req.get('Origin')) // 添加这一行代码，代理配置不成功
//   res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, If-Modified-Since')
//   next()
// })

// app.get('/', (req, res, next) => {
//   res.send({
//     data: '322'
//   })
// })

// app.get('/api/home', (req, res, next) => {
//   res.send({
//     data: '322'
//   })
// })
