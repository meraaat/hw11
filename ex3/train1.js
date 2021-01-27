var fs = require("fs");
fs.open("./newFile", "wx", function (err, fd) {
  if (err) return console.log(err.message);
  console.log("successfully open");
  fs.close(fd, function (err) {
    if (err) return console.log(err.message);
  });
});

fs.exists("./newFile", function (exists) {
  if (exists) {
    console.log("this file was exist!!!!!");
  } else {
    console.log("this file doesn't exist");
  }
});
