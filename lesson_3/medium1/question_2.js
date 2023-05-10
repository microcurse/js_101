// Staring with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all the letters:
// 'tHE mUNSTERS ARE CREEPY AND SPOOKY.'

/**
 * PEDAC
 * 
 * Problem
 * Given a string, return a new string that swaps the case of all the letters
 * 
 * Explicit Requirements:
 * - Input: string
 * - Output: string
 * Implicit Requirements
 * 
 * Examples
 * 
 * Data Structures
 * 
 * Algorithm
 * Loop through each character of the string
 * Check if that character is uppercase or lowercase
 * Convert it to the opposite
 * - How do we do this conversion?
 * - Converted results need to be stored in a new result variable because we cannot
 * mutate primitive values.
 * Return the string
 * 
 */

let munstersArr = munstersDescription.split('');

const result = munstersArr.map(char => {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
});

console.log(result.join(''));