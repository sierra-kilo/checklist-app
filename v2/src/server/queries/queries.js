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
  // console.log(req.body);
  pool.query('INSERT INTO checklist (name, description) VALUES ($1, $2)', [req.body.name, req.body.description])
  .catch((err) => {
    console.log('err', err)
    res.redirect('/')
  })
}

const deleteChecklist = (req, res) => {
  // console.log(req)
  pool.query('DELETE FROM checklist WHERE checklist_id=$1', [req.body.id])
  .catch(err => {
    console.log(err);
    res.redirect('/')
  })
}


module.exports = {
getChecklists,
createChecklist,
deleteChecklist
}
