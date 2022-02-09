/**
 * 
 * Pseudocode:
 * 
 * Check if number is negative using Math.sign(x)
 * 
 * Math.sign() returns either a +/- 1 depending on what gets passed as an argument.
 * If this argument is not a number, it is implicitly converted to one.
 * 
 * 
 */

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  let result = '';

  do {
    let remainder = num % 10;
    num = Math.floor(num / 10);

    result = DIGITS[remainder] + result;
  } while (num > 0);

  return result;
}

function signedIntegerToString(num) {
  let forConversion = Math.abs(num);

  switch (Math.sign(num)) {
    case -1:
      return `-${integerToString(forConversion)}`;
    case +1:
      return `+${integerToString(forConversion)}`;
    default:
      return `${integerToString(forConversion)}`;
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");