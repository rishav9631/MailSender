const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST, // SMTP server (e.g., smtp.gmail.com)
            port: 587, // Default port for TLS
            secure: false, // Use STARTTLS
            auth: {
                user: process.env.MAIL_USER, // Your email
                pass: process.env.MAIL_PASS, // Your app password
            },
        });

        let info = await transporter.sendMail({
            from: process.env.MAIL_USER, // Sender email
            to: email, // Recipient email
            subject: title, // Subject of the email
            html: body, // HTML content of the email
        });

        console.log("Email sent successfully:", info.messageId);
        return info;
    } catch (error) {
        console.error("Error sending email:", error.message);
        throw error; // Rethrow error to allow further handling
    }
};

module.exports = mailSender;
