const db = require('./db')

async function findMany(submitted_checklist_id) {
  const sql = `
  SELECT i.name, i.description, r.response
    FROM submitted_checklist sc
    JOIN submitted_item si
    ON si.submitted_checklist_id = sc.id
    JOIN item i
    ON i.id = si.item_id
    JOIN response r
    ON r.id = si.response_id
    WHERE sc.id = $1;
  `
  const params = [submitted_checklist_id]
  const result = await db.query(sql, params)
  return result.rows
  // console.log(result.rows)
}


async function createOne(submitted_checklist_id, item_id, response_id) {
  const sql = 'INSERT INTO submitted_item (submitted_checklist_id, item_id, response_id) VALUES ($1, $2, $3)'
  const params = [submitted_checklist_id, item_id, response_id]
  const result = await db.query(sql, params)
  return result

}

// async function createMany(values) {
//
// }

module.exports = {
  findMany,
  createOne
}
