const sumAll = function (begin, end) {
  let sum = 0;
  let start;
  let finish;
  if (
    begin < 0 ||
    end < 0 ||
    !Number.isInteger(begin) ||
    !Number.isInteger(end)
  ) {
    return "ERROR";
  }

  if (begin > end) {
    start = end;
    finish = begin;
  } else {
    start = begin;
    finish = end;
  }
  for (let i = start; i <= finish; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line

module.exports = sumAll;
