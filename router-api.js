const apiRouter = require('express').Router()
const userController = require('./Controllers/userController')
const postController = require('./Controllers/postController')
const followController = require('./Controllers/followController')

apiRouter.post('/login', userController.apiLogin)
apiRouter.post('/create-post', userController.apiMustBeLoggedIn, postController.apiCreate)

module.exports = apiRouter