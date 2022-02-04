/**
 *  get a range of numbers between 1 and supplied number
 *  - determine all numbers within that range that are multiples of either 3 or 5
 *  create an empty array to store numbers to be added
 *    - if current number / 3 has no remainder, store that in an array of numbers to be added
 *    - if current number / 5 has no remainder, store that in an array of numbers to be added
 *  use Array.reduce() to get sum of numbers
 * 
 *  Assume that the number passed in is an integer greater than 1
 * 
 */

function multisum(num) {
  let arr = [];
  for (let counter = 1; counter <= num; counter += 1) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      arr.push(counter);
    }
  }
  return arr.reduce((sum, current) => sum + current);
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168