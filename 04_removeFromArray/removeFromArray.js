const removeFromArray = function (arrTest, ...args) {
  for (let arg of args) {
    for (let i = 0; i < arrTest.length; i++) {
      // Must be exact type
      if (arrTest[i] === arg) {
        arrTest.splice(i, 1); // Splice function erases arg at index
        removeFromArray(arrTest, arg); // Loop to see if there are duplicates
      }
    }
  }
  return arrTest;
};

// Do not edit below this line
module.exports = removeFromArray;
