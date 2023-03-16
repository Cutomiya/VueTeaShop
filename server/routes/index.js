const express = require('express')
const app = express()
const cors = require('cors')
const connention = require('../dataBase/sql')
app.use(cors())

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
    }
  })
})

// 搜索栏的数据
app.get('/api/goods/shopList', (req, res, next) => {
  // res.send({})
  let [searchName, orderName] = Object.keys(req.query)
  let [name, order] = Object.values(req.query)
  console.log(searchName, orderName, name, order)
  connention.query('select * from goodslist where name like "%' + name + '%" order by ' + orderName + ' ' + order + '', (error, results) => {
    if (error) return console.log(error.message)
    res.send({
      code: 0,
      data: results
    })
  })
})

// 首页的数据
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

// 监听端口
app.listen(8081, () => {}) // 后台运行在3000端口

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
