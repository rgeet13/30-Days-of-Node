// Writing a file Asynchronously
var fs = require('fs')
var content = 'THis is the content in the file'
fs.writeFile('./message.txt', content, (err) => {
  if (err) {
    throw err
  }
  console.log("It's saved")
})
