const SubmittedItem = require('../models/SubmittedItem');

async function getSubmittedItemResponses(req, res) {
  const list = await SubmittedItem.findMany(req.params.id);
  // const list = await SubmittedItem.findMany(req.body.id);
  res.send(list)
}

async function addSubmittedItem(req, res) {
  const data = await SubmittedItem.createOne(req.body.submitted_checklist_id, req.body.item_id, req.body.response_id)
  res.send(data)
}

module.exports = {
  getSubmittedItemResponses,
  addSubmittedItem
}
