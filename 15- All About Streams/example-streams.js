const fs = require('fs')
// write data to a file using writable stream
const wData = 'I am working with streams for the first time'
const myWriteStream = fs.createWriteStream('aboutMe.txt')

// write data
myWriteStream.write(wData)

// done writing
myWriteStream.end()

// write handler for error event
myWriteStream.on('error', (err) => {
  console.log(err)
})

myWriteStream.on('finish', () => {
  console.log('data written successfully using streams.')
  console.log('Now trying to read the same file using read streams ')
  const myReadStream = fs.createReadStream('aboutMe.txt')

  // add handlers for our read stream
  var rContents = '' // to hold read contents
  myReadStream.on('data', (chunk) => {
    rContents += chunk
  })
  myReadStream.on('error', (err) => {
    console.log(err)
  })
  myReadStream.on('end', () => {
    console.log('read: ' + rContents)
  })
  console.log('Performed Read and Write Streams')
})
