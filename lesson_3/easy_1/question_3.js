// Determine whether the following object of people and their age contains an entry for "Spot"
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10};
console.log(Object.hasOwn(ages, "Spot"));

// Solution: use hasOwn ex. Object.hasOwn(ages, "Spot");