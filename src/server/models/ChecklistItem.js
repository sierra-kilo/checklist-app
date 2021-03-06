const db = require('./db');

async function findMany(checklist_id) {
  const sql = `SELECT * FROM checklist_item
  JOIN item ON id = checklist_item.item_id
  WHERE checklist_item.checklist_id = $1`
  const params = [checklist_id]
  const result = await db.query(sql, params);
  return result.rows
}

// add new item to checklist_item
async function createOne(checklist_id, item_id) {
  const sql = 'INSERT INTO checklist_item (checklist_id, item_id) VALUES ($1, $2)'
  const params = [checklist_id, item_id]
  const result = await db.query(sql, params)
  return result
}

// delete item from checklist has item
async function deleteOne(checklist_id, item_id ) {
  const sql = 'DELETE FROM checklist_item WHERE checklist_id = $1 AND item_id = $2'
  const params = [checklist_id, item_id]
  const result = await db.query(sql, params)
  return result
}

module.exports = {
  findMany,
  createOne,
  deleteOne
}
