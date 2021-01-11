const mongo = require('mongodb')
const new_db = 'mongodb://localhost:27017/demo_db'

mongo.connect(
  new_db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, db) => {
    if (err) {
      throw err
    }
    // findOne() reads the first occurance of any data from the database.
    db.collection('details').findOne({}, (err, collection) => {
      if (err) {
        throw err
      }
      console.log('Record Read Successfully.!!')
      console.log(collection)
      db.close()
    })
  }
)
