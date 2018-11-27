const Item = require('../models/item')

async function getItems(req, res) {
  const list = await Item.findAll()
  res.send(list)
}

async function addItem(req, res) {
  const data = await Item.createOne(req.body.name, req.body.description)
  res.send(data)
}

async function removeItem(req, res) {
  const data = await Item.deleteOne(req.body.id)
  res.send(data)
}

module.exports = {
  getItems,
  addItem,
  removeItem
}
