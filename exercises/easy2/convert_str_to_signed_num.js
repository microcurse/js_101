/**
 * Write a function that takes a string of digits and returns the appropriate number as an integer.
 * The string may have a leading + or - sign; if the first character is a +, the function should return
 * a positive number; if it is a -, then it should return a negative number. If there is no sign return
 * a positive number.
 * 
 * Pseudocode:
 * 
 * Given that we can use stringToInteger() function. Also given that any string will always contain 
 * a valid number.
 * 
 * Set negative toggle: isNegative = false;
 * if first element === -
 *  set isNegative = true;
 *  use slice() to remove that element and create a new string without signs.
 * else if first element === +
 *  slice() to remove element and create a new string without signs.
 * run string through stringToInteger() function
 * if isNegative = true
 *  multiply result by -1.
 * 
 * 
 */

let isNegative = false;
let convertedStr = 0;

function stringToInteger(str, base = 10) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  }
  let newArr = str.split('').map(element => DIGITS[element]);
  let result = 0;
  newArr.forEach(num => (result = (base * result) + num));
  return result;
}

function stringToSignedInteger(str) {
  checkForNegative(str);

  if (isNegative) {
    return convertedStr * -1;
  } else {
    return convertedStr;
  }

}

function checkForNegative(str) {
  let newArr = str.split('')
  let absoluteStr = '';

  if(newArr[0] === '-') {
    isNegative = true;
    newArr.shift();
    newArr.join('');
    absoluteStr = newArr.join('');
  } else if(newArr[0] === '+') {
    isNegative = false;
    newArr.shift();
    newArr.join('');
    absoluteStr = newArr.join('');
  } else {
    absoluteStr = str;
  }

  convertedStr = stringToInteger(absoluteStr);
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100")  === 100); // logs true
console.log(stringToSignedInteger("4235321")  === 4235321); // logs true
console.log(stringToSignedInteger("-123570") === -123570); // logs true
console.log(stringToSignedInteger("+103450") === 103450); // logs true