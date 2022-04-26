"use strict";
const nodemailer = require("nodemailer");

async function main() {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, 
      pass: testAccount.pass, 
    },
  });
  let info = await transporter.sendMail({
    from: '"foo foo" <foo@example.com>', 
    to: "example@tomtom.com", 
    subject: "Hello world", 
    text: "Hello world?", 
    html: "<b>Hello world?</b>", 
  });
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}
main().catch(console.error);