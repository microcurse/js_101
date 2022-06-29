/**
 * PEDAC
 * 
 * P. Understand the problem
 * - Inputs
 * array of integers
 * 
 * - Outputs
 * a number that represents the average of all integers in the array
 * 
 * - Explicit Requirements
 * round down to the integer component of the average
 * 
 * - Identify Rules
 * the array will never be empty, and all the numbers will always be positive integers.
 * 
 * - Mental model (optional)
 * accept the array of integers, add them all together, then divide them all by the total number of all integers
 * in the array.
 * 
 * E. Examples/Test Cases
 * - Validate understanding of the problem
 * inputs: 
 * [1, 5, 87, 45, 8, 8]
 * [9, 47, 23, 95, 16, 52]
 * 
 * outputs:
 * 25
 * 40
 * 
 * D. Data Structure (Usually this is paired with the algorithm step)
 * - How can we represent data when converting input to output
 * 
 * A. Algorithm
 * - Steps for converting input to output
 * 1. create variable to store the sum
 * 2. create variable to store divisor which is equal to the array's length
 * 3. while there are still elements in the array
 *  1. remove the first element in the array
 *  2. increment the sum result with the first element in array
 * 4. divide the sum by the total length of array
 * 5. round that result down to the integer component
 * 6. return the result
 * 
 * 
 * C. Code with intent
 * - Implementation of algorithm
 */


function average (integers) {
  let sum = 0;
  for (let i = 0; i < integers.length; i += 1) {
    sum += integers[i];
  }
  return Math.floor(sum / integers.length);
}

/**
 * forEach method solution
 */

function average (integers) {
  let sum = 0;
  integers.forEach( number => sum += number);
  return Math.floor(sum / integers.length);
}

/**
 * reduce method solution
 */

 function average (integers) {
  return Math.floor(integers.reduce( (prev, curr) =>  prev + curr, 0) / integers.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40