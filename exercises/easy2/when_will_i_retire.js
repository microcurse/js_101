/**
 * Build a program that logs when the user will retire and how many more years the user
 * has to work until retirement.
 * 
 * Example:
 * What is your age? 30
 * At what age would you like to retire? 70
 * 
 * It's 2017. You will retire in 2057.
 * You have only 40 years of work to go!
 * 
 */

const readline = require('../../node_modules/readline-sync');

// Ask the user for an input of their age
let userAgeInput = readline.question('What is your age?: ');

// Ask the user for an input of the age that they want to retire
let userRetirementAgeInput = readline.question('At what age would you like to retire?: ');

// Get the current year
const currentYear = new Date().getFullYear();

// Get year of retirement
let retirementYear = currentYear + (userRetirementAgeInput - userAgeInput);

// Get years to go before retirement
let yearsToGo = retirementYear - currentYear;

// Output how many years of work they have left
console.log(`It's ${currentYear}. You will retire in ${retirementYear}`);
console.log(`You have only ${yearsToGo} years of work to go!`);
