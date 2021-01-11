const express = require('express')
const request = require('request')
const app = express()

// Config to define app settings
var config = {
  client_id: '9a2f065f41ff56f31c88',
  client_secret: 'a43e2082ad170d61b2b33d8c1e6fc023e1682a67',
  authorize_url: 'https://github.com/login/oauth/authorize',
  token_url: 'https://github.com/login/oauth/access_token',
  user_url: 'https://api.github.com/user',
  scope: 'user',
}

// Routes
app.get('/github/auth', (req, res) => {
  // redirect the user to github authorization url
  return res.redirect(config.authorize_url)
})
app.get('/github/callback', (req, res) => {
  // extract authorize code
  var code = req.querry.code

  // Configure request params
  options = {
    method: 'POST',
    uri: config.token_url,
    formData: {
      client_id: config.client_id,
      client_secret: config.client_secret,
      code: code,
    },
    headers: {
      accept: 'application/json',
    },
  }

  // Make a request for auth_token using above options
  request(options, (e, r, b) => {
    // process the body
    if (b) {
      jb = JSON.parse(b)

      // configure request to fetch user information
      option_user = {
        method: 'GET',
        url: config.user_url + '?access_token=' + jb.access_token,
        headers: {
          accept: 'application/json',
          'User-Agent': 'custom',
        },
      }
      request(option_user, (ee, rr, bb) => {
        // process the body
        if (bb) {
          var bo = JSON.parse(bb)
          var resp = {
            name: bo.name,
            url: bo.url,
            id: bo.id,
            bio: bo.bio,
          }
          return res.json(resp)
        } else {
          console.log(er)
          return res.json(er)
        }
      })
    }
  })
})

// Server Listen
app.listen(3000, () => {
  console.log('Listening to port 3000')
})
