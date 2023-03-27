const express = require('express')
const app = express()
const cors = require('cors')
const connention = require('../dataBase/sql')
const user = require('../dataBase/userSql')
app.use(cors())
let id

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
              darta: res[0]
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
    if (error) { throw error }
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
