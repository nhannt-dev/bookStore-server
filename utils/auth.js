'use strict'

const jwt = require('jsonwebtoken')
exports.verify = async (req, res) => {
    if (typeof req.body.token === 'undefined' || typeof req.body.email === 'undefined') {
        res.status(422).json({ msg: "Invalid data" })
        return
    }

    let token = req.body.token
    let email = req.body.email
    try {
        let decoded = await jwt.verify(token, process.env.JWT_VERIFY)
        if (decoded.email === email) {
            res.status(200).json({ msg: 'Success' })
            return
        }
    } catch (error) {
        console.log('ham verify dang bi loi. Vui long kiem tra')
        res.status(404).json({msg: 'unsuccess'});
        return
    }
    res.status(404).json({ msg: 'unsuccess' })
}