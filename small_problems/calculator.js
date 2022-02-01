// ask user for first number
// ask user for second number
// ask user for the operation
// do said operation to the first and second number
// output result to the console/page

const readline = require('readline-sync');

// make the program more readable
function prompt(msg) {
  console.log(`=> ${msg}`)
}

// check for whitespaces and valid numbers
function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt('Welcome to the Calculator!');

prompt('What is the first number?');
let firstNumber = readline.question();

// keep asking user for a valid number until one is provided
while(invalidNumber(firstNumber)) {
  prompt("Hmm... That doesn't look like a valid number.")
  firstNumber = readline.question();
}

prompt('What is the second number?');
let secondNumber = readline.question();

// keep asking user for a valid number until one is provided
while(invalidNumber(secondNumber)) {
  prompt("Hmm... That doesn't look like a valid number.")
  secondNumber = readline.question();
}

prompt('What operation would you like to perform? \n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

// check for a proper operator and keep asking until one is provided
while(!['1', '2', '3', '4'].includes(operation)) {
  prompt("You must choose 1.. 2.. 3.. 4..")
  operation = readline.question();
}

let output;

switch (operation) {
  case '1': 
    output = firstNumber + secondNumber;
    break;
  case '2': 
    output = firstNumber - secondNumber;
    break;
  case '3': 
    output = firstNumber * secondNumber;
    break;
  case '4': 
    output = firstNumber / secondNumber;
    break;
}

prompt(`The result is ${output}`);