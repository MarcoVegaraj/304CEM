const axios = require("axios");
const express = require("express");
const app = express();
const Record = require("./mongo");

const querystr = `https://catfact.ninja/fact`;
var catFact;

const querystr1 = `https://api.genderize.io?name=shahriman`;
var humanGender;
var saveMessage;

axios.get(querystr).then((response) => {
  catFact = response.data.fact;

  console.log(response.data.fact);

  axios.get(querystr1).then((response) => {
    humanGender = response.data.gender;

    console.log(response.data.gender);

    fact = new Record({
      catFact: catFact,
      humanGender: humanGender,
    });

    fact
      .save()
      .then((result) => {
        saveMessage = "Success" + result;
      })

      .catch((error) => {
        saveMessage = "Got Error Sohai" + error;
      });
  });
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res) => {
  res.send(fact);
  res.send(gender);
});

app.listen(4000);
