const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let result = arr.reduce((total, current) => total + current, 0);
  return result;
};

const multiply = function (arr) {
  let result = arr.reduce((total, current) => total * current, 1);
  return result;
};

const power = function (a, b) {
  let total = 1;
  for (let i = 0; i < b; i++) {
    total = total * a;
  }
  return total;
};

const factorial = function (a) {
  let total = 1;
  for (let i = 1; i < a + 1; i++) {
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
