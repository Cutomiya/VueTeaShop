const mysql = require('mysql')
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'drink_shop_23_2_27'
})
module.exports = connection
