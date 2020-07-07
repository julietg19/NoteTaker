// access npm express

var express = require("express");

// create express server

var app = express();

//require htmlRoutes

var htmlRoutes = require("./routes/htmlroutes");

// set port

var PORT = process.env.PORT || 8080;

// data parsing/middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", htmlRoutes);

//starts server

app.listen(PORT, function () {
  console.log("App listening to PORT: " + PORT);
});
