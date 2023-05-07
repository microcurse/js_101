/**
 * Given a string, return a new string that replaces every occurrence of 
 * the word "important" with "urgent":
 * 
 */

let advice = "Few things in life are as important as house training your pet dinosaur.";

/**
 * Solution:
 * Using the String.prototype.replaceAll() method on the advice variable
 * will allow us to replace all ocurrences of "important" with the string
 * "urgent".
 * 
 * The .replaceAll() method accepts two arguments. The first arguement is 
 * the string which needs to be matched within the calling string. The second 
 * argument is what we will be what we're replacing the matched string with.
 * 
 */

let newAdvice = advice.replaceAll('important', 'urgent');
console.log(newAdvice);
