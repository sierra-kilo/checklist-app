const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


// routes
require('./routes/api.js')(app)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
