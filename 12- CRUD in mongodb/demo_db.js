//Including the required packages
var mongo = require('mongodb')
//Establishing the connection
var new_db = 'mongodb://localhost:27017/demo_db'

//establishing the connection
mongo.connect(
  new_db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error, db) => {
    if (error) {
      throw error
    }
    console.log('Database demo_db created successfully')
    //To close the connection
    db.close()
  }
)
