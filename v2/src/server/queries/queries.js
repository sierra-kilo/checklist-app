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

const createChecklist = (req, res) => {
  console.log(req.body);
  return pool.query('INSERT INTO checklist (name, description) VALUES ($1, $2)', [req.body.name, req.body.description])
  .then((result) => {
    // console.log('result?', result);
    res.redirect('/')
  })
  .catch((err) => {
    console.log('err', err);
    res.redirect('/')
  })
}


module.exports = {
getChecklists,
createChecklist
}
