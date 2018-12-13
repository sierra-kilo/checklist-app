const SubmittedChecklist = require('../models/SubmittedChecklist')

async function getAllSubmittedChecklists(req, res) {
  const data = await SubmittedChecklist.findAll()
  res.send(data)
}

async function getManySubmittedChecklists(req, res) {
  const data = await SubmittedChecklist.findMany(req.body.checklist_id)
  res.send(data)
}

async function getSubmittedChecklist(req, res) {
  const data = await SubmittedChecklist.findOne(req.body.id)
  res.send(data)
}

async function submitChecklist(req, res) {
  const data = await SubmittedChecklist.createOne(req.body.checklist_id)
  res.send(data)
}

async function deleteChecklist(req, res) {
  const data = await SubmittedChecklist.deleteOne(req.body.id)
  res.send(data)
}

module.exports = {
  getAllSubmittedChecklists,
  getManySubmittedChecklists,
  getSubmittedChecklist,
  submitChecklist,
  deleteChecklist
}
