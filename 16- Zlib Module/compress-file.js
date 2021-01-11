const zlib = require('zlib')
const fs = require('fs')

const zip = zlib.createGzip()

var read = fs.createReadStream('newFile.txt')
var write = fs.createWriteStream('newFile.txt.gz')

// Transform stream which is zipping the input file
read.pipe(zip).pipe(write)
console.log('Zipped Successfully')
