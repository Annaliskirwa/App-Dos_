const mongodb = require ('mongodb')

const connectionString = ''

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){

}) 