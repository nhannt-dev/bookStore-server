const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRouter = require('./routers/user')
require('dotenv').config()
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DB_URL).then(() => {
    console.log('Ket noi DB thanh cong')
}).catch((e) => {
    console.log(e)
})

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}))
app.use(cors())

app.get('/', (req, res) => {
    res.send('welcome to fashtion_book')
})

app.use('/api/v2', userRouter)

app.listen(PORT, () => console.log(`Chay http://localhost:${PORT} thanh cong!`))