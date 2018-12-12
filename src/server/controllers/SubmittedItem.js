const SubmittedItem = require('../models/SubmittedItem');

async function addSubmittedItem(req, res) {
  const data = await SubmittedItem.createOne(req.body.submitted_checklist_id, req.body.item_id, req.body.response_id)
  res.send(data)
}

module.exports = {
  addSubmittedItem
}
