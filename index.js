require('dotenv').config()
const   express = require('express')
        mongoose = require('mongoose')
        app = express()
        path = require('path')
        bodyParser = require('body-parser')
        cors = require('cors')
        userRouter = require('./routers/user')
        PORT = process.env.PORT || 5000

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