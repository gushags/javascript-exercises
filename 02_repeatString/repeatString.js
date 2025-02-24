const repeatString = function (string, num) {
  if (num > 0) {
    arr = [string];
    for (let i = 0; i < num - 1; i++) {
      arr.push(string);
    }
    return arr.join("");
  } else if (num < 0) {
    return "ERROR";
  } else {
    return "";
  }
};

// Do not edit below this line
module.exports = repeatString;
