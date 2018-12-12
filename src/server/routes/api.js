const { asyncWrap } = require('../controllers/util')
const cChecklist = require('../controllers/checklist')
const cItem = require ('../controllers/item')
const cChecklist_has_item = require ('../controllers/checklist_item')
const cSubmittedChecklistItemResponse = require ('../controllers/submitted_checklist_item_response')

module.exports = function(app) {

  // checklist routes
  app.get('/api/checklist', asyncWrap(cChecklist.getChecklists))
  app.get('/api/checklist/:id', asyncWrap(cChecklist.getChecklist))
  app.post('/api/checklist', asyncWrap(cChecklist.addChecklist))
  app.put('/api/checklist/:id', asyncWrap(cChecklist.updateChecklist))
  app.delete('/api/checklist', asyncWrap(cChecklist.removeChecklist))

  // item routes
  app.get('/api/item', asyncWrap(cItem.getItems))
  app.get('/api/item/:id', asyncWrap(cItem.getItem))
  app.post('/api/item', asyncWrap(cItem.addItem))
  app.put('/api/item/:id', asyncWrap(cItem.updateItem))
  app.delete('/api/item', asyncWrap(cItem.removeItem))

  // checklist_item routes
  app.get('/api/checklistItem/:id', asyncWrap(cChecklist_has_item.getChecklistItems))
  app.post('/api/checklistItem', asyncWrap(cChecklist_has_item.addChecklistItem))
  app.delete('/api/checklistItem', asyncWrap(cChecklist_has_item.removeChecklistItem))

  // submitted_checklist routes

  // submitted_item routes

  // submitted_checklist_item_response routes
  app.get('/api/submittedChecklistItemResponse/:id', asyncWrap(cSubmittedChecklistItemResponse.getSubmittedResponses))

};
