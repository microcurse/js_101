let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// let ageValues = Object.values(ages);
// let totalAge = 0;
// ageValues.forEach(age => totalAge += age);

// reduce method solution
let ageValues = Object.values(ages);
ageValues.reduce((agesSum, currAge) => agesSum + currAge, 0);

