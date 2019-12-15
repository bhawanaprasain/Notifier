const tokens = require("./tokens");
client = tokens();
client.messages
  .create({
    body:
      "Hello , I am Bhawana . I like testing packages and libraries of node js",
    from: process.env.FROM,
    to: process.env.TO
  })
  .then(message => console.log(message))
  .catch(err => {
    console.log(err);
  });
