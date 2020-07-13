// access npm express

const express = require("express");

// create express server

const app = express();

// set port

const PORT = process.env.PORT || 3000;

// data parsing/middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./routes/apiroutes")(app);

require("./routes/htmlroutes")(app);


//starts server

app.listen(PORT, function () {
  console.log("App listening to PORT: " + PORT);
});
