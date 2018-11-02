const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const pgp = require('pg-promise')(/*options*/)
const db = pgp('postgres://sierrakilo@localhost:5432/sampledb')

db.many('SELECT name FROM people;', 123)
  .then((data) => {
    data.forEach(name => {
      console.log(`Name: ${name.name}`)
    })
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
