/**
 * PEDAC
 * 
 * P. Understand the problem
 * - Inputs
 * two integers
 * 
 * - Outputs
 * an array
 * 
 * - Explicit Requirements
 * The array should have the same number of elements as the first input integer (count) and the values of
 * each element should be a multiple of the second input integer (starting number)
 * 
 * - Identify Rules
 * count will always be an integer greater than or equal to 0. The starting number can be any integer
 * If the count is 0, the function should return an empty array.
 * 
 * - Mental model (optional)
 * Multiply the starting number by the count then decriment the count by 1 and push that result into output
 * array. Keep multiplying the starting number by the count, decrimenting by 1, and pushing the reuslt into output
 * until the count reaches 0. 
 * 
 * E. Examples/Test Cases
 * - Validate understanding of the problem
 * inputs:
 * 5, 1
 * 4, -7
 * 3, 0
 * 0, 1000000
 * 
 * outputs:
 * [1, 2, 3, 4, 5]
 * [-7, -14, -21, -28]
 * [0, 0, 0]
 * []
 * 
 * D. Data Structure (Usually this is paired with the algorithm step)
 * - How can we represent data when converting input to output
 * use a for loop to iterate through the count and output it into an array
 * 
 * A. Algorithm
 * - Steps for converting input to output
 * 1. Create an empty array variable called result
 * 2. use a for loop to keep iterating until the count reaches 0
 *  1. as the for loop iterates multiply the starting number by the current count
 *  2. push the result into the result array
 * 3. output result array
 * 
 * 
 * C. Code with intent
 * - Implementation of algorithm
 */

function sequence(count, startingNum) {
  let result = [];
  for (count; count > 0; count -= 1) {
    result.unshift(count * startingNum);
  }
  return result;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []