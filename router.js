const express = require ('express')
const router = express.Router()
const userController = require('./Controllers/userController')
const postController = require('./Controllers/postController')

//user realted routes
router.get('/', userController.home)
router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/logout', userController.logout)

//post related routes
router.get('/create-post', userController.mustBeLoggedIn, postController.viewCreateScreen)

module.exports = router 