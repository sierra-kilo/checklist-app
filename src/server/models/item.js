const db = require('./db')

async function findAll() {
  const sql = 'SELECT * FROM item ORDER BY id'
  const result = await db.query(sql)
  return result.rows
}

async function findOne(id) {
  const sql = 'SELECT * FROM item WHERE id=$1'
  const params = [id]
  const result = await db.query(sql, params)
  return result
}

async function createOne(name, description) {
  const params = [name, description]
  const sql = 'INSERT INTO item (name, description) VALUES ($1, $2)'
  const result = await db.query(sql, params)
  return result
}

async function deleteOne(id) {
  const params = [id]
  const sql = 'DELETE FROM item WHERE id=$1'
  const result = await db.query(sql, params)
  return result
}

async function updateOne(id, name, description) {
  const sql = `
  UPDATE item
    SET name=$2, description=$3
    WHERE id=$1
  `
  const params = [id, name, description]
  const result = await db.query(sql, params)
  return result
}

module.exports = {
  findAll,
  findOne,
  createOne,
  deleteOne,
  updateOne
}
