/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 3;
const CENTER_SQUARE = 5;
const WHO_PLAYS_FIRST = { choose: ' ' };
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7], // diagonals
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayScore(score, round) {
  console.log(`--------------- Round ${round} ---------------`);
  console.log(`  Player score: ${score.Player}   Computer score: ${score.Computer}  `);
  console.log('---------------------------------------');
}

function emptySquares(board) {
  return Object.keys(board).filter((key) => board[key] === INITIAL_MARKER);
}

function findAtRiskSquare(line, board, marker) {
  const markersInLine = line.map((square) => board[square]);

  if (markersInLine.filter((val) => val === marker).length === 2) {
    const unusedSquare = line.find((square) => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function displayBoard(board) {
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
}

function displayGameInfo(board, score, round) {
  console.clear();
  displayScore(score, round);
  displayBoard(board);

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
}

function initializeBoard() {
  const Board = {};
  for (let square = 1; square <= 9; square += 1) {
    Board[String(square)] = ' ';
  }

  return Board;
}

function joinOr(array, delimiter = ', ', joinWord = 'or') {
  switch (array.length) {
    case 0:
      return '';
    case 1:
      return `${array[0]}`;
    case 2:
      return array.join(` ${joinWord} `);
    default:
      return `${array.slice(0, array.length - 1).join(delimiter)}${delimiter}${joinWord} ${array[array.length - 1]}`;
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

function computerOffensiveMove(board, square) {
  for (let index = 0; index < WINNING_LINES.length; index += 1) {
    const Line = WINNING_LINES[index];
    square = findAtRiskSquare(Line, board, COMPUTER_MARKER);
    if (square) break;
  }

  return square;
}

function computerDefensiveMove(board, square) {
  for (let index = 0; index < WINNING_LINES.length; index += 1) {
    const Line = WINNING_LINES[index];
    square = findAtRiskSquare(Line, board, HUMAN_MARKER);
    if (square) break;
  }

  return square;
}

function computerRandomMove(board) {
  const randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  return emptySquares(board)[randomIndex];
}

function computerChoosesSquare(board) {
  let square;

  square = computerOffensiveMove(board, square);

  if (!square) square = computerDefensiveMove(board, square);

  if (!square && board[CENTER_SQUARE] === INITIAL_MARKER) {
    board['5'] = COMPUTER_MARKER;
  } else if (!square && board[CENTER_SQUARE] !== INITIAL_MARKER) {
    square = computerRandomMove(board);
  }

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    const [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER
      && board[sq2] === HUMAN_MARKER
      && board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } if (
      board[sq1] === COMPUTER_MARKER
      && board[sq2] === COMPUTER_MARKER
      && board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function updateScore(winner, score) {
  score[winner] += 1;
}

function someoneWonRound(board, score, round) {
  if (someoneWon(board)) {
    updateScore(detectWinner(board), score);
    return prompt(`${detectWinner(board)} won round ${round}`);
  }

  return prompt("It's a tie!");
}

function whoPlaysFirst() {
  console.clear();
  prompt('Welcome to Tic-Tac-Toe!');
  prompt("Let's play a best of 5 games.");

  while (true) {
    prompt("Type 'p' to go first, otherwise type 'c' to let the computer go first.");
    WHO_PLAYS_FIRST.choose = readline.question().toLowerCase();

    if (WHO_PLAYS_FIRST.choose === 'p' || WHO_PLAYS_FIRST.choose === 'c') {
      break;
    }

    prompt('Invalid choice.');
  }
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'p') {
    playerChoosesSquare(board);
  } if (currentPlayer === 'c') {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'p') return 'c';

  return 'p';
}

// Ask the user if they want to play again
function playAgain() {
  let answer = ' ';

  while (true) {
    prompt('Play again? (y or n)');
    answer = readline.question().toLowerCase();
    if (answer === 'y' || answer === 'n') {
      return answer;
    }
    prompt('Invalid choice.');
  }
}

// Game Loop
while (true) {
  const Score = { Player: 0, Computer: 0 };
  let round = 1;

  whoPlaysFirst();
  let currentPlayer = WHO_PLAYS_FIRST.choose;

  while (true) {
    const Board = initializeBoard();

    // Game mechanics
    while (true) {
      displayGameInfo(Board, Score, round);
      chooseSquare(Board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(Board) || boardFull(Board)) break;
    }

    displayGameInfo(Board, Score, round);

    someoneWonRound(Board, Score, round);

    if (Object.values(Score).includes(GAMES_TO_WIN)) {
      displayGameInfo(Board, Score, round);
      prompt(`${detectWinner(Board)} wins the game!`);
      break;
    }

    // Increment the round
    round += 1;

    readline.question('\nPress any key to continue playing ');
  }

  if (playAgain() === 'n') break;
}

prompt('\nThanks for playing Tic-Tac-Toe!');
