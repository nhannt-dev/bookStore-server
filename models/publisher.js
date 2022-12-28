'use strict'

const mongoose = require('mongoose')
const publisher = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name khong duoc de trong!"],
    }
})

module.exports = mongoose.model('publisher', publisher)