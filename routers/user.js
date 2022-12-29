'use strict'
const router = require('express').Router()
const { register, logout, login } = require('../controllers/user')
const auth = require('../utils/auth')

router.post('/user/register', register)
router.post('/user/login', login)
router.get('/user/logout', logout)


module.exports = router