'use strict'
const cloudinary =  require('cloudinary').v2
let uploads = {}
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_KEY_SECRET
    
})
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const book = require('../models/book')
const user = require('../models/user')
const category = require('../models/category')
const author = require('../models/author')
const publisher = require('../models/publisher')