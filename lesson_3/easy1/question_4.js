/**
 * Using the following string, create a new string that contains all lowercase
 * letters excpet for the first character, which should be capitalized 
 * 
 */

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

/**
 * Solution:
 * First we need to reassign the munstersDescription variable to the value of 
 * invoking the String.prototype.lowercase() method on the string. Then reassign
 * munstersDescription to the value of the first element of the string using 
 * munstersDescription[0].toUpperCase() + the return value of calling the
 * String.prototype.slice(1) on munstersDescription.
 * 
 */

munstersDescription = munstersDescription.toLowerCase();
munstersDescription = munstersDescription[0].toUpperCase() + munstersDescription.slice(1);
console.log(munstersDescription);