const { Pool } = require('pg')
const pool = new Pool({
  user: process.env.LOCAL_DB_USER,
  host: process.env.LOCAL_DB_HOST,
  database: process.env.LOCAL_DB_DATABASE,
  password: process.env.LOCAL_DB_PASS,
  port: process.env.LOCAL_DB_PORT,
})

module.exports = {
  pool
}
