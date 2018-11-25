const { asyncWrap } = require('../controllers/util')
const cChecklist = require('../controllers/checklist')

module.exports = function(app) {

  // GET route for getting all of the checklists
  app.get('/api/checklist', asyncWrap(cChecklist.getChecklists))


  // POST route for saving a new post
  app.post("/api/checklist", asyncWrap(cChecklist.addChecklist));
  //
  // app.delete('/api/checklist', Checklist.deleteChecklist)

  // DELETE route for deleting checklist
  //   app.delete("/api/checklist/", function(req, res) {
  //     db.Email.destroy({
  //       where: {
  //         // when using fetch must pass in state value as Data to use body
  //         email: req.body.email
  //       }
  //     })
  //     .then(function(dbEmail) {
  //       res.json(dbEmail);
  //     });
  //   });
};
