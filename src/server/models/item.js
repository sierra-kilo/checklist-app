const db = require('./db')

async function findAll() {
  const sql = 'SELECT * FROM item ORDER BY item_id'
  const result = await db.query(sql)
  return result.rows
}

async function addOne(name, description) {
  const params = [name, description]
  const sql = 'INSERT INTO item (name, description) VALUES ($1, $2)'
  const result = await db.query(sql, params)
  console.log(result)
}

async function deleteOne(id) {
  const params = [id]
  const sql = 'DELETE FROM item WHERE item_id=$1'
  const result = await db.query(sql, params)
  console.log(result);
}

module.exports = {
  findAll,
  addOne,
  deleteOne
}
