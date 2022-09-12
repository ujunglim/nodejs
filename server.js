const fs = require("fs");
const express = require("express");
const hbs = require("express-handlebars");
const server = express();
const readline = require("readline");
const words = require("./db/word.json");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("what's your name?", (answer) => {
  console.log(`Hello ${answer}`);
  rl.close();
});

fs.writeFileSync("./hello.txt", "hello yu");
fs.appendFileSync("./hello.txt", "\nWelcome!");
const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });
const list = fs.readdirSync(".");

// template
server.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);

server.set("view engine", "hbs");

// get css
server.use(express.static(__dirname + "/public"));
server.use((req, res, next) => {
  next(); // 이게 있어야 다음으로 넘어감
});

server.get("/", (req, res) => {
  res.render("index", {
    words,
  });
});

server.get("/features", (req, res) => {
  res.render("features", {
    features: true,
  });
});

server.get("/contact", (req, res) => {
  res.render("contact", {
    contact: true,
    list: ["yujung", "stephen", "ken", "mark"],
  });
});

// 404
server.use((req, res) => {
  res.sendfile(__dirname + "/404.html");
});

server.listen(3000, (err) => {
  if (err) throw err;
  console.log("server is listening 3000");
});
