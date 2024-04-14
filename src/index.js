var express = require("express");
var app = express();
const axios = require("axios");
const PORT = 8008;


const addUser = require("./test");

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });


app.get("/", function (req, res) {
  res.send("hello world !");
});

app.get("/test", async function (req, res) {
  try {
    await addUser();
    console.log("Query conclude !");
    res.send("User ajouté avec succès !");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("Une erreur s'est produite lors de l'ajout de l'utilisateur.");
  }
});

app.listen(PORT, () => {
  console.log("Le serveur est lancé sur le port : " + PORT);
});
