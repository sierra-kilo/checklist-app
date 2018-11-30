const db = require('./db');

// get checklist_item
// async function getItems(id) {
//   const sql = 'SELECT * FROM checklist_item WHERE fk_checklist_checklist_id=$1'
//   const params = [id]
//   const result = await db.query(sql, params);
//   return result.rows
// }

async function getItems(id) {
  const sql = `select * from checklist_item
  join item on id = checklist_item.item_id
  where checklist_item.checklist_id = $1`
  const params = [id]
  const result = await db.query(sql, params);
  return result.rows
}

// add new item to checklist_item
async function createOne(checklist_id, item_id) {
  const sql = 'INSERT INTO checklist_item (checklist_id, item_id) VALUES ($1, $2)'
  const params = [checklist_id, item_id]
  const result = await db.query(sql, params)
}

// delete item from checklist has item
async function deleteOne(checklist_id, item_id ) {
  const sql = 'DELETE FROM checklist_item WHERE (checklist_id, item_id) = ($1, $2)'
  const params = [checklist_id, item_id]
  const result = await db.query(sql, params)
}

module.exports = {
  getItems,
  createOne,
  deleteOne
}

// 'select * from checklist_item
// join item on item_id = checklist_item.fk_item_item_id
// where checklist_item.fk_checklist_checklist_id = $1'
