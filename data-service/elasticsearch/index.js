const Search = require('./es.service')
const elasticsearch = require('elasticsearch')
const awilix = require('awilix')
const { asValue, asClass } = awilix

module.exports = (container) => {
  const esEndPoint = process.env.ES_ENDPOINT || 'localhost:9200'
  const es = new elasticsearch.Client({
    host: esEndPoint
  })
  container.register('search', asClass(Search))
  container.register('es', asValue(es))
  return container
}
