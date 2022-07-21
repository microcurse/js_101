/**
 * PEDAC
 * 
 * P. Understand the problem
 * - Inputs
 * 
 * 
 * - Outputs
 * 
 * 
 * - Explicit Requirements
 * 
 * 
 * - Identify Rules
 * 
 * 
 * - Mental model (optional)
 * 
 * 
 * E. Examples/Test Cases
 * - Validate understanding of the problem
 * inputs:
 * 
 * 
 * outputs:
 * 
 * 
 * D. Data Structure (Usually this is paired with the algorithm step)
 * - How can we represent data when converting input to output
 * 
 * 
 * A. Algorithm
 * - Steps for converting input to output
 * 
 * 
 * C. Code with intent
 * - Implementation of algorithm
 */

function reverseSentence(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"