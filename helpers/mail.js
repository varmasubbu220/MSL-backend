const nodemailer = require('nodemailer');
require("dotenv").config();
const Mailer = ({ text, from, subject }) => {
    console.log(process.env.User)
    console.log(process.env.Password)
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
     auth: {
        user:'srmedias121@gmail.com',
        pass:'hwtc khra ylmm gcnx',
      },
    });

    const mailOptions = {
      from: from,
      to: process.env.SendTo,
      subject: subject,
      text: text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error:', error);
        reject(false); // Email sending failed
      } else {
        console.log('Email sent:', info.response);
        resolve(true); // Email sent successfully
      }
    });
  });
};

module.exports = Mailer;
