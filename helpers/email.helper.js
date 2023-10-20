const APP = require("../config/app.json");
const sgMail = require("@sendgrid/mail");
const nodemailer = require('nodemailer');

const sendgridAPIKey = APP.development.SENDGRID_API_KEY;
sgMail.setApiKey(sendgridAPIKey);

const sendEmailToUser = async (toEmail, subject, emailTemplate) => {
    const smtpRes = sgMail.send({
        to: toEmail,
        from: APP.development.MAIL_USERNAME,
        subject: subject,
        html: emailTemplate
    });

    return smtpRes;
};

const sendMail = async (to, subject, emailTemplate) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: APP.development.MAIL_USERNAME,
            pass: APP.development.MAIL_PASSWORD
        }
    });

    const smtpRes = await transporter.sendMail({
        from: APP.development.MAIL_FROM,
        to: to,
        subject: subject,
        html: emailTemplate
    });

    return smtpRes;
};

module.exports = {
    sendEmailToUser,
    sendMail
};