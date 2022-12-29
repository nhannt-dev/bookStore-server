'use strict'
const router = require('express').Router()
const { register } = require('../controllers/user')
const auth = require('../utils/auth')

router.post('/user/register', register)


module.exports = router