// access npm express

var express = require("express");

// create express server

var app = express();

// set port

var PORT = process.env.PORT || 8080;

// data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//starts server

app.listen(PORT, function () {
  console.log("App listening to PORT: " + PORT);
});
