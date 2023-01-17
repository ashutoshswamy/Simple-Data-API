const axios = require("axios");

const url = "https://simple-data-api.devashu397.repl.co/women/profile";

axios
  .get(url)
  .then((res) => {
    console.log(res.data.firstName);
    console.log(res.data.lastName);
    console.log(res.data.email);
  })
  .catch((err) => {
    console.log(err);
  });
