// Reading a File Asynchronously using nodejs

var fs = require('fs')

fs.readFile('message.txt', (err, data) => {
  if (err) {
    throw err
  }
  console.log('Content: ' + data)
})
