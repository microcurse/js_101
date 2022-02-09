/**
 * 
 * Pseudocode:
 * 
 * Start by creating the box.
 * First line of the box has at least +--+
 * Second, third, and fourth line starts with | two spaces and another |
 * Last line of the box has at least +--+
 * 
 * 
 */

const logInBox = function logInBoxContainer(str) {
  let dashes  = '-';
  let spaces = ' ';
  for(let i = 0; i < str.length; i += 1) {
    dashes += '-';
    spaces += ' ';
  }

  //output
  console.log(`+${dashes}-+`);
  console.log(`|${spaces} |`)
  console.log(`| ${str} |` );
  console.log(`|${spaces} |`)
  console.log(`+${dashes}-+`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');