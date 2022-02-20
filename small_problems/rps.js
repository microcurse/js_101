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
const VALID_CHOICES = {
  r: 'rock', 
  p: 'paper', 
  s: 'scissors', 
  l: 'lizard', 
  v: 'spock'
}
const WIN_CONDITIONS = {
  rock:     ['scissors', 'lizard'],
  scissors: ['lizard', 'paper'],
  paper:    ['rock', 'spock'],
  lizard:   ['paper', 'spock'],
  spock:    ['scissors', 'rock']
}
const CHOICE_KEYS = Object.keys(VALID_CHOICES);
const CHOICE_VALUES = Object.values(VALID_CHOICES);

let playerScore = 0;
let computerScore = 0;
let keepPlaying = true;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function isShortened(choice) {
  if (choice.length === 1) {
    return VALID_CHOICES[choice];
  }
  return choice;
}

function playerWins(choice, computerChoice) {
  return WIN_CONDITIONS[isShortened(choice)].includes(computerChoice);
}

function displayMatchWinner(choice, computerChoice) {
  prompt(`You chose ${isShortened(choice)}. Computer chose ${computerChoice}`);
  
  if (playerWins(choice, computerChoice)) {
    prompt(`You won the match!`);
    addScore('player');
  } else if (isShortened(choice) === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt('Computer won the match!');
    addScore('computer');
  }
}

function addScore(matchWinner) {
  if (matchWinner === 'player') {
    playerScore += 1;
  } else if (matchWinner === 'computer') {
    computerScore += 1;
  }
}

function displayScore() {
  prompt(`Player Score: ${playerScore}\n Computer Score: ${computerScore}`);
}

function chooseGameWinner(playerScore, computerScore) {
  if (playerScore === 3) {
    prompt(`You won the game!`);
    keepPlaying = false;
  } else if (computerScore === 3) {
    prompt(`Computer won the game!`);
    keepPlaying = false;
  }
}

function clearScore() {
  playerScore = 0;
  computerScore = 0;
  console.clear();
}

function askToPlayAgain() {
  prompt("Would you like to play again? (y/n)");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'y') {
    keepPlaying = true;
    clearScore();
    playGame();
  } else {
    prompt(`Thanks for playing! Goodbye!`)
  }
}

function playGame() {
  console.clear();

  while (keepPlaying) {
    prompt(`Choose one: ${CHOICE_VALUES.join(', ')} (${CHOICE_KEYS.join(', ')} respectively.)`);
    let choice = readline.question();
    
    while(!CHOICE_VALUES.includes(choice) && !CHOICE_KEYS.includes(choice)) {
      prompt("That's not a valid choice.");
      choice = readline.question();
    }
  
    let randomIndex = Math.floor(Math.random() * CHOICE_VALUES.length);
    let computerChoice = CHOICE_VALUES[randomIndex];
    
    displayMatchWinner(choice, computerChoice);
    displayScore();
    chooseGameWinner(playerScore, computerScore);
  
    if (!keepPlaying) {
      askToPlayAgain();
    }
  }
}

playGame();