const readline = require('../node_modules/readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 3;

function prompt(msg) {
  console.log(`=> ${msg}`);
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
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
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
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],  // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9],  // columns
    [1, 5, 9], [3, 5, 7]              // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

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
    let board = initializeBoard();

    while (true) {
      displayBoard(board, score);
    
      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
      
      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    
    }
    
    displayBoard(board, score);
    
    if (someoneWon(board)) {
      updateScore(detectWinner(board), score);
      prompt(`${detectWinner(board)} won round ${round}`);
    } else {
      prompt("It's a tie!");
    }

    // Check if someone won the game.
    if (Object.values(score).includes(GAMES_TO_WIN)) {
      displayBoard(board, score);
      prompt(`${detectWinner(board)} won the game!`); 
      break;
    }
    
    prompt('Press any key to continue playing');
    readline.question();
    
    round++;
  }
  
  if (!playAgain()) break;
}

prompt('Thanks for playing Tic Tac Toe!');
