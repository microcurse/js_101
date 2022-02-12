/**
 * PEDAC
 * 
 * INPUT
 * number
 * number.length (converted to string)
 * 
 * OUPUT
 * number multiplied by two
 * unless it's a double number, then return the double number as is
 * 
 * ALGORITHM
 * Use a 'guard clause' to check if a number is a double number.
 * Set variable for number converted to string.
 * Check if number's length is even by using % === 0
 * if number.length is not even
 *  - multiply by 2 and return it
 * if number is even
 *  - split number in half and compare the first half to second half. 
 *  - how to split number in half?
 *    - convert to string and use .slice() method
 *    - set variable for first half of number: numStr.slice(0, (strNum.length / 2))
 *    - set variable for last half of number: numStr.slice((strNum.length / 2), -1)
 *    - if first half is equal to second half
 *      - return number converted back to a number
 */

function twice(num) {
  let numStr = String(num);
  let firstHalf = numStr.slice(0, (numStr.length / 2));
  let secondHalf = numStr.slice((numStr.length / 2), numStr.length);

  if (numStr.length % 2 === 1) {
    return num * 2
  } else if (firstHalf === secondHalf) {
    return num;
  }
  return num * 2;
}


console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676