const db = require('../models/db')


module.exports = function(app) {

  // GET route for getting all of the checklists
  app.get('/api/checklist', db.getChecklists)


  // POST route for saving a new post
  app.post("/api/checklist", db.createChecklist);

  app.delete('/api/checklist', db.deleteChecklist)

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
