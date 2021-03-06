const { asyncWrap } = require('../controllers/util')
const cChecklist = require('../controllers/Checklist')
const cItem = require ('../controllers/Item')
const cChecklistHasItem = require ('../controllers/ChecklistItem')
// const cSubmittedChecklistSubmittedItemResponse = require ('../controllers/SubmittedChecklistSubmittedItemResponse')
const cSubmittedItem = require('../controllers/SubmittedItem')
const cSubmittedChecklist = require('../controllers/SubmittedChecklist')

module.exports = function(app) {

  // checklist routes
  app.get('/api/checklist', asyncWrap(cChecklist.getChecklists))
  app.get('/api/checklist/:id', asyncWrap(cChecklist.getChecklist))
  app.post('/api/checklist', asyncWrap(cChecklist.addChecklist))
  app.put('/api/checklist/:id', asyncWrap(cChecklist.updateChecklist))
  app.delete('/api/checklist', asyncWrap(cChecklist.removeChecklist))
  app.post('/api/checklists', asyncWrap(cChecklist.addChecklists))

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
  app.get('/api/submitted-checklists', asyncWrap(cSubmittedChecklist.getAllSubmittedChecklists))
  app.post('/api/submit-checklist', asyncWrap(cSubmittedChecklist.submitChecklist))

  // submitted_item routes
  app.get('/api/submitted-checklist-item-response/:id', asyncWrap(cSubmittedItem.getSubmittedItemResponses))
  // app.post('/api/submitted-item', asyncWrap(cSubmittedItem.addSubmittedItem))
  app.post('/api/submitted-item', asyncWrap(cSubmittedItem.addSubmittedItems))


};
