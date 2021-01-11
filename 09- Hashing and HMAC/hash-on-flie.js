var crypto = require('crypto')
var fs = require('fs')

// Algorithm to be used for HASH
var algorithm = 'sha256'
// creating hash object
var hash = crypto.createHash(algorithm)

// reading the content of the file
var fileName = './data.txt'
var fileData = fs.ReadStream(fileName)

// passing the data to be hashed
fileData.on('data', (data) => {
  hash.update(data)
})

//Creating the hash in the required format and writing it in file
fileData.on('end', function () {
  var gen_hash = hash.digest('hex')
  console.log(
    'Hash generated using ' +
      algorithm +
      ' \nHashed output is :  ' +
      gen_hash +
      ' \nFile name is :  ' +
      fileName
  )
  fs.writeFileSync(fileName, gen_hash)
})
