const db = require('./db')

async function findAll() {
  const sql = 'SELECT * FROM item ORDER BY id'
  const result = await db.query(sql)
  return result.rows
}

async function createOne(name, description) {
  const params = [name, description]
  const sql = 'INSERT INTO item (name, description) VALUES ($1, $2)'
  const result = await db.query(sql, params)
  console.log(result)
}

async function deleteOne(id) {
  const params = [id]
  const sql = 'DELETE FROM item WHERE id=$1'
  const result = await db.query(sql, params)
  console.log(result);
}

module.exports = {
  findAll,
  createOne,
  deleteOne
}
