/**
 * PEDAC
 * 
 * INPUT
 * function that accepts any array as an argument
 * 
 * OUTPUT
 * return an array that contains two elements. each of which is an array.
 * 
 * ALGORITHM
 * write a function that accepts an array as an argument
 * - use array.prototype.slice() to return a shallow copy of a portion of an array
 * return array that contains two arrays
 * 
 */

function halvsies(array) {
  let newArray = [];
  let firstHalf = array.slice(0, Math.ceil((array.length / 2)));
  let secondHalf = array.slice(Math.ceil((array.length / 2)))
  newArray = [firstHalf, secondHalf];
  return newArray;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]