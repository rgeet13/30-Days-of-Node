var ws = require('fs')
const { Console } = require('console')
const output = ws.createWriteStream('./stdout.log')
const errOutput = ws.createWriteStream('./stderr.log')
// custom simple print
const print = new Console(output, errOutput)
// Now we can use it like console
const roll = 22232
print.log('roll: %d', roll)
print.log('This will be stored in a flie')
