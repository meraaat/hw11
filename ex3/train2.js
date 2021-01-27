var fs = require("fs");

fs.openSync("./newFile", "w");
fs.closeSync(fs.openSync("./newFile", "w"));

fs.exists("./newFile", function (exists) {
  if (exists) {
    console.log("this file was exist!!!!!");
  } else {
    console.log("this file doesn't exist");
  }
});
