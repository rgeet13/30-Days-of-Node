const mongo = require('mongodb')
var new_db = 'mongodb://localhost:27017/demo_db'

mongo.connect(
  new_db,

  (error, db) => {
    if (error) {
      throw error
    }
    // Query parameter is used to search the collection
    var query = { name: 'rishabhio' }
    // And when the query matches the data in the DB , "data" parameter is used to update the value
    var data = { name: 'geet', mobile: '12345' }
    // Accessing the collection
    db.collection('details').updateOne(query, data, (err, collection) => {
      if (err) {
        throw err
      }
      console.log('Record updated successfully')
      console.log(collection)
      db.close()
    })
  }
)
