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
 * 1. Lizard Spock
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
const PLAYER_WIN_CONDITIONS = {
  rock:     ['scissors', 'lizard'],
  scissors: ['lizard', 'paper'],
  paper:    ['rock', 'spock'],
  lizard:   ['paper', 'spock'],
  spock:    ['scissors', 'rock']
}
const CHOICE_KEYS = Object.keys(VALID_CHOICES);
const CHOICE_VALUES = Object.values(VALID_CHOICES);
const WINNING_SCORE = 3;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function welcomeAndRules() {
  prompt(`Welcome to Rock, Paper, Scissor, Lizard, Spock!`);
  prompt(`This game is best of 5. So the first one to win 3 matches, wins the game!`);
}

function playersTurn() {
  prompt(`Choose one: ${CHOICE_VALUES.join(', ')} (${CHOICE_KEYS.join(', ')} respectively.)`);
  let playerInput = readline.question().toLowerCase();
  
  while(!CHOICE_VALUES.includes(playerInput) && !CHOICE_KEYS.includes(playerInput)) {
    prompt("That's not a valid choice.");
    playerInput = readline.question().toLowerCase();
  }

  return playerInput;
}

function computersTurn() {
  let randomIndex = Math.floor(Math.random() * CHOICE_VALUES.length);
  return CHOICE_VALUES[randomIndex];
}

function isShortened(choice) {
  if (choice.length === 1) {
    return VALID_CHOICES[choice];
  }
  return choice;
}

function didPlayerWin(playerChoice, computerChoice) {
  return PLAYER_WIN_CONDITIONS[isShortened(playerChoice)].includes(computerChoice);
}

function determineRoundWinner(player, computer) {
  if (didPlayerWin(player.choice, computer.choice)) {
    return 'Player';
  } else if (isShortened(player.choice) === computer.choice) {
    return 'Tie';
  } else {
    return 'Computer'
  }
}

function displayChoices(player, computer) {
  prompt(`You chose ${isShortened(player.choice)}. Computer chose ${computer.choice}`);
}

function displayRoundWinner(roundWinner) {
  if (roundWinner === 'Tie') {
    prompt(`It's a tie!`);
  } else {
    prompt(`${roundWinner} wins the match!`);
  }
}

function updateScore(player, computer, roundWinner) {
  if (roundWinner === 'Player') {
    player.score += 1;
  } else if (roundWinner === 'Computer') {
    computer.score += 1;
  }
}

function displayScore(playerScore, computerScore) {
  prompt(`Player Score: ${playerScore}\n Computer Score: ${computerScore}`);
}

function determineGameWinner(playerScore, computerScore) {
  if (playerScore === WINNING_SCORE) {
    prompt(`You won the game!`);
  } else if (computerScore === WINNING_SCORE) {
    prompt(`Computer won the game!`);
  }
}

function playAgain() {
  prompt("Would you like to play again? (y/n)");

  let validAnswers = ['yes', 'y', 'no', 'n'];
  let answer = readline.question().toLowerCase();

  while (!validAnswers.includes(answer)) {
    prompt("Please enter 'yes'(y) or 'no'(n)");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'y' || answer === 'yes') {
    playGame();
  } else {
    prompt(`Thanks for playing! Goodbye!`);
  }
}

function playGame() {
  const Player = {
    score: 0,
    choice: ''
  }
  const Computer = {
    score: 0,
    choice: ''
  }
  console.clear();
  welcomeAndRules();

  while (Player.score < WINNING_SCORE && Computer.score < WINNING_SCORE) {
    Player.choice = playersTurn();
    Computer.choice = computersTurn();

    let currentRoundWinner = determineRoundWinner(Player, Computer)

    displayChoices(Player, Computer);
    displayRoundWinner(currentRoundWinner);
    updateScore(Player, Computer, currentRoundWinner);
    displayScore(Player.score, Computer.score);
    determineGameWinner(Player.score, Computer.score);
  }

  playAgain();
}

playGame();