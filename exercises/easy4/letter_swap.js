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
 * create newArr using .split() on string of words
 * iterate through that array
 *  - forEach word, use .split() again
 *  - iterate through each of those arrays
 *    - create variable for firstLetter, assign it word.shift()
 *    - create variable for lastLetter, assign it word.pop();
 *      - .unshift lastLetter to split word array
 *      - .push firstLetter to split word array
 *    - return the word .joined
 *  - return that word .joined
 * return new word
 * 
 * 
 */

function swap(string) {
  let words = string.split(' ');
  let flipped = words.map( word => {
    let letters = word.split('');
    let firstLetter = letters.shift();
    let lastLetter  = letters.pop();
    
    letters = 
  });
}


swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"