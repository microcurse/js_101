/**
 * PEDAC
 * 
 * INPUT
 * Accept string as argument
 * 
 * OUTPUT
 * true if string is a palindrome
 * false if string is not a palindrome
 * 
 * ALGORITHM
 * Case matters and all characters matter.
 * Use .split().reverse().join() to get the reverse string
 * compare the two and return if ===
 */

const esrever = require('../node_modules/esrever');
const isPalindrome = (str) => str === esrever.reverse(str);

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true