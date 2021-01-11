const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Simple Examples of routes..!!')
})

app.get('/signin', (req, res) => {
  res.send('This is demo route for sign in')
})

app.listen(300, () => {
  console.log('Server is Listening')
})
