const readline = require('../node_modules/readline-sync');

console.log('Enter the first number:');
let num1 = Number(readline.question());
console.log('Enter the second number:');
let num2 = Number(readline.question());

let sum = num1 + num2;
let subtract = num1 - num2;
let multiply = num1 * num2;
let quotient = Math.floor(num1 / num2);
let remainder = num1 % num2;
let square = Math.pow(num1, num2);


console.log(`${num1} + ${num2} = ${sum}`);
console.log(`${num1} - ${num2} = ${subtract}`);
console.log(`${num1} * ${num2} = ${multiply}`);
console.log(`${num1} / ${num2} = ${quotient}`);
console.log(`${num1} % ${num2} = ${remainder}`);
console.log(`${num1} ** ${num2} = ${square}`);