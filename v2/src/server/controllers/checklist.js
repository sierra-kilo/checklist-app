// controllers/checklist.js
const Checklist = require('../models/checklist');

async function getChecklists(req, res) {
     // Get the list
     const list = await Checklist.findAll();

     // Send it to the client as a JSON response
     res.send(list);
}

module.exports = {
  getChecklists
}