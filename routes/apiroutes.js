const fs = require("fs");

let dataBot = require("../db/db.json");
console.log(dataBot);

let id = dataBot.length + 1;

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(dataBot);
  });

  app.post("/api/notes", function (req, res) {
    req.body.id = id++;
    dataBot.push(req.body);
    fs.writeFile("./db/db.json", JSON.stringify(dataBot), function (err) {
      if (err) throw err;
      console.log("data stored");
    });
    res.json(dataBot);
  });

  app.delete("/api/notes/:id", function (req, res) {
    let selectDataId = req.params.id;
    for (let i = 0; i < dataBot.length; i++) {
      if (dataBot[i].id === parseInt(selectDataId)) {
        dataBot.splice(i, 1);
      }
    }
    fs.writeFile("./db/db.json", JSON.stringify(dataBot), function (err) {
      if (err) throw err;
      console.log("data stored");
    });
    res.json(dataBot);
  });
};
