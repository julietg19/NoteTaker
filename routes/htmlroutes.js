//make html route
// require path and router

var path = require("path");
const { Router, response } = require("express");

var router = require("express").Router();

router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
