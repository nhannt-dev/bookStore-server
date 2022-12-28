'use strict'
const randomstring = require('randomstring')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const user = require('../models/user')
const otp = require('../utils/otp')
const nodemailer = require('../utils/nodemailer')