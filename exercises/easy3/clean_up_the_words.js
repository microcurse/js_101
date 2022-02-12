/**
 * PEDAC
 * 
 * INPUT
 * string of words and assortment of non-alphabetic characters
 * 
 * OUTPUT
 * cleaned string with a single space in place of consecutive non-alphabetic characters
 * 
 * ALGORITHM
 * use regex and replace() method to find all special characters and replace them with a ' '.
 * return cleaned string
 * 
 */

function cleanUp(str) {
  const specialChars = /[^a-z]/gi;
  let cleaned = str.replaceAll(specialChars, ' ');
  return cleaned.replaceAll('  ', '');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "