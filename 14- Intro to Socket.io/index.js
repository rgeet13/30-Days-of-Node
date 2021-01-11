const express = require('express')
const app = express()
const http = require('http')
const socket = require('socket.io')

const server = http.createServer(app)
// Handling default route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

// Handling the route for admin
app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/public/admin.html')
})

// Socket Setup
const io = socket(server)
io.on('connection', (socket) => {
  socket.emit('welcome', { data: 'welcome' })

  socket.on('new', function (data) {
    console.log('About to upload Quote')
    io.sockets.emit('next', { data: data })
    // console.log('Connection is established')
    // socket.on('disconnect', () => {
    //   console.log('User has disconnected')
  })
})

server.listen(3000, () => {
  console.log('Server is running')
})

// var server = app.listen(3000, () => {
//   console.log(`Listening to Request on port 3000`)
// })

// Serve Static Files
app.use(express.static('public'))
