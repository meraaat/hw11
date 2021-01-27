var fs = require("fs");

fs.writeFileSync("./files/to.txt", fs.readFileSync("./files/from.txt", "utf8"));
console.log(fs.readFileSync("./files/to.txt", "utf8"));
