const nodemailer = require('nodemailer');
const { google } = require('googleapis');
// require('dotenv').config();

// These id's and secrets should come from .env file.
const CLIENT_ID = "353282778800-53p6ikq3qfe8pfpv6pqq35hrq2ucd5n2.apps.googleusercontent.com";
const CLEINT_SECRET = "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";
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = "1//04bpR_psoJxG5CgYIARAAGAQSNwF-L9IreE4OP6pH6MsY3qE2_QPIeCr0UfsNsnkRuZvC8O6dMzly_E0hbdrVByzdKTXOPH0LLJU";
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendMail = async (email, { gas_type, payment_method, amount }) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'mtharun338@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'PLACEMENT MANAGEMENT <mtharun338@gmail.com>',
      to: email,
      subject: 'YOUR PLACEMENT MANAGEMENT PASSWORD',
      text: 'PASSWORD IS SENT',
      html: 
      `<div style="
          background-color: #ced4da;
          padding: 20px;
          border-radius: 20px;
          text-size: 20px;
          font-size: 13px;
          ">
          <h2>Thank you for CONTACTING  us</h2>
          <hr>
          <br>
          <p><b>EMAIL:</b> ${gas_type}</p>
          <p><b>PASSWORD</b> ${payment_method}</p>
         
          <br>
          <hr>
          <h3>LOGIN WITH THIS PASSWORD</h3>
          <p>We will contact you soon</p>
      </div>`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}
// sendMail("vinayakumaru605@gmail.com",{gas_type : "india gas",payment_method : "upi",amount : 100}).then(() => {
//   console.log("done");
// })
module.exports =sendMail;