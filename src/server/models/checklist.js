const db = require('./db');
const format = require('pg-format')

// Returns a Promise of an array of checklist rows
async function findAll() {
  const sql = 'SELECT * FROM checklist ORDER BY id'
  const result = await db.query(sql);
  return result.rows
  // A complete example would convert the rows into a custom object
}

async function findOne(id) {
  const sql = 'SELECT * FROM checklist WHERE id=$1'
  const params = [id]
  const result = await db.query(sql, params)
  return result
}

async function createOne(name, description) {
  const params = [name, description]
  const sql = 'INSERT INTO checklist (name, description) VALUES ($1, $2)'
  const result = await db.query(sql, params)
  return result
}

async function createMany(values) {
  const params = values
  const sql = format('INSERT INTO checklist (name, description) VALUES %L', params )
  const result = await db.query(sql)
  console.log(values, result, sql, params)
  return result
}

async function deleteOne(id) {
  const params = [id]
  const sql = 'DELETE FROM checklist WHERE id=$1'
  const result = await db.query(sql, params)
  return result
}

async function updateOne(id, name, description) {
  const sql = `
  UPDATE checklist
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
  updateOne,
  createMany
}
