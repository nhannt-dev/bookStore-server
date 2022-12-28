'use strict'

const mongoose = require('mongoose')
const address = new mongoose.Schema({
    city: String,
    code: String,
    district: [
        {
            name: String,
            code: String,
            ward: [
                {
                    name: String,
                    code: String
                }
            ]
        }
    ]
})

module.exports = mongoose.model('address', address)