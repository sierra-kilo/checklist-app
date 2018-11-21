const db = require('../queries/queries')

module.exports = function(app) {
  app.get('/api/checklist', db.getChecklists)
};
