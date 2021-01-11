const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const Twitter = require('twitter')
const request = require('request')
const http = require('http')
const mysql = require('mysql')
const server = http.Server(app)
const io = require('socket.io')(server)

// Establishing a connection with mysql database
var connect = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Grr@131299',
  database: 'my_db',
})

// Twitter Credentials
var client = new Twitter({
  consumer_key: 'SyEKPeN8wGJHduTs6U7KavOx0',
  consumer_secret: 'WOH1oCQssyWjr7PptQt8lHoNEWMzAYkZTabJcMHxawK9inHjbv',
  access_token_key:
    'AAAAAAAAAAAAAAAAAAAAAFcaLgEAAAAAQYiJLshcIEna4aNkSF%2FVY0jZZbc%3DNiZj6kYgLGqE6eLN3f4a8LGHywN5ed0Bo8Pv2sc25m8qetnfD7',
  access_token_secret:
    'AAAAAAAAAAAAAAAAAAAAAFcaLgEAAAAAQYiJLshcIEna4aNkSF%2FVY0jZZbc%3DNiZj6kYgLGqE6eLN3f4a8LGHywN5ed0Bo8Pv2sc25m8qetnfD7',
})

// Starting Server
server.listen(3000)
console.log('Server is listening')

// Default Route
app.get('/', (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
  })
  return res.redirect('/public/index.html')
})

// Middleware
app.use('/public', express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    // To support url encoded bodies
    extended: true,
  })
)

io.on('connection', function (socket) {
  //Default event just for testing
  socket.emit('welcome', { data: 'welcome' })
  //Keyword event is handled here
  socket.on('keyword', function (data) {
    console.log(data)
    var keyword = data.keyword
    var stream = client.stream('statuses/filter', { track: keyword })

    stream.on('data', function (event) {
      var tweet = event.text
      var user = event.user.name

      var insert_R = 'INSERT INTO tweet_repo(keyword,user,tweet) VALUE(?,?,?)'
      //establishing connection
      connect.getConnection(function (err, connection) {
        //Inserting a record into details
        connection.query(insert_R, [keyword, user, tweet], function (err, res) {
          if (err) throw err
          else {
            var content = {
              keyword: keyword,
              user: user,
              tweet: tweet,
            }
            console.log('Keyword is ::>> ' + keyword)
            console.log('Tweeted by ::>>' + event.user.name)
            console.log('Tweet is ::>>' + event.text)
            console.log('Details added successfully')
            //Emitting the data using sockets
            socket.emit('livetweets', { data: content })
          }
        })
        //releasing connection
        socket.on('stop', function (data) {
          connection.release()
        })
      })
    })

    stream.on('error', function (error) {
      throw error
    })
  })
})
