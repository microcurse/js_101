/**
 * PEDAC
 * 
 * P. Understand the problem
 * - Inputs
 * a string
 * 
 * - Outputs
 * a new string with double of each character from original string
 * 
 * - Explicit Requirements
 * if string is blank, return blank
 * 
 * - Identify Rules
 * all characters in string must be doubled
 * 
 * - Mental model (optional)
 * Iterate through the string and for each iteration that character needs to be concatenated with itself then
 * stored into a variable. That variable needs to be returned/logged to the console.
 * 
 * E. Examples/Test Cases
 * - Validate understanding of the problem
 * inputs:
 * Hello
 * Good job!
 * ''
 * 
 * outputs:
 * HHeelloo
 * GGoooodd  jjoobb!!
 * ''
 * 
 * D. Data Structure (Usually this is paired with the algorithm step)
 * - How can we represent data when converting input to output
 * represent the data as an array so we can iterate through it. then concatenate each iteration to itself and store
 * that result into a variable.
 * 
 * A. Algorith
 * - Steps for converting input to output
 * 1. split the string into individual characters so we can iterate through it
 * 2. concatenate the currently iterated element by itself and store that into a variable
 * 3. return the resulting variable
 * 
 * C. Code with intent
 * - Implementation of algorithm
 * 
 * 
 */

// function repeater (string) {
//   var characters = string.split('');
//   var result = '';
//   for (let i = 0; i < characters.length; i += 1) {
//     result += characters[i].concat('', characters[i]);
//   }
//   return result;
// }

// console.log(repeater('Hello'));        // "HHeelllloo"
// console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
// console.log(repeater(''));             // ""

/**
 * Refactored solution using map array method
 * 
 */

function repeater (string) {
  return string.split('').map( character => character + character).join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""