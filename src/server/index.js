require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(express.static(__dirname, '..', '..', 'dist')));

// routes
require('./routes/api.js')(app)

app.get('*', (req, res) => {
  res.sendFile(path.join(dist, 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`)).on('error', function(err) { console.log(err)})
