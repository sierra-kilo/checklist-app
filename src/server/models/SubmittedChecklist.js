const db = require('./db')

async function findAll() {
  const sql = 'SELECT * FROM submitted_checklist ORDER BY id';
  const list = await db.query(sql)
  return list.rows
}

async function findMany(checklist_id) {
  const sql = 'SELECT * FROM submitted_checklist WHERE checklist_id=$1'
  const params = [checklist_id]
  const data = await db.query(sql, params)
  return data.rows
}

async function findOne(id) {
  const sql = 'SELECT * FROM submitted_checklist WHERE id=$1'
  const params = [id]
  const data = await db.query(sql, params)
  return data
}

async function createOne(checklist_id) {
  const sql = 'INSERT INTO submitted_checklist(checklist_id, time_submitted) VALUES($1, NOW()) RETURNING id'
  const params = [checklist_id]
  const data = await db.query(sql, params)
  return data
}

async function deleteOne(id) {
  const sql = 'DELETE FROM submitted_checklist WHERE id=$1'
  const params = [id]
  const data = await db.query(sql, params)
  return data
}

module.exports = {
  findAll,
  findMany,
  findOne,
  createOne,
  deleteOne
}
