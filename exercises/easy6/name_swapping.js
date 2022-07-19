/**
 * PEDAC
 * 
 * P. Understand the problem
 * - Inputs
 * string with first name, space, and last name
 * 
 * - Outputs
 * a new string with last name comma, space, first name
 * 
 * - Explicit Requirements
 * swap first name and last name and insert a comma after last name
 * 
 * - Identify Rules
 * 
 * 
 * - Mental model (optional)
 * Split the input string using the space between. Then concatenate the second part of the string with a comma,
 * space, and lastly the first name. Return the result.
 * 
 * E. Examples/Test Cases
 * - Validate understanding of the problem
 * inputs: 
 * Joe Roberts
 * 
 * outputs:
 * Roberts, Joe
 * 
 * D. Data Structure (Usually this is paired with the algorithm step)
 * - How can we represent data when converting input to output
 * 
 * A. Algorithm
 * - Steps for converting input to output
 * 1. Use split method on incoming name
 * 2. reverse it using reverse method
 * 3. use join method with a comma and space as the separator string
 * 
 * 
 * C. Code with intent
 * - Implementation of algorithm
 */

function swapName (fullName) {
  let nameArr = fullName.split(' ');
  return `${nameArr.pop()}, ${nameArr.join(' ')}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"