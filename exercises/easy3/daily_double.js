/**
 * 
 * Pseudocode:
 * 
 * Use split() string method to convert string into an array.
 * Iterate through array and store first element in a variable
 * Set a new comparison variable to see if the first element is the same as the second element
 * Set a new array to store new, crunched string.
 * If first element !== second element
 *  newArr += arr.shift(first element)
 * return newArr
 * 
 * 
 */
const crunch = function crunchLetters(str) {
  let arr = str.split('');
  let newArr = [];
  for(let i = 0; i < arr.length; i += 1) {
    if(arr[i] !== arr[i + 1]) {
      newArr += arr[i];
    }
  }
  console.log(newArr);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""