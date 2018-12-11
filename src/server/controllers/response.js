const Response = require('../models/Response');

async function getResponses(req, res) {
  const list = await Response.findAll();
  res.send(list);
}

async function getResponse(req, res) {
  const data = await Response.findOne(req.params.id)
  res.send(data)
}

module.exports = {
  getResponse,
  getResponses
}
