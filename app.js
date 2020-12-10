const express = require ('express')
const app = express()

app.set('views', 'views')

app.get('/', function(req, res){
    res.send("Welcome to the app")
})

app.listen(3000)