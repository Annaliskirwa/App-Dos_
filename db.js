const mongodb = require ('mongodb')

const connectionString = 'mongodb+srv://todoAppUser:kirwa9431@cluster0.sftiy.mongodb.net/ComplexApp?retryWrites=true&w=majority'

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
module.exports = client.db()
const app = require('./app')
app.listen(3000)
}) 