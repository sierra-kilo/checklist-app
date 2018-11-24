const db = require('./db');

// const getChecklists = (req, res) => {
//   db.pool.query('SELECT * FROM checklist', (err, results) => {
//     if (err) {
//       throw err
//     }
//     res.json(results.rows)
//   })
// }

// Returns a Promise of an array of checklist rows
async function findAll() {
     const sql = 'SELECT c.* FROM checklist c ORDER BY c.id'
     const result = await db.pool.query(sql);
     if (err) {
       throw err
     }
     res.json(result.rows)
     // A complete example would convert the rows into a custom object
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
  findAll,
  // getChecklists,
  createChecklist,
  deleteChecklist
}
