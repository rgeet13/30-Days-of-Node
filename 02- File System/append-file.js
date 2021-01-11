var fs = require('fs')
var newData = 'THis data will be appended at the end of the file.'
fs.appendFile('./message.txt', newData, (err) => {
  if (err) {
    throw err
  }
  console.log('New content Successfully Appended')
})
