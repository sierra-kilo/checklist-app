// controllers/checklist.js
const Checklist = require('../models/Checklist');

async function getChecklists(req, res) {
  // Get the list
  const list = await Checklist.findAll();

  // Send it to the client as a JSON response
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

module.exports = {
  getChecklists,
  addChecklist,
  removeChecklist,
  getChecklist
}
