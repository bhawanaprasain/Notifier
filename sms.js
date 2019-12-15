require("dotenv").config();
const accountSid = process.env.accountSid;
const auth = process.env.auth;
const client = require("twilio")(accountSid, auth);

client.messages
  .create({
    body:
      "Hello , I am Bhawana . I like testing packages and libraries of node js",
    from: process.env.from,
    to: process.env.to
  })
  .then(message => console.log(message))
  .catch(err => {
    console.log(err);
  });
