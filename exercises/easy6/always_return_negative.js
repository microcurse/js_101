/**
 * PEDAC
 * 
 * P. Understand the problem
 * - Inputs
 * a number
 * 
 * - Outputs
 * a number
 * 
 * - Explicit Requirements
 * if the number is positive, return the negative of that number. If the number is negative, return it as-is
 * 
 * - Identify Rules
 * Only negative number returns
 * 
 * - Mental model (optional)
 * Check if the number is negative or positive. If it's positive, multiply it by -1. If it's negative return
 * the number given. If the number is zero, flip it's sign to negative.
 * 
 * E. Examples/Test Cases
 * - Validate understanding of the problem
 * inputs:
 * 5
 * -3
 * 0
 * 
 * outputs:
 * -5
 * -3
 * -0
 * 
 * D. Data Structure (Usually this is paired with the algorithm step)
 * - How can we represent data when converting input to output
 * 
 * A. Algorith
 * - Steps for converting input to output
 * 1. Use -Math.abs(number) to flip it's sign to negative
 * 
 * C. Code with intent
 * - Implementation of algorithm
 * 
 * 
 */

function negative(number) {
  return -Math.abs(number);  
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0