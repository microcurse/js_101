// ask user for first number
// ask user for second number
// ask user for the operation
// do said operation to the first and second number
// output result to the console/page

const readline = require('readline-sync');

console.log('Welcome to the Calculator!');

console.log('What is the first number?');
let firstNumber = Number(readline.question());

console.log('What is the second number?');
let secondNumber = Number(readline.question());

console.log('What operation would you like to perform? \n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

let output;
if  (operation === '1') {
  output = firstNumber + secondNumber;
} else if (operation === '2') {
  output = firstNumber - secondNumber;
} else if (operation === '3') {
  output = firstNumber * secondNumber;
} else if (operation === '4') {
  output = firstNumber / secondNumber;
}


console.log(`The result is ${output}`);