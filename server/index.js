const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.post("/api/checkout", (req, res) => {
    const { name, email, phone, address } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: "sierra.corwin30@ethereal.email",
            pass: "PXKF3vXSckdK8t6Zft",
        },
    });

    const mailOptions = {
        from: "sierra.corwin30@ethereal.email",
        to: email,
        subject: "Order Confirmation",
        html: `<h1>Thank you for your order!</h1>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Address: ${address}</p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send("Internal Server Error");
        } else {
            console.log(`Email sent: ${info.response}`);
            res.status(200).send("Email Sent");
        }
    });
});
