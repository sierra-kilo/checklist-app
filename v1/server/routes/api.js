const db = require('../queries/queries')

module.exports = function(app) {
  app.get('/', db.getChecklists)
};
