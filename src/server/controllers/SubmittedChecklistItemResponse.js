const ChecklistItemResponse = require('../models/SubmittedChecklistItemResponse');

async function getSubmittedResponses(req, res) {
  const list = await ChecklistItemResponse.findMany(req.params.id);
  res.send(list)
}

module.exports = {
  getSubmittedResponses
}
