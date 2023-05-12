const express = require('express')
const teacherController = require('../controllers/candidate')
const router = express.Router()


router.post('/api/v1/teacher',teacherController.createTeacher)
router.get('/api/v1/teacher/:id',teacherController.getTeacher)
router.get('/api/v1/teachers',teacherController.getAllTeacher)
router.put('/api/v1/teacher/:id',teacherController.updateTeacher)
router.delete('/api/v1/teacher/:id',teacherController.deleteTeacher)


module.exports = router