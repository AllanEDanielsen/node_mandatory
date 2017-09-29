const express    = require('express')
const app        = express()

const bodyParser = require('body-parser')
const path       = __dirname + '/webroot/'

app.use(express.static('webroot'))

app.get('/', function (req, res) {
  res.sendFile( path + 'index.html' )
})

app.get('/about', function (req, res) {
  res.sendFile( path + 'about.html' )
})

app.get('/contact', function (req, res) {
  res.sendFile( path + 'contact.html' )
})

app.get('*', function(req, res){
  res.sendFile( path + '404.html' , 404 )
})

app.listen(process.env.PORT || 8000);