/**
 * PEDAC
 * 
 * Problem
 * Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
 * 
 * Explicit Requirements:
 * - Input: Number
 * - Output: Number
 * - Print all even numbers between a range of numbers (1 to 99) inclusive
 * - All numbers should be printed on a separate line
 * 
 * Implicit Requirements:
 * - All numbers are positive
 * - No zeros
 * 
 * Example and test cases:
 * 
 * 2
 * 4
 * 6
 * 8
 * 10
 * etc...
 * 
 * Algorithms
 * 1. Create a loop that loops 99 times
 * 2. Create a condition that checks if the current iteration is even
 * 3. Print to the console if that current iteration is an odd number
 * 
 * 
 */

for (let i = 2; i < 99; i += 2) {
  console.log(i);
}