/**
 * PEDAC
 * 
 * INPUT
 * Ask user for six numbers
 * 
 * OUTPUT
 * Console log if the 6th(last number) appears amongst the first five numbers
 * 
 * ALGORITHM
 * Use readline-sync to ask the user for inputs(numbers)
 * Create an array and store those numbers
 * push user input into array
 * Create a variable to store the 6th number
 * Use .includes() array method to check if the 6th number appears in array
 * return result
 * 
 */

const readline = require('../node_modules/readline-sync');
let numbers = [];
let findThis = 0;

console.log('Enter the 1st number: ');
numbers.push(readline.question());

console.log('Enter the 2nd number: ');
numbers.push(readline.question());

console.log('Enter the 3rd number: ');
numbers.push(readline.question());

console.log('Enter the 4th number: ');
numbers.push(readline.question());

console.log('Enter the 5th number: ');
numbers.push(readline.question());

// console.log('Enter the last number: ');
// findThis = readline.question();

function findNumber(arr, num) {
  if (arr.includes(num)) {
    return `The number ${findThis} appears in ${numbers}`
  }
  return `The number ${findThis} does not appear in ${numbers}`
}

// console.log(findNumber(numbers, findThis));

/**
 * Further exploration
 * 
 * Check if a number in the array is greater than 25.
 * Use .some() array method to test if at least one element passes the test cases.
 * 
 */

const greaterThan = (element) => {
  return element > 25;
};

console.log(numbers.some(greaterThan));