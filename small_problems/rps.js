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

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}. Computer chose ${computerChoice}`);
  
  if ((choice === 'rock' && computerChoice === 'scissors') || 
      (choice === 'scissors' && computerChoice === 'paper') || 
      (choice === 'paper' && computerChoice === 'rock')) {
        prompt(`You win!`);
  } else if ((choice === 'scissors' && computerChoice === 'rock') || 
      (choice === 'paper' && computerChoice === 'scissors') || 
      (choice === 'rock' && computerChoice === 'paper')) {
        prompt('Computer won!');
      } else {
        prompt("It's a tie!");
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();
  
  while(!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = readline.question();
  }
  
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  
  displayWinner(choice, computerChoice);

  prompt("Would you like to play again? (y/n)");
  let answer = readline.question().toLocaleLowerCase();
  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLocaleLowerCase();
  }

  if (answer[0] !== 'y') break;
}

/**
 * Things to consider:
 * 
 * 1. If you move displayWinner above the prompt function it still works. 
 * This is because the functions are initiated and stored before they're used in the while loop.
 * 
 * 2. If it returned the string then I would need to store the result of the function call into
 * a variable and console log that string.
 * 
 * 3. if Math.round() was used then the function would need to be subtracted by 1. This is because
 * Math.round() rounds up, and would give a result of 1-3 instead of the array index 0-2. This 
 * goes for Math.ceil() as well.
 * 
 * 4. To stop the loop without a break statement, we can use answer[0] === 'n' as the while argument
 */