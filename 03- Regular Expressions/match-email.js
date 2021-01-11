var str = 'rgeet@gmail.com'
var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
var res = str.match(pattern)
if (res) {
  console.log('Valid email address')
} else {
  console.log('Please enter a valid email address')
}
