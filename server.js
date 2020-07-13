// access npm express

const express = require("express");

// create express server

const app = express();

// data parsing/middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./routes/apiroutes")(app);

require("./routes/htmlroutes")(app);


app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

// // set port

// const PORT = process.env.PORT || 3000;

// //starts server

// app.listen(PORT, function () {
//   console.log("App listening to PORT: " + PORT);
// });
