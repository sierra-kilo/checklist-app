const ChecklistItem = require('../models/Checklist_Item');

async function getChecklistItems(req, res) {
  // Get the list
  const list = await ChecklistItem.getItems(req.params.id);
  // Send it to the client as a JSON response
  res.send(list);
}

async function addChecklistItem(req, res) {
  const data = await ChecklistItem.createOne(req.body.checklist_id, req.body.item_id)
  res.send(data)
}

async function removeChecklistItem(req, res) {
  const data = await ChecklistItem.deleteOne(req.body.checklist_id, req.body.item_id)
  res.send(data)
}

module.exports = {
  getChecklistItems,
  addChecklistItem,
  removeChecklistItem
}
