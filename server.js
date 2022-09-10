const http = require("http");
const fs = require("fs");
const express = require("express");
const hbs = require("express-handlebars");
const server = express();
const readline = require("readline");

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

server.use(express.static(__dirname + "/public"));
server.use((req, res, next) => {
  next(); // 이게 있어야 다음으로 넘어감
});

// http는 url 하나하나마다 써야될게 많은데 express는 간단
server.get("/", (req, res) => {
  //   res.status(200).sendFile(__dirname + "/index.html");
  res.render("index", {
    name: "Yujung",
    home: true,
  }); // index.hbs
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

// http server
// const server = http.createServer((req, res) => {
//     if(req.url === '/') {
//         // 파일을 하나하나 불러와야함
//         fs.readFile('./index.html', null, (err, data) => {
//             // 서버에서 어떤파일을 보내는지 알려줘야함
//             res.writeHead(200, {
//                'Content-Type': 'text/html'
//             })
//             res.write(data);
//             res.end(); // res 끝났을떄
//         })
//     }
// });

server.listen(3000, (err) => {
  if (err) throw err;
  console.log("server is listening 3000");
});
