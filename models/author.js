'use strict'

const mongoose = require('mongoose')
const author = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Ten tac gia khong duoc de trong!"]
    }
})

module.exports = mongoose.model('author', author)