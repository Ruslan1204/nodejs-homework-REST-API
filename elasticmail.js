// const ElasticEmail = require('@elasticemail/elasticemail-client');
// const dotenv = require("dotenv");

// dotenv.config();

// const {ELASTICEMAIL_API_KEY} = process.env;
 
// const defaultClient = ElasticEmail.ApiClient.instance;
 
// const {apikey} = defaultClient.authentications;
// apikey.apiKey = ELASTICEMAIL_API_KEY;
 
// const api = new ElasticEmail.EmailsApi()
 
// const email = ElasticEmail.EmailMessageData.constructFromObject({
//   Recipients: [
//     new ElasticEmail.EmailRecipient("weholek566@semonir.com")
//   ],
//   Content: {
//     Body: [
//       ElasticEmail.BodyPart.constructFromObject({
//         ContentType: "HTML",
//         Content: "<p>Varify email</p>"
//       })
//     ],
//     Subject: "Varify email",
//     From: "ryslan12pess@ukr.net"
//   }
// }); 
 
// const callback = function(error, data, response) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('API called successfully.');
//   }
// };
// api.emailsPost(email, callback);
