/**
 * determine the UTF-16 value of sum of all characters in a string
 * 
 * split string into array of individual characters
 * determine UTF-16 value of each character
 * set UTF-16 value of said character in its place
 * join array by summing up all values
 * print total value of summed values
 * 
 */

function utf16Value(str) {
  let result = 0;
  for (let i = 0; i < str.length; i += 1) {
    result += str[i].charCodeAt();
  }
  console.log(result);
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811