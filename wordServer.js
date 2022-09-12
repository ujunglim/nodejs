const fs = require("fs");

const data = fs.readFileSync("./word.json", { encoding: "utf-8" });
console.log(JSON.parse(data));

const obj = {
  name: "yu",
  age: 10,
};

fs.writeFileSync("test.json", JSON.stringify(obj, null, 2));
