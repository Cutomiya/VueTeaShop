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

const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

app.get('/api/home', (req, res, next) => {
  res.send({
    data: '322'
  })
})

// 监听端口
app.listen(8081, () => {}) // 后台运行在3000端口

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
