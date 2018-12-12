const ChecklistItemResponse = require('../models/Submitted_Checklist_Item_Response');

async function getSubmittedResponses(req, res) {
  const list = await ChecklistItemResponse.findMany(req.params.id);
  res.send(list)
}

module.exports = {
  getSubmittedResponses
}
