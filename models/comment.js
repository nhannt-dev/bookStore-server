'use strict'

const mongoose = require('mongoose')
const comment = new mongoose.Schema({
    id_user: {
        type: String,
        default: 'no_user'
    },
    id_book: {
        type: String,
        required: [true, "id_book khong duoc de trong!"]
    },
    name: {
        type: String,
        required: [true, "name khong duoc de trong!"]
    },
    comment: {
        type: String
    },
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('comment', comment)