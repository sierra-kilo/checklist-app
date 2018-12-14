const Checklist = require('../models/Checklist');

async function getChecklists(req, res) {
  const list = await Checklist.findAll();
  res.send(list);
}

async function getChecklist(req, res) {
  const data = await Checklist.findOne(req.params.id)
  res.send(data)
}

async function addChecklist(req, res) {
  const data = await Checklist.createOne(req.body.name, req.body.description)
  res.send(data)
}

async function removeChecklist(req, res) {
  const data = await Checklist.deleteOne(req.body.id)
  res.send(data)
}

async function updateChecklist(req, res) {
  const data = await Checklist.updateOne(req.body.id, req.body.name, req.body.description)
  res.send(data)
}

async function addChecklists(req, res) {
  const data = await Checklist.createMany([['t5', 't5d'], ['t6', 't6d'], ['t7', 't7d']]
  )
  res.send(data)
}

module.exports = {
  getChecklists,
  getChecklist,
  addChecklist,
  removeChecklist,
  updateChecklist,
  addChecklists
}
