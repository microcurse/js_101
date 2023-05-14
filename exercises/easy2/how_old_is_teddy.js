/**
 * Build a program that randomly generates Teddy's age, and logs it to the console. Have the
 * age be a random number between 20 and 120 (inclusive).
 * 
 * example output
 * Teddy is 69 years old!
 * 
 */

// Set age range
let minAge = 20;
let maxAge = 120;

function generateRandomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(`Teddy is ${generateRandomAge(minAge, maxAge)} years old!`);
