var http = require('http')

var host = '127.0.0.1'
var port = 30001

var server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('Hello World..!!')
  res.end()
})

server.listen(port, host, (err) => {
  if (err) {
    console.log('Error Occured: ', err)
  }
  console.log('Server is listening in ' + host + ':' + port)
})
