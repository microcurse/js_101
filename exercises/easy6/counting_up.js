/**
 * PEDAC
 * 
 * P. Understand the problem
 * - Inputs
 * integer
 * 
 * - Outputs
 * an array
 * 
 * - Explicit Requirements
 *  return an array containing all integers between 1 and the argument inclusive
 * 
 * - Identify Rules
 * The integers will be in ascending order
 * the argument will always be a positive integer
 * 
 * - Mental model (optional)
 * Store the number into an array variable. Then store the result of subtracting 1 from the integer given 
 * into that array. Do this till the number reaches zero.
 * 
 * E. Examples/Test Cases
 * - Validate understanding of the problem
 * inputs:
 * 5
 * 3
 * 1
 * 
 * outputs:
 * [1, 2, 3, 4, 5]
 * [1, 2, 3]
 * [1]
 * 
 * D. Data Structure (Usually this is paired with the algorithm step)
 * - How can we represent data when converting input to output
 * represnt the data as an array
 * 
 * A. Algorith
 * - Steps for converting input to output
 * 1. Create an array variable to store the result
 * 2. Create a for loop that keeps iterating while it's less than the given integer
 *  1. add the number minus the current iteration to the beginning of the array
 * 3. return result array
 * 
 * C. Code with intent
 * - Implementation of algorithm
 * 
 * 
 */

function sequence(number) {
  let result = [];
  for (let i = 0; i < number; i += 1) {
    result.unshift(number - i);
  }
  return result;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
console.log(sequence(20));    // [1]