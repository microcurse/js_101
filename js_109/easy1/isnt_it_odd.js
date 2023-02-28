/**
 * PEDAC
 * 
 * Problem
 * Write a function that takes one integer argument, which may be positive, negative, or zero. 
 * This method returns true if the number's absolute value is odd. You may assume that the
 * argument is a valid integer value.
 * 
 * Explicit Requirements:
 * - Input: Number
 * - Output: Boolean
 * - If the absolute number of the argument is odd, output true. If it is not, output false
 * 
 * Implicit Requirements:
 * - The argument passed to the function is a valid integer value
 * 
 * Example and test cases:
 * 
 * 2  // => false
 * 5  //  => true
 * -17  //  => true
 * -8 //  => true
 * 0  //  => false
 * 7  //  => true
 * 
 * Algorithms
 * 1. Remove the positive or negative from the integer
 * 2. Use a remainder operator (%) to divide the given number by 2
 * 3. If the result is 1, output true
 * 4. If the result is 0, output false
 * 
 */

function isOdd(num) {
  return (Math.abs(num) % 2 === 1);
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true