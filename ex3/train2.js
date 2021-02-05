var fs = require("fs");

fs.openSync("./newFile", "w");
fs.closeSync(fs.openSync("./newFile", "w"));


const path = './newFile'

try {
  if (fs.existsSync(path)) {
    console.log("this file was exist!!!!!");
  }
} catch(e) {
  console.log("this file doesn't exist");
}

