// Password must contain 1 capital letter [A-Z]
// Password must contain 1 small letter [a-z]
// Password must contain 1 number [0-9]
// Password must contain 1 special character [!,@,#,$,%,^,. . . ] etc
// Length of the password must be within the range [6 to 16]
var str = 'Aa#1aaabcde'
var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

var res = str.match(pattern)
if (res) {
  console.log('Valid password')
} else {
  console.log('Not a valid password')
}
