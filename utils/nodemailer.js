const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD
    }
})

exports.sendEmail = async (email, token) => {
    let mailOptions = {
        from: `${process.env.NODEMAILER_USER}`,
        to: email,
        subject: 'Account Verification Token',
        text: 'Welcome to EShopper',
        html: `
            <b>VERIFY YOUR ACCOUNT</b><br />
            <span>Please verify your account by clicking the link</span><br />
            <span>http://localhost:3000/confirm/${token}</span>
        `
    }
    try {
        let send = await transporter.sendMail(mailOptions)
    } catch (error) {
        console.log('sendEmail dang bi loi vui long kiem tra lai ham nay', error)
        return false
    }
    return true
}

exports.sendEmailForgotPassword = async (email, token) => {
    let mailOptions = {
        from: `${process.env.NODEMAILER_USER}`,
        to: email,
        subject: 'Forgot password Verification Token',
        html: `
            <b>FORGOT PASSWORD</b><br />
            <span>Please enter OTP below</span><br />
            <span>${token}</span>
        `
    }
    try {
        let send = await transporter.sendMail(mailOptions)
    } catch (error) {
        console.log('sendEmailForgotPassword dang bi loi vui long kiem tra lai ham nay', error)
        return false
    }
    return true
}

exports.sendMailConfirmPayment = async (email, token) => {
    let mailOptions = {
        from: `${process.env.NODEMAILER_USER}`,
        to: email,
        subject: 'Payment Verification Token',
        text: `Dear ${email}!`,
        html: `
            <b>VERIFY YOUR ACCOUNT</b><br />
            <span>Please verify your account by clicking the link</span><br />
            <span>http://localhost:3000/confirm/${token}</span>
        `
    }
    try {
        let send = await transporter.sendMail(mailOptions)
    } catch (error) {
        console.log('sendMailConfirmPayment dang bi loi vui long kiem tra lai ham nay', error)
        return false
    }
    return true
}