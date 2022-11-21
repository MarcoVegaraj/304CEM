const axios = require("axios");
const express = require("express");
const app = express();
const Record = require("./mongo");

const querystr = `https://catfact.ninja/fact`;
var catFact;

const querystr1 = `https://api.genderize.io?name=Marcus`;
var humanGender;
var saveMessage;

//To add the data
//http://localhost:5000/addData?title=catFact
app.get('/addData', (req, res) => {
  const title = req.query.title;
});
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

//To display all the Data
//http://localhost:5000/getAllData
app.get('/getAllData', (req, res) => {
  Data.find({}).then((response) => {
      res.status(200).json(response);
  })

  .catch((error) => {
      res.status(400).json(error);
  });
});

//To delete the Data
//http://localhost:5000/deleteData?title=title
app.get('/deleteData', (req, res) => {
  //Delete Data based on title
  Data.deleteOne( {title: req.query.title} ).then((response) => {
      res.status(200).json(response);
  })

  .catch((error) => {
      res.status(400).json(error);
  });
});

app.listen(5000, () => {
  console.log('Sever listening to port 5000');
});


