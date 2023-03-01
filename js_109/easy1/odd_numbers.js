/**
 * PEDAC
 * 
 * Problem
 * Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
 * 
 * Explicit Requirements:
 * - Input: Number
 * - Output: Number
 * - Print all odd numbers between a range of numbers (1 to 99) inclusive
 * - All numbers should be printed on a separate line
 * 
 * Implicit Requirements:
 * - All numbers are positive
 * - No zeros
 * 
 * Example and test cases:
 * 
 * 1
 * 3
 * 5
 * 7
 * 9
 * etc...
 * 
 * Algorithms
 * 1. Create a loop that loops 99 times
 * 2. Create a condition that checks if the current iteration is odd
 * 3. Print to the console if that current iteration is an odd number
 * 
 * 
 */

for (let i = 1; i <= 99; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}