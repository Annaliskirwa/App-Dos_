const express = require ('express')
const router = express.Router()
const userController = require('./Controllers/userController')

router.get('/', userController.home)

module.exports = router