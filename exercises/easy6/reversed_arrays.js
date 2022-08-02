/**
 * PEDAC
 * 
 * P. Understand the problem
 * - Inputs
 * an array
 * 
 * - Outputs
 * an array
 * 
 * - Explicit Requirements
 * The resulting array should contain all the elements in the first array in reverse order. This array must
 * be mutated
 * 
 * - Identify Rules
 * Do not use Array.prototype.reverse() method
 * 
 * - Mental model (optional)
 * Iterate through the array and remove each element from the array. Return those elements into the array 
 * in the reverse order.
 * 
 * E. Examples/Test Cases
 * - Validate understanding of the problem
 * inputs:
 * [1, 2, 3, 4]
 * ["a", "b", "c", "d", "e"]
 * ["abc"]
 * []
 * 
 * outputs:
 * [4, 3, 2, 1] 
 * logs true
 * ["e", "d", "c", "b", "a"] 
 * logs true
 * ["abc"] 
 * logs true
 * [] 
 * logs true
 * 
 * D. Data Structure (Usually this is paired with the algorithm step)
 * - How can we represent data when converting input to output
 * use a for loop to iterate through the array and output it into an array
 * 
 * A. Algorithm
 * - Steps for converting input to output
 * 1. Create an empty array variable called storedResult
 * 2. iterate through the input array
 *  1. remove first element of array and replace it with the last element in the array
 * 3. return array
 * 
 * 
 * C. Code with intent
 * - Implementation of algorithm
 */

function reverse(array) {
  for( let i = 0; i < array.length; i++ ) {
    array.splice(i, 0, array.pop());
  }
  return array;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true