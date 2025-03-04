const palindromes = function (str) {
  let test = str
    .toUpperCase()
    .split("")
    .filter((char) => {
      return /[a-zA-Z0-9]/.test(char);
    })
    .join("");
  //strip punctuation from str and reverse it
  let reverse = str
    .toUpperCase()
    .split("")
    .filter((char) => {
      return /[a-zA-Z0-9]/.test(char);
    })
    .reverse()
    .join("");

  let result = test.localeCompare(reverse);
  return result == 0 ? true : false;
};

// palindromes("Racecard!");
// // // Do not edit below this line
module.exports = palindromes;
