const express = require('express');
const UseMail=require('../controllers/sendMail')
const app=express()
const router= express.Router()
// const Register=require('../controllers/registerapi')
router.route('/mail').post(UseMail)

module.exports=router