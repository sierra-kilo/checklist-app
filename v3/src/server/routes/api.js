const { asyncWrap } = require('../controllers/util')
const cChecklist = require('../controllers/checklist')
const cItem = require ('../controllers/item')
const cChecklist_has_item = require ('../controllers/checklist_has_item')

module.exports = function(app) {

  // checklist routes
  app.get('/api/checklist', asyncWrap(cChecklist.getChecklists))
  app.post("/api/checklist", asyncWrap(cChecklist.addChecklist))
  app.delete('/api/checklist', asyncWrap(cChecklist.removeChecklist))

  // item routes
  app.get('/api/item', asyncWrap(cItem.getItems))
  app.post("/api/item", asyncWrap(cItem.addItem))
  app.delete('/api/item', asyncWrap(cItem.removeItem))

  // checklist_has_item routes
  app.get('/api/checklistHasItem', asyncWrap(cChecklist_has_item.getChecklistItems))
  app.post('/api/checklistHasItem', asyncWrap(cChecklist_has_item.addChecklistItem))
  app.delete('/api/checklistHasItem', asyncWrap(cChecklist_has_item.removeChecklistItem))

};
