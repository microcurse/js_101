const readline = require('../node_modules/readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 3;
const CENTER_SQUARE = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],  // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9],  // columns
  [1, 5, 9], [3, 5, 7]              // diagonals
];


function prompt(msg) {
  console.log(`\n=> ${msg}`);
}

function displayBoard(board, score) {
  console.clear();

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  
  displayScore(score);
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
  let square; // declared here so we can use it outside the loop

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))})`);
    square = readline.question().trim(); // input trimmed to allow spaces in input
    
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
  debugger;

  // defense 
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }
  debugger;

  if (!square && board[CENTER_SQUARE] === INITIAL_MARKER) {
    // pick number 5, milord
    board['5'] = COMPUTER_MARKER;
  } else if (!square && board[CENTER_SQUARE] !== INITIAL_MARKER) {
    // random
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }
  debugger;

  board[square] = COMPUTER_MARKER;
}

function findAtRiskSquare(line, board, marker) {
  // This creates a new array and populates the values of the board using the 
  // winning lines as the index.
  let markersInLine = line.map(square => board[square]);

  // Find out if there are 2 HUMAN_MARKERS on the board with the same index as
  // winning lines.
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

function displayScore(score) {
  return prompt(`Player score: ${score.Player}, Computer score: ${score.Computer}`);
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

// Ask the user if they want to play again
function playAgain() {
  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  return answer === 'y';
}

// Game Loop
while (true) {
  let score = { Player: 0, Computer: 0 };
  let round = 1;
  
  while (true) {
    // Start board
    let board = initializeBoard();

    // Game mechanics
    while (true) {
      displayBoard(board, score);
    
      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
      
      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    
    }
    
    // Displays updated board and score;
    displayBoard(board, score);
    
    // Check if someone won the round
    someoneWonRound(board, score, round);

    // Check if someone won the game.
    // I tried moving this to its own function but I need to find another way to break the while loop
    if (Object.values(score).includes(GAMES_TO_WIN)) {
      displayBoard(board, score);
      prompt(`${detectWinner(board)} won the game!`);
      break;
    }

    // Increment the round
    round++;

    // This is just here to pause and show the board state and score.
    // Maybe I should come up with a better way to handle it.
    readline.question('\nPress any key to continue playing ');
    
  }
  
  if (!playAgain()) break;
}

prompt('\nThanks for playing Tic Tac Toe!');
