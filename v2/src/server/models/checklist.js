const db = require('./db');

const getChecklists = (req, res) => {
  db.pool.query('SELECT * FROM checklist', (err, results) => {
    if (err) {
      throw err
    }
    res.json(results.rows)
  })
}

const createChecklist = (req, res) => {
  // console.log(req.body);
  db.pool.query('INSERT INTO checklist (name, description) VALUES ($1, $2)', [req.body.name, req.body.description])
    .catch((err) => {
      console.log('err', err)
      res.redirect('/')
    })
}

const deleteChecklist = (req, res) => {
  // console.log(req)
  db.pool.query('DELETE FROM checklist WHERE checklist_id=$1', [req.body.id])
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
