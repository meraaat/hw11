var fs = require("fs");

fs.readFile("./files/from.txt", "utf8", function (err, data) {
  if (err) return console.log(err);
  fs.writeFile("./files/to.txt", data, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
});
