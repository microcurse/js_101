/**
 * Rock Paper Scissors
 * 
 * Game logic
 * ask the user for their move
 * the computer will choose their move
 * display who won/the result
 * 
 */

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
let choice = readline.question();

while(!VALID_CHOICES.includes(choice)) {
  prompt("That's not a valid choice.");
  choice = readline.question();
}

let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
let computerChoice = VALID_CHOICES[randomIndex];

prompt(`You chose ${choice}. Computer chose ${computerChoice}`);