import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { generateKey } from "crypto";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var bandname = "";

app.use(bodyParser.urlencoded({ extended: true }));

function nameGenerator(req, res, next) {
  bandname = req.body["street"] + req.body["pet"];
  next();
}

app.use(nameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  // console.log(req.body.street);
  res.send(`<h1>Your Band name is :</h1></br><h2>${bandname}</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
