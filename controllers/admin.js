'use strict'
const   cloudinary =  require('cloudinary').v2
        bcrypt = require('bcrypt')
        jwt = require('jsonwebtoken')
        fs = require('fs')
        book = require('../models/book')
        user = require('../models/user')
        category = require('../models/category')
        author = require('../models/author')
        publisher = require('../models/publisher')

let uploads = {}
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_KEY_SECRET
    
})