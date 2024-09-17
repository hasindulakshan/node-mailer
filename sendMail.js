const nodemailer = require('nodemailer');
require('dotenv').config();
const path = require('path');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: process.env.USER, // generated ethereal user
        pass: process.env.APP_PASSWORD, // generated ethereal password
    },
});

const mailOptions = {
    from: {
        name: "Hasindu Lakshan",
        address: process.env.USER
    }, // sender address
    to: ["nagollahl@gmail.com"], // list of receivers
    subject: "send email using nodemailer", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
    attachments: [
        {
            filename: 'Custom Activity Schedule 2nd yr 2nd Sem Only.pdf',
            path: path.join(__dirname, 'DBMS.pdf'),
            contentType: 'application/pdf'
        },
        {
            filename: '1500x500.jpg',
            path: path.join(__dirname, 'favicon.png'),
            contentType: 'image/png'
        },
    ]
}

const sendMail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.log(error);
    }
}

sendMail(transporter, mailOptions);