const fibonacci = function (num) {
  let index = Number(num);
  if (index == 0) {
    return 0;
  } else if (index < 0) {
    return "OOPS";
  }
  let fibArr = [];
  for (let i = 0; i < index; i++) {
    if (i == 0 || i == 1) {
      fibArr[i] = 1;
    } else {
      fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
    }
  }
  return fibArr[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
