const apiRouter = require('express').Router()

apiRouter.post('/login', function(req, res){
    res.json("Thankyou for trying to lig in from the API")
})

module.exports = apiRouter