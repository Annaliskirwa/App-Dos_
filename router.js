const express = require ('express')
const router = express.Router()
const userController = require('./Controllers/userController')

router.get('/', userController.home)
router.post('/register', userController.register)

module.exports = router