// const sslRedirect = require('heroku-ssl-redirect');
require('dotenv').config()
const path = require('path')
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

// const dist = path.join(__dirname, '..', '..', 'dist');

// enable ssl redirect
// app.use(sslRedirect());

// middleware for production
// app.use(express.static('dist'));


// routes
require('./routes/api.js')(app)

app.get('*', (req, res) => {
  res.sendFile(path.join(dist, 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`)).on('error', function(err) { console.log(err)})
