/**
 * Starting with the string:
 * 
 * let munstersDescription = "The Munsters are creepy and spooky.";
 * 
 * Return a new string that swaps the case of all the letters:
 * 
 * 'tHE mUNSTERS ARE CREEPY AND SPOOKY.'
 * 
 * PEDAC
 * 
 * INPUT
 * starting string
 * 
 * OUTPUT
 * starting string with swapped case of all the letters
 * 
 * ALGORITHM
 * create resulting flippedCaps description variable
 * loop through each letter of the description
 * if the current letter is equal to the current letter.toUpperCase()
 *  apply toLowerCase method and concatenate that letter into the the flippedCaps variable
 * else
 *  apply toUpperCase method and concatenate that letter into the flippedCaps variable
 * 
 */

let munstersDescription = "The Munsters are creepy and spooky.";
let flippedCaps = '';

for (let i = 0; i < munstersDescription.length; i += 1) {
  if (munstersDescription[i] === munstersDescription[i].toUpperCase()) {
    flippedCaps += munstersDescription[i].toLowerCase();
  } else {
    flippedCaps += munstersDescription[i] = munstersDescription[i].toUpperCase();
  }
}


console.log(flippedCaps);