'use strict'

const mongoose = require('mongoose')
const category = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "category khong duoc de trong!"],
    }
})

module.exports = mongoose.model('category', category)