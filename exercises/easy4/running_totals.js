/**
 * PEDAC
 * 
 * INPUT
 * array
 * 
 * OUTPUT
 * array with same number of elements, but with each element's value
 * being the running total from the original array.
 * 
 * ALGORITHM
 * iterate through array
 * store first number in a variable
 * add first number to next number
 * use that result to replace the second element in array
 * take that new second element and add it to next number
 * store that result into the next element
 * 
 */

function runningTotal(numbers) {
  let sum = 0;
  const result = numbers.map((num) => {
    return sum += num;
  });
  return result;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []