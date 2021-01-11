var fs = require('fs')

fs.rename('./message.txt', 'newFile.txt', (err) => {
  if (err) {
    throw err
  }
  console.log('File Renamed Successfully..!')
})
