'use strict'

const mongoose = require('mongoose')
const book = new mongoose.Schema({
    id_category: {
        type: String,
        required: [true, "id_category khong duoc de trong!"],
        index: true
    },
    name: {
        type: String,
        required: [true, "name khong duoc de trong!"],
        index: true
    },
    price: {
        type: Number,
        required: [true, "price khong duoc de trong!"]
    },
    release_date: {
        type: Date,
        $dateToString: { format: "%Y-%m-%d", date: "$date" },
        default: new Date()
    },
    img: {
        type: String,
        required: [true, "img khong duoc de trong!"],
    },
    describe: {
        type: String,
        default: ""
    },
    id_nsx: {
        type: String,
        required: [true, "id_nsx khong duoc de trong!"],
    },
    id_author: {
        type: String,
        required: [true, "id_author khong duoc de trong!"],
    },
    view_counts: {
        type:Number,
        default: 0, 
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} khong phai la so nguyen!'
        }
    },
    sales: {
        type: Number,
        default: 0,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} khong phai la so nguyen!'
        }
    }
})

module.exports = mongoose.model('book', book)