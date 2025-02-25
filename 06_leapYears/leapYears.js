const leapYears = function (year) {
  if (!(year % 4)) {
    if (!(year % 100) && !(year % 400)) {
      return true;
    } else if (!(year % 100)) {
      return false;
    }
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
