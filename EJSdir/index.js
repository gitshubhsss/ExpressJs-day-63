const express = require("express");
const app = express();
const port = 8080;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

const path = require("path");
app.set("views", path.join(__dirname,"/views"));

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
  const diceNum=Math.floor(Math.random()*6)+1;
  res.render("rollDice.ejs",{diceNum});
});

app.get("/", (req, res) => {
    res.send("you are on");
  });
