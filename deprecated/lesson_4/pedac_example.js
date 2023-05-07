/**
 * PROBLEM:
 * Given a string, write a function `palindromeSubstrings` which returns
 * all the substrings from a given string which are palindromes. Consider
 * palindrome words case sensitive.
 * 
 * Test cases:
 * 
 * console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
 * should return: ["ili"]
 * 
 * console.log(palindromeSubstrings("abcddcbA"))
 * should return: ["bcddcb", "cddc", "dd"]
 * 
 * console.log(palindromeSubstrings("palindrome"))
 * should log: []
 * 
 * console.log(palindromeSubstrings(""))
 * should log: []
 * 
 * Some questions you might have?
 * 1. What is a substring?
 * 2. What is a palindrome?
 * 3. Will the inputs always be strings?
 * 4. What does it mean to treat palindrom words case-sensitively?
 * 
 * input:
 * string
 * 
 * output:
 * array of substrings
 * 
 * rules:
 * 
 *    Explicit requirements:
 *      - every set of palindromic substrings in the string must be output to the 
 *        console as an array. This includes a string of characters with palindromes 
 *        inside of it. (example: [bcddcb, "cddc", "dd"]. Conversely: Bcb would not 
 *        be a palindrome).
 *      - Palindromes are case sensitive.
 * 
 *    Implicit requirements:
 *      - if the string is empty or doesn't contain any palindromes, output an empty array
 * 
 * DATA STRUCTURES:
 * Strings into arrays.
 * 
 * ALGORITHM:
 * 
 * substrings function
 * ===================================
 *  - create an empty array called `result` that will contain all required substrings
 *  - create a `startingIndex` variable (value `0`) for the starting index of a substring
 *  - start a loop that uses `startingIndex` to iterate over `string` from `0` to the length of the string minus 2
 *    - create a `numChars` variable (value `2`) for the length of a substring
 *    - start an inner loop that uses `numChars` to iterate over `string` from `2` to `string.length - startingIndex`
 *      - extract a substring of length `numChars` from `string` starting at `startingIndex`
 *      - append the extracted substring to the `result` array
 *      - increment the `numChars` variable by `1`
 *    - end the inner loop
 *    - increment the `startingIndex` variable by `1`
 *  - end the outer loop
 *  - return the `result array
 *  
 * isPalindrome function
 * ===================================
 *  - Inside the `isPalindrome` function, check wether the string value is equal to its reversed value
 * 
 * palindromeSubstrings function
 * ===================================
 *  - declare a `result` variable and initialize it to an empty array
 *  - create an array named `substrArray` that will contain all of the
 *    substrins of the input string that are at least 2 characters long.
 *  - loop through the words in the `substrArray` array.
 *    - if the word is a palindrome, append it to the `result` array
 *  - return the `result` array
 * 
 * 
 * Formal Pseudocode
 * START
 * 
 *  Given a string named `string`
 *  
 *  SET result = []
 *  SET startingIndex = 0
 *  
 *  WHILE startingIndex <= length of string - 2
 *   SET numChars = 2
 *   WHILE numChars <= length of string - startingIndex
 *     SET substring = numChars characters from string starting at index startingIndex
 *     append substring to result array
 *     SET numChars = numChars + 1
 *  
 *   SET startingIndex = startingIndex + 1
 *  
 *  RETURN result
 * END
 * 
 */

function substrings(str) {
  let result = [];
  let startingIndex = 0;

  while (startingIndex <= str.length - 2) {
    let numChars = 2;
    while (numChars <= str.length - startingIndex) {
      let substring = str.slice(startingIndex, startingIndex + numChars);
      result.push(substring);
      numChars += 1;
    }
    
    startingIndex += 1;
  }

  return result;
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function palindromeSubstrings(str) {
  let result = [];
  let substringsArr = substrings(str);

  substringsArr.forEach(substring => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });

  return result;
}

console.log(palindromeSubstrings("supercalifragilisticexpialidocious")); // ["ili"]
console.log(palindromeSubstrings("abcddcbA"));   // ["bcddcb", "cddc", "dd"]
console.log(palindromeSubstrings("palindrome")); // []
console.log(palindromeSubstrings(""));           // []