const db = require('./db');

// get checklist_has_item
async function findOne(id) {
  const sql = 'SELECT * FROM checklist_has_item WHERE fk_checklist_checklist_id=$1'
  const params = [id]
  const result = await db.query(sql, params);
  return result.rows
}

// // Returns a Promise of an array of checklist rows
// async function findAll() {
//   const sql = 'SELECT * FROM checklist ORDER BY checklist_id'
//   const result = await db.query(sql);
//   return result.rows
//   // A complete example would convert the rows into a custom object
// }
//
// async function addOne(name, description) {
//   const params = [name, description]
//   const sql = 'INSERT INTO checklist (name, description) VALUES ($1, $2)'
//   const result = await db.query(sql, params)
// }
//
// async function deleteOne(id) {
//   const params = [id]
//   const sql = 'DELETE FROM checklist WHERE checklist_id=$1'
//   const result = await db.query(sql, params)
// }

module.exports = {
  findOne
}
