const readline = require('../node_modules/readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 3;
const CENTER_SQUARE = 5;
const WHO_PLAYS_FIRST = {choose: ' '};
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],  // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9],  // columns
  [1, 5, 9], [3, 5, 7]              // diagonals
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board, score, round) {
  console.clear();
  displayScore(score, round);

  console.log('');
  console.log('            |            |');
  console.log('            |            |');
  console.log(`     ${board['1']}      |     ${board['2']}      |      ${board['3']}`);
  console.log('            |            |');
  console.log('            |            |');
  console.log('------------+------------+------------');
  console.log('            |            |');
  console.log('            |            |');
  console.log(`     ${board['4']}      |     ${board['5']}      |      ${board['6']}`);
  console.log('            |            |');
  console.log('            |            |');
  console.log('------------+------------+------------');
  console.log('            |            |');
  console.log('            |            |');
  console.log(`     ${board['7']}      |     ${board['8']}      |      ${board['9']}`);
  console.log('            |            |');
  console.log('            |            |');
  console.log('');
  
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
}

function initializeBoard() {
  let board = {};
  for (let square = 1; square <= 9; square++) {
    board[String(square)] = ' ';
  }

  return board;
}

function joinOr(array, delimiter = ', ', joinWord = 'or') {
  switch(array.length) {
    case 0:
      return '';
    case 1:
      return `${array[0]}`;
    case 2:
      return array.join(` ${joinWord} `);
    default:
      return array.slice(0, array.length - 1).join(delimiter) + `${delimiter}${joinWord} ${array[array.length - 1]}`;
  }
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))})`);
    square = readline.question().trim();
    
    if (emptySquares(board).includes(square)) break;
    
    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}


function computerChoosesSquare(board) {
  let square;

  // offense
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  // defense 
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  if (!square && board[CENTER_SQUARE] === INITIAL_MARKER) {
    // pick number 5, milord
    board['5'] = COMPUTER_MARKER;
  } else if (!square && board[CENTER_SQUARE] !== INITIAL_MARKER) {
    
    // random placement if there are no offensive or defense moves
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function updateScore(winner, score) {
  return score[winner] += 1;
}

function displayScore(score, round) {
  console.log(`--------------- Round ${round} ---------------`);
  console.log(`  Player score: ${score.Player}   Computer score: ${score.Computer}  `);
  console.log(`---------------------------------------`);
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function someoneWonRound(board, score, round) {
  if (someoneWon(board)) {
    updateScore(detectWinner(board), score);
    return prompt(`${detectWinner(board)} won round ${round}`);
  } else {
    return prompt("It's a tie!");
  }
}

function whoPlaysFirst(){
  console.clear();
  prompt("Welcome to Tic-Tac-Toe!");

  while (true) {
    prompt("Type 'p' to go first, otherwise type 'c' to let the computer go first.");
    WHO_PLAYS_FIRST['choose'] = readline.question().toLowerCase();

    if (WHO_PLAYS_FIRST['choose'] === 'p' || WHO_PLAYS_FIRST['choose'] === 'c') {
      break;
    }

    prompt("Invalid choice.");
  }
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'p') {
    return playerChoosesSquare(board);
  } else if (currentPlayer === 'c') {
    return computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'p') return 'c';
  return 'p';
}

// Ask the user if they want to play again
function playAgain() {
  let answer = ' ';
  
  while(true) {
    prompt('Play again? (y or n)');
    answer = readline.question().toLowerCase();
    if (answer === 'y' || answer === 'n') {
      return answer;
    };
    prompt("Invalid choice.");
  }
  
}

// Game Loop
while (true) {
  let score = { Player: 0, Computer: 0 };
  let round = 1;
  debugger;
  
  whoPlaysFirst();
  let currentPlayer = WHO_PLAYS_FIRST['choose'];
  
  while (true) {
    // Start board
    let board = initializeBoard();

    // Game mechanics
    while (true) {
      displayBoard(board, score, round);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }
    
    displayBoard(board, score, round);
    
    someoneWonRound(board, score, round);

    if (Object.values(score).includes(GAMES_TO_WIN)) {
      displayBoard(board, score, round);
      prompt(`${detectWinner(board)} wins the game!`);
      break;
    }

    // Increment the round
    round++;

    readline.question('\nPress any key to continue playing '); 
  }
  
  if (playAgain() === 'n') break;
}

prompt('\nThanks for playing Tic-Tac-Toe!');