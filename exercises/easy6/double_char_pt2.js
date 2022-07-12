/**
 * PEDAC
 * 
 * P. Understand the problem
 * - Inputs
 * a string
 * 
 * - Outputs
 * a new string that doubles every consonante character in the string
 * 
 * - Explicit Requirements
 * every consonate should be doubled
 *  
 * - Identify Rules
 * the function should not double any vowels, digits, punctuation, or whitespace.
 * 
 * - Mental model (optional)
 * First we need to identify all characters that are vowels, digits, punctuation, or whitespace with regex.
 * Then iterate through the incoming string and check with our regex if that character is any of the non-allowed
 * characters. If it isn't, then double it, if it is, then just return it.
 * 
 * 
 * E. Examples/Test Cases
 * - Validate understanding of the problem
 * inputs:
 * String
 * Hello-World!
 * July 4th
 * ''
 * 
 * outputs:
 * SSttrrinngg
 * HHelllloo-WWorrlldd!
 * JJullyy 4tthh
 * ''
 * 
 * D. Data Structure (Usually this is paired with the algorithm step)
 * - How can we represent data when converting input to output
 * represent the data as an array so that we can iterate through it. Create an array for all vowels and a regex
 * variable for all alphabet characters. That way we can filter out all special characters, punctuation, and digits
 * from being doubled.
 * 
 * A. Algorith
 * - Steps for converting input to output
 * 1. create array variable for all vowels
 * 2. create a regex for all alphabet characters
 * 3. create variable for characters array by using the split method on the string
 * 4. create a variable for the result
 * 2. Iterate through the characters
 * 3. Check if current iteration is a vowel or not
 *  1. if character is a vowel, concat that into the resulting variable
 *  2. if it is not a vowel and is also not found in the regex, concat that character to itself into the resulting variable
 * 4. return the result
 * 
 * C. Code with intent
 * - Implementation of algorithm
 * 
 * 
 */

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const ONLYLETTERS = /^[a-zA-Z]+$/g;

function doubleConsonants (string) {
  var characters = string.split('');
  var result = '';

  for (let i = 0; i < characters.length; i += 1) {
    if (!VOWELS.includes(characters[i]) && characters[i].match(ONLYLETTERS)) {
      result += characters[i].concat('', characters[i]);
    } else {
      result += characters[i];
    }
  }
  return result;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""