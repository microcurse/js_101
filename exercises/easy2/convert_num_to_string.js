/**
 * Function to convert a number into a string without using standard conversion functions or
 * expressions such as '' + number.
 * 
 * Pseudocode:
 * 
 * 
 * Set an array with 0-9 as strings
 * Create a for loop to iterate and count the ones, tens, thousands, etc.. of the number.
 * Set counter(10, 100, etc..) % number.
 * 
 * pop off number at index with it's string counterpart and store it in a new array
 * join new array.
 */
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  let result = '';

  do {
    let remainder = num % 10;
    num = Math.floor(num / 10);

    result = DIGITS[remainder] + result;
  } while (num > 0);

  return result;
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"