const apiRouter = require('express').Router()
const userController = require('./Controllers/userController')
const postController = require('./Controllers/postController')
const followController = require('./Controllers/followController')
const cors = require ('cors')

apiRouter.use(cors())

apiRouter.post('/login', userController.apiLogin)
apiRouter.post('/create-post', userController.apiMustBeLoggedIn, postController.apiCreate)
apiRouter.delete('/post/:id', userController.apiMustBeLoggedIn, postController.apiDelete)
apiRouter.get('/postsByAuthor/:username',userController.getPostsByUsername)

module.exports = apiRouter