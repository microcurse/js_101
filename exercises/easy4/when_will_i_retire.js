/**
 * PEDAC
 * 
 * INPUT
 * Ask for user's age (number)
 * Ask what age for retirement (number)
 * 
 * OUTPUT
 * Console Log the current year and what year they will retire.
 * Console log how many more years of work to go.
 * 
 * ALGORITHM
 * Use readline-sync
 * Ask for and store user's age in a variable
 * Ask for and store user's retirement age in a variable
 * Use Date() and .getFullYear() to get this curernt year
 * Console log current year and add the result of subtracting the user's retirement age with current age
 * Console log how many years of work they have to go
 */

const readline = require('../node_modules/readline-sync');
let today = new Date();
let currentYear  = today.getFullYear();

console.log('How old are you?');
const usersAge = readline.question();

console.log('At what age would you like to retire?');
const retirementAge = readline.question();

console.log(`It's ${currentYear}. You will retire in ${(retirementAge - usersAge) + currentYear}.`);
console.log(`You only have ${retirementAge - usersAge} years of work to go!`);
