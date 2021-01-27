let calc = {
  sum: function (a, b) {
    return a + b;
  },
  min: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    if (b === 0) return console.log("it can't be calculate");
    return a / b;
  },
};

module.exports = calc;
