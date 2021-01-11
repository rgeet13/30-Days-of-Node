const mongo = require('mongodb')
var new_db = 'mongodb://localhost:27017/demo_db'

mongo.connect(
  new_db,

  (error, db) => {
    if (error) {
      throw error
    }
    // query stores the search condition
    var query = { name: 'geet' }

    // Accessing a Collection
    db.collection('details').deleteOne(query, (err, collection) => {
      if (err) {
        throw err
      }
      console.log(collection.result.n + ' Record deleted Successfully')
      console.log(collection)
      db.close()
    })
  }
)
