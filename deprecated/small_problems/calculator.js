/**
 * 
 * ask user for first number 
 * ask user for second number 
 * ask user for the operation
 * do said operation to the first and second number
 * output result to the console/page
 * 
 * Assignment: Calculator Bonus Features
 * 
 * 1. Asking the user for another calculation
 * 
 * 
 */


const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';

function messages(message, lang='en') {
  return MESSAGES[lang][message];
}

function prompt(key, result) {
  let message = messages(key, LANGUAGE);
  if (result) {
    console.log(`=> ${message} ${result}`);
  } else {
    console.log(`=> ${message}`);
  }
}

prompt('welcome');

// check for whitespaces and valid numbers
function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

while (true) {

  prompt('firstNumberMsg');
  let firstNumber = readline.question();
  
  // keep asking user for a valid number until one is provided
  while(invalidNumber(firstNumber)) {
    prompt('invalidNumber')
    firstNumber = readline.question();
  }
  
  prompt('secondNumberMsg');
  let secondNumber = readline.question();
  
  // keep asking user for a valid number until one is provided
  while(invalidNumber(secondNumber)) {
    prompt('invalidNumber')
    secondNumber = readline.question();
  }
  
  prompt('operation');
  let operation = readline.question();
  
  // check for a proper operator and keep asking until one is provided
  while(!['1', '2', '3', '4'].includes(operation)) {
    prompt('invalidOperation')
    operation = readline.question();
  }
  
  let output;
  
  switch (operation) {
    case '1': 
      output = Number(firstNumber) + Number(secondNumber);
      break;
    case '2': 
      output = Number(firstNumber) - Number(secondNumber);
      break;
    case '3': 
      output = Number(firstNumber) * Number(secondNumber);
      break;
    case '4': 
      output = Number(firstNumber) / Number(secondNumber);
      break;
  }

  prompt('result', output);

  prompt('anotherOne');
  let anotherCalculation = readline.question();

  if (anotherCalculation.toLowerCase() !== 'yes') break;
}