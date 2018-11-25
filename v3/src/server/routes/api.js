const { asyncWrap } = require('../controllers/util')
const cChecklist = require('../controllers/checklist')

module.exports = function(app) {

  // GET route for getting all of the checklists
  app.get('/api/checklist', asyncWrap(cChecklist.getChecklists))

  // POST route for saving a new post
  app.post("/api/checklist", asyncWrap(cChecklist.addChecklist))

  // app.delete('/api/checklist', Checklist.deleteChecklist)
  app.delete('/api/checklist', asyncWrap(cChecklist.removeChecklist))

};
