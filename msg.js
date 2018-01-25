const msg = {
  notLogin: {
    statusCode: 401,
    success: false,
    message: 'No token provided.'
  },
  login: {
    statusCode: 200,
    success: true,
    message: 'Need to provide token'
  }
}
module.exports = msg
