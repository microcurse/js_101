/**
 * PEDAC
 * 
 * INPUT
 * string of words separated by spaces
 * 
 * OUTPUT
 * swap the first and last letters of every word
 * 
 * ALGORITHM
 * set output variable
 * split up string into an array to iterate over it
 * use for loop to iterate over each word
 * flip first letter and last letter of the word
 *  split that word into another array to get each letter
 *  iterate over that array
 *  swap the position of the first letter and the last letter
 *    use the index 0 for first letter
 *    use index of word.length - 1 for last letter
 *    rejoin the the letters into the word
 *  rejoin the word into the string
 * return result
 * 
 * 
 */

function swap(string) {
  let output = '';
  let words = string.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 1) {
      let firstLetter = words[i].charAt(0);
      let lastLetter = words[i].charAt(words[i].length-1);
      let trimmedWord = words[i].substring(1, words[i].length - 1);
      output += lastLetter + trimmedWord + firstLetter + ' ';
    } else {
      output += words[i] + ' ';
    }
  }
  return output;
}

console.log(swap('Oh what a wonderful day it is')); // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde')); // "ebcdA"
console.log(swap('a'));  // "a"