'use strict'

const mongoose = require('mongoose')
const user = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "email khong duoc de trong!"],
        index: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "is invalid"],
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    password: {
        type: String,
        required: [true, "password khong duoc de trong!"]
    },
    address: {
        type: String
    },
    phone_number: {
        type: String
    },
    is_admin: {
        type: Boolean,
        default: false
    },
    is_verify: {
        type: Boolean,
        default: true
    },
    token: {
        type: String
    }
})

module.exports = mongoose.model('user', user)