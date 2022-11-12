const readline = require('../node_modules/readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

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
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = ' ';
  }

  return board;
}

function joinOr(array, delimiter, lastDelimiter) {
  /**
   * PEDAC
   * P: Understanding the Problem
   * 
   *  Write a method that joins an array into a string with a commas (,) delimiting each 
   *  element and 'or' delimiting the last two elements in the array.
   * 
   *  Explicit requirements:
   *  - Input: an array of numbers and two strings
   *  - Output: a string
   *  - Output commas (,) to delimit the elements in the array if there's no given first string
   *  - Output 'or' before the last element in array if not given a second string
   * 
   * 
   *  Implicit requirements:
   *  - Array will always contain numbers
   *  - The first given string is used as a delimiter in place of default comma (,)
   *  - The second given string is used in place of default 'or'
   *  - If array is empty, return an empty string.
   *  - If array has 1 element, return that element
   *  - If array only has 2 elements, only use the default 'or' delimeter, or the 
   *    given second string
   *  
   * E: Examples and test cases
   *  
   *  Input:
   *  [1, 2, 3]
   *  [1, 2, 3], ';'
   *  [1, 2, 3], ', ' 'and'
   *  []
   *  [5]
   *  [1, 2]
   * 
   *  Output:
   *  "1, 2, or 3"
   *  "1; 2; or 3"
   *  "1, 2, and 3"
   *  ""
   *  "5"
   *  "1 or 2"
   * 
   * D: Data structures
   * 
   *  Arrays and strings
   * 
   * A: Algorithm
   * 
   * - Check how many elements are in the array
   *  - If there are 3 or more elements
   *    - Use commas between each element
   *    - Use 'or' between the last two elements
   *  - If there are only 2 elements
   *    - Use 'or' between the two elements
   *  - If there's only 1 element
   *    - Outpt that element into a string
   * 
   * 
   */


  if (array.length >= 3) {
    // Join the array with comma delimiters
      // the join method does this with commas as we require
      // Use method lastIndexOf to target the last comma
      // replace it with 'or'
        // How do I 'replace' it?
    // The last two elements should be dilimited by an 'or'
    // Output the array as a string
    
  }
}

function playerChoosesSquare(board) {
  let square; // declared here so we can use it outside the loop

  while (true) {
    prompt(`Choose a square (${emptySquares(board).join(', ')})`);
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

while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);
  
    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
    
    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  
  }
  
  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }

  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');
