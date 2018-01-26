class db {
  constructor (opts) {
    console.log(opts.db)
    console.log('mongodb')
  }
  addContent () {
    return 'Add content'
  }
  getContent () {
    return 'Get Content'
  }
  updateContent () {
    return 'Update Content '
  }
  deleteContent () {
    return 'Delete Content'
  }
}
module.exports = db
