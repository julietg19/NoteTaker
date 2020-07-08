// access npm express

var express = require("express");

// create express server

var app = express();

//require htmlRoutes

// var htmlRoutes = require("./routes/htmlroutes");

// set port

var PORT = process.env.PORT || 3000;

// data parsing/middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.use("/", htmlRoutes);

var path = require("path");
// const { Router, response } = require("express");

// var router = require("express").Router();

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// module.exports = router;

// apiroutes

let dataBot = require("./db/db.json");
console.log(dataBot);

app.get("/api/notes", function (req, res) {
  res.json(dataBot);
});

//starts server

app.listen(PORT, function () {
  console.log("App listening to PORT: " + PORT);
});
