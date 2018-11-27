const ChecklistHasItem = require('../models/checklist_has_item');

async function getChecklistItems(req, res) {
  // Get the list
  const list = await ChecklistHasItem.findOne(req.body.checklist_id);
  // Send it to the client as a JSON response
  res.send(list);
}

async function addChecklistItem(req, res) {
  const data = await ChecklistHasItem.createOne(req.body.checklist_id, req.body.item_id)
  res.send(data)
}

async function removeChecklistItem(req, res) {
  const data = await ChecklistHasItem.deleteOne(req.body.fk_checklist_checklist_id, req.body.fk_item_item_id)
  res.send(data)
}

module.exports = {
  getChecklistItems,
  addChecklistItem,
  removeChecklistItem
}
