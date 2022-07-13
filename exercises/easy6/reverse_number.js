/**
 * PEDAC
 * 
 * P. Understand the problem
 * - Inputs
 * positive integer
 * 
 * - Outputs
 * positive integer
 * 
 * - Explicit Requirements
 * return the reverse of positive integer
 * 
 * - Identify Rules
 * leading zeros in the result get dropped
 * 
 * - Mental model (optional)
 * Iterate through an array of the given numbers then push them back into an array in reverse order.
 * Then join the array into a single number
 * 
 * E. Examples/Test Cases
 * - Validate understanding of the problem
 * inputs:
 * 12345
 * 12213
 * 456
 * 12000
 * 1
 * 
 * outputs:
 * 54321
 * 31221
 * 654
 * 21
 * 1
 * 
 * D. Data Structure (Usually this is paired with the algorithm step)
 * - How can we represent data when converting input to output
 * Convert number to a string. Then represent that data as an array so it can be iterated over.
 * 
 * A. Algorith
 * - Steps for converting input to output
 * 1. Convert number to string
 * 2. Split the incoming positive integer as an array
 * 3. Push it back into the array in the reverse order
 * 4. Convert string back into a number
 * 5. Return result
 * 
 * C. Code with intent
 * - Implementation of algorithm
 * 
 */

function reverseNumber(number) {
  return Number(String(number).split('').reverse().join(''));
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1