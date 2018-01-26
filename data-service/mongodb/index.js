const Search = require('./db.service')
const mongodb = require('mongodb').MongoClient
const awilix = require('awilix')
const { asValue, asClass } = awilix

module.exports = (container) => {
  const dbUrl = process.env.MDB_ENDPOINT || 'localhost:27017'
  const dbName = process.env.MDB_NAME
  let db = ''
  mongodb.connect(dbUrl, (err, client) => {
    if (err) {
      console.log('mongodb connection issue')
    }
    db = client.db(dbName)
  })

  container.register('search', asClass(Search))
  container.register('db', asValue(db))
  return container
}
