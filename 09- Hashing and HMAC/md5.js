// Loading the crypto module in node.js
var crypto = require('crypto')
// creating hash object
var hash = crypto.createHash('md5')
// passing data to be hashed
data = hash.update('geet', 'utf-8')
// Creating the hash inn the required format
gen_hash = data.digest('hex')
// Printing the output on the console
console.log('hash : ' + gen_hash)
