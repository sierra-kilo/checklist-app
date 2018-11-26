const ChecklistHasItem = require('../models/checklist_has_item');

async function getChecklistItems(req, res) {
  // Get the list
  const list = await ChecklistHasItem.findOne(118);

  // Send it to the client as a JSON response
  res.send(list);
}

module.exports = {
  getChecklistItems
}
