const mysql = require('mysql')
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'qc20151329',
  database: 'drink_shop_23_2_27'
})
module.exports = connection
