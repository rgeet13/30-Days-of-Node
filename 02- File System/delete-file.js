var fs = require('fs')

var filename = 'message.txt'
fs.unlink(filename, (err) => {
  if (err) {
    throw err
  }
  console.log('File deleted.!!')
})
