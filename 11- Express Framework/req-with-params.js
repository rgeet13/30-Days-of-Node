const express = require('express')
const fs = require('fs')

var app = express()

app.get('/', (req, res) => {
  res.send('Simple example of routes')
})

app.get('/signup', (req, res) => {
  // This is how we will receive params from front-end
  var name = req.query.name
  var password = req.query.password
  // For demo purpose
  console.log(name + '' + '' + password)
  res.send('Sent')
})

app.listen(3000, () => {
  console.log('Running')
})
