const Item = require('../models/Item')

async function getItems(req, res) {
  const list = await Item.findAll()
  res.send(list)
}

async function getItem(req, res) {
  const data = await Item.findOne(req.params.id)
  res.send(data)
}

async function addItem(req, res) {
  const data = await Item.createOne(req.body.name, req.body.description)
  res.send(data)
}

async function removeItem(req, res) {
  const data = await Item.deleteOne(req.body.id)
  res.send(data)
}

async function updateItem(req, res) {
  const data = await Item.updateOne(req.body.id, req.body.name, req.body.description)
  res.send(data)
}

module.exports = {
  getItems,
  getItem,
  addItem,
  removeItem,
  updateItem
}
