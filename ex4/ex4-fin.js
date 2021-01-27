function readFromFile(path) {
  const fs = require("fs");
  return fs.readFileSync(path, "utf8");
}

let holderName = [];
let holderNumber = [];

let namesString = readFromFile("./names.txt").split("\n");
let numbersString = readFromFile("./numbers.txt").split("\n");
namesString.forEach((el) => {
  let obj = {};
  obj.id = el.split("-")[0];
  obj.name = el.split("-")[1];
  holderName.push(obj);
});

numbersString.forEach((el) => {
  let obj = {};
  obj.id = el.split("-")[0];
  obj.numbers = el.split("-")[1];
  holderNumber.push(obj);
});

let numHolder = [];

holderNumber.forEach(function (item) {
  let existing = numHolder.filter(function (v, i) {
    return v.id == item.id;
  });
  if (existing.length) {
    let existingIndex = numHolder.indexOf(existing[0]);
    numHolder[existingIndex].numbers = numHolder[existingIndex].numbers.concat(
      item.numbers
    );
  } else {
    if (typeof item.numbers == "string") item.numbers = [item.numbers];
    numHolder.push(item);
  }
});

let merge = (holderName, numbers, sameProp) => {
  numbers.forEach((src) => {
    let target = holderName.find((target) => {
      return src[sameProp] === target[sameProp];
    });
    target ? Object.assign(target, src) : holderName.push(src);
  });
  return holderName;
};

merge(holderName, numHolder, "id");
let message = "";
holderName.forEach((element) => {
  if (!element.numbers) {
    message += element.name + " doesn't have any phone number." + "\n";
  } else if (element.numbers.length > 1) {
    message +=
      element.name +
      "'s phone numbers are " +
      [...element.numbers] +
      "." +
      "\n";
  } else if (element.numbers.length === 1) {
    message +=
      element.name + "'s phone numbers is " + [...element.numbers] + "." + "\n";
  }
});

function writeToFile(path, data) {
  const fs = require("fs");
  fs.writeFileSync(path, data.trim());
}

writeToFile("./store.txt", message);
