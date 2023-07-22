// const nodemailer = require("nodemailer");
// const dotenv = require("dotenv");

// dotenv.config();

// const { UKR_NET_EMAIL, UKR_NET_KEY } = process.env;

// const nodemailerConfig = {
//   host: "smtp.ukr.net",
//   port: 465,
//   secure: true,
//   auth: {
//     user: UKR_NET_EMAIL,
//     pass: UKR_NET_KEY,
//   },
// };

// const transport = nodemailer.createTransport(nodemailerConfig);

// const email = {
//   from: UKR_NET_EMAIL,
//   to: "weholek566@semonir.com",
//   subject: "Varify email",
//   html: "<p>Varify email</p>",
// };

// transport
//   .sendMail(email)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.log(error.message));
