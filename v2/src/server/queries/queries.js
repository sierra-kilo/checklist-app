const Pool = require('pg').Pool
const pool = new Pool({
  user: 'sierrakilo',
  host: 'localhost',
  database: 'basic_checklist_db',
  password: '',
  port: 5432,
})

const getChecklists = (request, response) => {
  pool.query('SELECT * FROM checklist', (error, results) => {
    if (error) {
      throw error
    }
    response.json(results.rows)
  })
}

module.exports = {
getChecklists
}
