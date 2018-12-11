const db = require('./db');

async function findAll() {
  const sql = 'SELECT * FROM response ORDER BY id'
  const result = await db.query(sql);
  return result.rows
}

async function findOne(id) {
  const sql = 'SELECT * FROM response WHERE id=$1'
  const params = [id]
  const result = await db.query(sql, params)
  return result
}

module.exports = {
  findAll,
  findOne
}
