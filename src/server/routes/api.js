const { asyncWrap } = require('../controllers/util')
const cChecklist = require('../controllers/Checklist')
const cItem = require ('../controllers/Item')
const cChecklistHasItem = require ('../controllers/ChecklistItem')
const cSubmittedChecklistItemResponse = require ('../controllers/SubmittedChecklistItemResponse')
const cSubmittedItem = require('../controllers/SubmittedItem')

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
  app.get('/api/checklist-item/:id', asyncWrap(cChecklistHasItem.getChecklistItems))
  app.post('/api/checklist-item', asyncWrap(cChecklistHasItem.addChecklistItem))
  app.delete('/api/checklist-item', asyncWrap(cChecklistHasItem.removeChecklistItem))

  // submitted_checklist routes

  // submitted_item routes
  app.post('/api/submitted-item', cSubmittedItem.addSubmittedItem)

  // submitted_checklist_item_response routes
  app.get('/api/submitted-checklist-item-response/:id', asyncWrap(cSubmittedChecklistItemResponse.getSubmittedResponses))

};
