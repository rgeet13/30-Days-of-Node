// Reading file synchronously

var fs = require('fs')
var fileName = './message.txt'

var content = fs.readFileSync(fileName)
console.log('Content: ' + content)
