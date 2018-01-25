const express = require('express')
const app = express()
const Router = express.Router()
const AuthRoute = express.Router()

const Auth = require('./auth')
const apiEndpoint = process.env.API_ENDPOINT || '3000'

AuthRoute.get('/login', (req, res) => {
  var token = Auth.getAuthToken({email: 'rubeldhkbd@gmail.com'})
  res.send(token)
})
AuthRoute.get('/logout', (req, res) => {
  res.send('logOut true')
})

Router.get('/product/add', function (req, res) {
  res.send('product add')
})

Router.get('/product/list', function (req, res) {
  res.send('product list')
})

Router.get('/product/update', function (req, res) {
  res.send('product update')
})

Router.get('/product/delete', function (req, res) {
  res.send('product delete')
})
app.use((req, res, next) => {
  Auth.isAuthenticated(req, res, next)
})

app.use('/', AuthRoute)
app.use('/api', Router)

app.listen(apiEndpoint, () => console.log(`admin api listening on port: ${apiEndpoint}`))
