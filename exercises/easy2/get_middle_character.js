/**
 * Write a function that takes a non-empty string argument and returns the middle character(s)
 * of the string. If the string has an odd length, you should return exactly one character. If
 * The string has an even length, you should return exactly two characters.
 * 
 * Examples:
 * centerOf('I Love JavaScript'); // "a"
 * centerOf('Launch School');     // " "
 * centerOf('Launch');            // "un"
 * centerOf('Launchschool');      // "hs"
 * centerOf('x');                 // "x"
 * 
 */

function centerOf(str) {
  // Get full length of given string
  // Get mid point by using modulo
  // Create condition for what happens if there's an odd length
  // Create condition for if it has an even length
  // Output based on those conditions

  let result = [];

  if (str.length % 2 === 0) {
    // get full length of string, Math.floor(divided by 2), Math.ceil(divided by 2).
    result.push(str.charAt((str.length - 1) / 2 ));
    result.push(str.charAt(str.length / 2));
    return result.join('');
  } else {
    return str.charAt((str.length / 2));
  }

}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"