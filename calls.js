const tokens = require("./tokens");
client = tokens();

client.calls
  .create({
    url: process.env.LINKTOTWILIO,
    to: process.env.FROM,
    from: process.env.TO
  })
  .then(call => console.log(call.sid))
  .catch(error => console.log(error));
