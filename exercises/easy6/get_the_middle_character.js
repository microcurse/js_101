/**
 * PEDAC
 * 
 * P. Understand the problem
 * - Inputs
 * a string
 * 
 * - Outputs
 * a string
 * 
 * - Explicit Requirements
 * the input is non-empty
 * 
 * - Identify Rules
 * If the string has an odd length, return exactly one character. If the string has an even length, it should
 * return exactly two characters.
 * 
 * - Mental model (optional)
 * Iterate through each character in the string. Find the midpoint of the array by dividing the length of
 * the array by 2. Return the character at the middle index of the full length. Use modulo to determine
 * whether or not to return 1 or two characters.
 * 
 * E. Examples/Test Cases
 * - Validate understanding of the problem
 * inputs:
 * 'I Love JavaScript'
 * 'Launch School'
 * 'Launch'
 * 'Launchschool'
 * 'x'
 * 
 * outputs:
 * 'a'
 * ' '
 * 'un'
 * 'hs'
 * 'x'
 * 
 * 
 * D. Data Structure (Usually this is paired with the algorithm step)
 * - How can we represent data when converting input to output
 * Represent the data as an array. Then output the data as a string.
 * 
 * A. Algorith
 * - Steps for converting input to output
 * 1. Convert string into an array
 * 2. Iterate through the array
 *  1. If the length of array has no remainder (using modulo)
 *    1. return middle two characters of array character[Math.floor(character.length / 2) - 1] and character[Math.round(character.length / 21)]
 *  2. else return character[Math.floor(character.length / 2)]
 * 3. return result
 * 
 * C. Code with intent
 * - Implementation of algorithm
 * 
 */

function centerOf(str) {
  let strArray = str.split('');
  for (let i = 0; i < strArray.length; i += 1) {
    if (strArray.length % 2 === 0) {
      return strArray[Math.floor((strArray.length / 2) - 1)] + strArray[Math.round((strArray.length / 2))];
    } else {
      return strArray[Math.floor(strArray.length / 2)];
    }
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"