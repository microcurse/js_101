/**
 *  accept user input for the bill
 *    - convert bill from string to number
 *  accept user input for tip percentage
 *    - convert tip amount to decimal (ex. 15% is .15)
 *  multiply tip amount by the bill
 *  print tip amount
 *  print total bill + tip 
 * 
 */

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt('What is the bill?');
let bill = Number(readline.question());

prompt('What is the tip percentage?');
let tipPercentage = readline.question();

let tipAmount = (tipPercentage / 100) * bill;
let total = tipAmount + bill;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);