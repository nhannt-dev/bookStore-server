'use strict'

const mongoose = require('mongoose')
const bill = new mongoose.Schema({
    id_user: {
        type: String,
        required: [true, "id_user khong duoc de trong!"],
        index: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    products: {
        type: [
            {
                id_category: String,
                name: String,
                price: Number,
                release_date: Date,
                img: String,
                describe: String,
                id_nsx: String,
                id_nsx: String,
                count: Number,
                _id: String
            }
        ],
        required: true,
        minlength: 1
    },
    total: Number,
    address: String,
    phone: String,
    name: String,
    token: String,
    issend: {
        type: String,
        default: '99'
    }
})

module.exports = mongoose.model('bill', bill)