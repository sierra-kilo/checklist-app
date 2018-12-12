const db = require('./db')

async function createOne(submitted_checklist_id, item_id, response_id) {
  const sql = 'INSERT INTO submitted_item (submitted_checklist_id, item_id, response_id) VALUES ($1, $2, $3)'
  const params = [submitted_checklist_id, item_id, response_id]
  const result = await db.query(sql, params)
  return result

}

module.exports = {
  createOne
}
