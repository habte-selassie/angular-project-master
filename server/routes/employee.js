const express = require('express')
const userController = require('../controllers/employee')
//const User = require('./../model/user')
const router = express.Router()


router.post('/api/v1/user',userController.createUser)
router.get('/api/v1/user/:id',userController.getUser)
router.get('/api/v1/users',userController.getAllUser)
router.put('/api/v1/user/:id',userController.updateUser)
router.delete('/api/v1/user/:id',userController.deleteUser)


module.exports = router