/**
 *  get user input for an integer greater than 0
 *    - while input is not greater than 0, ask again 
 *  ask user it they want sum or product of all numbers between 1 and the integer, inclusive
 *    - while operator is not sum or multiple ask again
 *  create a for loop with a counter that starts iterating at 1
 *  increment loop counter by 1 for each time it loops
 *  keep loop going until counter equals the integer provided
 *    set result
 *    - if sum
 *        - result = counter + (counter + 1)
 *      else if product
 *        set result
 *        - result = counter * (counter + 1) 
 *  return result
 *  print sum/product of integers between 1 and userInt
 * 
 */

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function computeSum(num) {
  let result = 0;
  for(let counter = 1; counter <= num; counter += 1) {
    result += counter;
  }
  return result;
}

function computeProduct(num) {
  let result = 1;
  for(let counter = 1; counter <= num; counter += 1) {
    result *= counter;
  }
  return result;
}

// check for whitespaces, valid numbers, and check if num is an integer greater than 0;
function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num)) || Number(num) <= 0;
}

prompt('Please enter an integer greater than 0: ');
let num = readline.question();

while (invalidNumber(num)) {
  prompt("That's not an integer greater than 0.. Please enter an integer greater than 0: ");
  num = readline.question();
}

prompt('Enter "s" to compute the sum, or "p" to compute the product.');
let operator = readline.question();

if (operator === 's') {
  let sum = computeSum(num);
  prompt(`The sum of the integers between 1 and ${num} is ${sum}`);
} else if (operator === 'p') {
  let product = computeProduct(num);
  prompt(`The product of the integers between 1 and ${num} is ${product}`);
}
