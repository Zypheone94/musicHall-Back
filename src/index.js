var express = require("express");
var app = express();
const PORT = 8008

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(PORT, () => {
    console.log("Le serveur est lancé sur le port : " + PORT)
})