var fs = require('fs')
var fileName = './data.txt'

var str = fs.readFileSync(fileName).toString()
var pattern = /man/gim
var myArray = str.match(pattern)
var len = myArray.length
console.log('Occurrences of the pattern in the string is : ' + len)
