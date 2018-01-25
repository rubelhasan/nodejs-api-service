const express = require('express')
const app = express()
const router = express.Router()
const Auth = require('./auth')
const apiEndpoint = process.env.API_ENDPOINT || '3000'

router.get('/api/product/list', function (req, res) {
  res.send('product list')
})
router.get('/login', (req, res) => {
  var token = Auth.getAuthToken({email: 'rubeldhkbd@gmail.com'})
  res.send(token)
})
router.get('/logout', (req, res) => {
  res.send('logOut true')
})

app.use((req, res, next) => {
  Auth.isAuthenticated(req, res, next)
})
app.use('/', router)
app.listen(apiEndpoint, () => console.log(`admin api listening on port: ${apiEndpoint}`))