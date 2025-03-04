function getAge(death, birth) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

const findTheOldest = function (people) {
  const person = people.sort(
    (oldest, currentPerson) =>
      getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth) -
      getAge(oldest.yearOfDeath, oldest.yearOfBirth)
  );

  return person[0];
};

// Do not edit below this line
module.exports = findTheOldest;
