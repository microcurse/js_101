/**
 * Rock Paper Scissors
 * 
 * Game logic
 * ask the user for their move
 * the computer will choose their move
 * display who won/the result
 * 
 * 
 * RPS Bonus Features
 * 1. Lizard Spck
 * 2. Shortened Input
 * 3. Best of 5
 * 4. ESLint Complaints
 * 5. Ask for code review
 * 
 */

const readline = require('readline-sync');
// const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock']
const VALID_CHOICES = {
  r: 'rock', 
  p: 'paper', 
  s: 'scissors', 
  l: 'lizard', 
  v: 'spock'
}
const CHOICE_KEYS = Object.keys(VALID_CHOICES);
const CHOICE_VALUES = Object.values(VALID_CHOICES);

function prompt(msg) {
  console.log(`=> ${msg}`);
}
/**
 * possible player choices
 * rock
 * scissors
 * paper
 * lizard
 * spock
 * 
 * possible computer choices
 * 
 * scissors || lizard
 * lizard || paper
 * rock || spock
 * paper || spock
 * scissors || rock
 * 
 */
function displayWinner(choice, computerChoice) {
  prompt(`You chose ${VALID_CHOICES[choice]}. Computer chose ${computerChoice}`);
  
  if (((choice === 'rock' || choice === 'r') && (computerChoice === 'scissors' || computerChoice === 'lizard')) || 
      ((choice === 'scissors' || choice === 's') && (computerChoice === 'lizard' || computerChoice === 'paper')) || 
      ((choice === 'paper' || choice === 'p') && (computerChoice === 'rock' || computerChoice === 'spock')) || 
      ((choice === 'lizard' || choice === 'l') && (computerChoice === 'paper' || computerChoice === 'spock')) ||
      ((choice === 'spock' || choice === 'v') && (computerChoice === 'scissors' || computerChoice === 'rock'))) {
    prompt(`You win!`);
  } else if (((choice === 'paper' || choice === 'p') && (computerChoice === 'scissors' || computerChoice === 'lizard')) || 
      ((choice === 'rock' || choice === 'r') && (computerChoice === 'paper' || computerChoice === 'spock')) || 
      ((choice === 'scissors' || choice === 's') && (computerChoice === 'rock' || computerChoice === 'spock')) || 
      ((choice === 'spock' || choice === 'v') && (computerChoice === 'lizard' || computerChoice === 'paper')) ||
      ((choice === 'lizard' || choice === 'l') && (computerChoice === 'scissors' || computerChoice === 'rock'))) {
    prompt('Computer won!');
  } else {
    prompt("It's a tie!");
  }

}

while (true) {
  prompt(`Choose one: ${CHOICE_VALUES.join(', ')} or ${CHOICE_KEYS.join(', ')} respectively.`);
  let choice = readline.question();
  
  while(!CHOICE_VALUES.includes(choice) && !CHOICE_KEYS.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * CHOICE_VALUES.length);
  let computerChoice = CHOICE_VALUES[randomIndex];
  
  displayWinner(choice, computerChoice);

  prompt("Would you like to play again? (y/n)");
  let answer = readline.question().toLocaleLowerCase();
  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLocaleLowerCase();
  }

  if (answer[0] !== 'y') break;
}