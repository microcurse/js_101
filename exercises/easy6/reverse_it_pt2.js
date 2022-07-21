/**
 * PEDAC
 * 
 * P. Understand the problem
 * - Inputs
 * string
 * 
 * - Outputs
 * string
 * 
 * - Explicit Requirements
 * Reverse all five-or-more letter words.
 * 
 * 
 * - Identify Rules
 * The string argument will consist only of letters and spaces. Words will be separated by a single space.
 * 
 * - Mental model (optional)
 * Split the input string into an array. If any element has a length greater than 5 letters, then split that
 * word into another array, reverse it, join it. Then join the initial array into a string.
 * 
 * E. Examples/Test Cases
 * - Validate understanding of the problem
 * inputs:
 * Professional
 * Walk around the block
 * Launch School
 * 
 * outputs:
 * lanoisseforP
 * Walk dnuora the kcolb
 * hcnuaL loohcS
 * 
 * 
 * D. Data Structure (Usually this is paired with the algorithm step)
 * - How can we represent data when converting input to output
 * Convert the string into an array, then convert that word into another array if it has a length greater than
 * or equal to 5. Then join that word in reverse, then join the sentence array back into a string with spaces.
 * 
 * A. Algorithm
 * - Steps for converting input to output
 * 1. Split the string into an array of words separated by spaces
 * 2. create an empty array variable called result
 * 2. iterate through the words array
 *  1. if any element's length is >= 5, then split that word, reverse it, then join it
 *  2. else push that word into the result array
 * 3. return the result using the join method with a space separating each element
 * 
 * C. Code with intent
 * - Implementation of algorithm
 */

// function reverseWords(string) {
//   let words = string.split(' ');
//   let result = [];
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length >= 5) {
//       result.push(words[i].split('').reverse().join(''));
//     } else {
//       result.push(words[i]);
//     }
//   }
//   return result.join(' ');
// }

// console.log(reverseWords('Professional'));             // "lanoisseforP"
// console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
// console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

/**
 * Further exploration using the map method
 */

function reverseWords(string) {
  let words = string.split(' ');
  return words.map( word => word.length >= 5 ? reverseWord(word) : word).join(' ');
}

function reverseWord(word) {
  return word.split('').reverse().join('')
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"