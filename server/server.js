var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var massive = require('massive')
var connectionString = "postgres://postgres:monkey@localhost/thursday";

var app = express()
module.exports = app

var massiveInstance = massive.connectSync({connectionString : connectionString})

app.set('db', massiveInstance)


app.use(cors())
app.use(bodyParser.json())
app.use(express.static('../public'))

var animalCtrl = require('./controllers/animalCtrl')

app.get('/api/animals', animalCtrl.getAllAnimals)
app.post('/api/animal', animalCtrl.createAnimal)

var port = 9001
app.listen(port, function(){
  console.log("it's over 9000!");
  console.log("KHANNN!");
  console.log("♫ Ground control to major tom ♫");
})
