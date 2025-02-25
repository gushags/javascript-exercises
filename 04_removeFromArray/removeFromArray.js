const removeFromArray = function (arrTest, ...args) {
  // find num in arr

  for (let arg of args) {
    for (let i = 0; i < arrTest.length; i++) {
      if (arrTest[i] == arg) {
        arrTest.splice(i, 1);
      }
    }

    // Feels like this should be recursion, but not working
    // if num is in array, run the for loop
    // then check if num is in the new array
  }
  return arrTest;
};

// Do not edit below this line
module.exports = removeFromArray;
