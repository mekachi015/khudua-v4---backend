const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/contact us.html")))

app.post("/submitEnquiry" , (req, res) => {
    const formsData = req.body;

    const transporter = nodemailer.createTransport ({
        service: 'gmail', 
        auth: {
            user: 'katlegomakoti@gmail.com',
            pass: 'TomCruise@99'
        }
    });

    const mailOptions = {
        from: 'katlegomakoti@gmail.com',
        to: 'katlegomakoti@gmail.com',
        subject: 'New Enquiry',

        text: `
            Full Name: ${formsData.fullname}
            Cellphone: ${formsData.cellphone}
            Email : ${formsData.email}
            Question : ${formsData.question}
        `
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error){
                console.log(error);
                res.status(500).send("Error send enquiry.");
            } else {
                console.log('Email sent: ' + info.response);
                res.sendStatus(200);
            }
        });
});

app.listen(port, () =>{
    console.log(`Sever is lisenting at http://localhost:${port}`);
});