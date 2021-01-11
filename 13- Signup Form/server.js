const mongo = require('mongodb')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const crypto = require('crypto')

const app = express()
var new_db = 'mongodb://localhost:27017/geet'

app
  .get('/', (req, res) => {
    res.set({
      'Access-Control-Allow-Origin': '*',
    })
    return res.redirect('/public/index.html')
  })
  .listen(3000)
console.log('Server is running at: 3000')
app.use('/public', express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    // To support URL-encoded bodies
    extended: true,
  })
)

var getHash = (pass, phone) => {
  var hmac = crypto.createHmac('sha512', phone)

  //passing the data to be hashed
  data = hmac.update(pass)
  //Creating the hmac in the required format
  gen_hmac = data.digest('hex')
  //Printing the output on the console
  console.log('hmac : ' + gen_hmac)
  return gen_hmac
}

// Sign-up function starts here. . .
app.post('/sign_up', function (req, res) {
  var name = req.body.name
  var email = req.body.email
  var pass = req.body.password
  var phone = req.body.phone
  var password = getHash(pass, phone)

  var data = {
    name: name,
    email: email,
    password: password,
    phone: phone,
  }

  mongo.connect(new_db, function (error, db) {
    if (error) {
      throw error
    }
    console.log('connected to database successfully')
    //CREATING A COLLECTION IN MONGODB USING NODE.JS
    db.collection('details').insertOne(data, (err, collection) => {
      if (err) throw err
      console.log('Record inserted successfully')
      console.log(collection)
    })
  })

  console.log('DATA is ' + JSON.stringify(data))
  res.set({
    'Access-Control-Allow-Origin': '*',
  })
  return res.redirect('/public/success.html')
})
