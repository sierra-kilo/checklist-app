const db = require('./db');

// get checklist_has_item
async function findOne(id) {
  const sql = 'SELECT * FROM checklist_has_item WHERE fk_checklist_checklist_id=$1'
  const params = [id]
  const result = await db.query(sql, params);
  return result.rows
}

// add new item to checklist_has_item
async function addOne(checklist_id, item_id) {
  const sql = 'INSERT INTO checklist_has_item (fk_checklist_checklist_id, fk_item_item_id) VALUES ($1, $2)'
  const params = [checklist_id, item_id]
  const result = await db.query(sql, params)
}

// delete item from checklist has item
async function deleteOne(fk_checklist_checklist_id, fk_item_item_id ) {
  const sql = 'DELETE FROM checklist_has_item WHERE (fk_checklist_checklist_id, fk_item_item_id) = ($1, $2)'
  const params = [fk_checklist_checklist_id, fk_item_item_id]
  const result = await db.query(sql, params)
}

module.exports = {
  findOne,
  addOne,
  deleteOne
}
