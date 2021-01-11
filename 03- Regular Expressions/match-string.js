var fs = require('fs')
var fileName = './data.html'
var str = fs.readFileSync(fileName).toString()
var pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim
var myArray = str.match(pattern)
var len = myArray.length
console.log('Occurences of pattern in the string is : ' + len)
