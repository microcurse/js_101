/**
 * PEDAC
 * 
 * P. Understand the problem
 * - Inputs
 * two arrays each containing a list of numbers
 * 
 * - Outputs
 * new array containing the product of each pair of numbers
 * 
 * - Explicit Requirements
 * only pair numbers for multiplication with the same index
 * 
 * - Identify Rules
 * assume that the arguments contain the same number of elements
 * 
 * - Mental model (optional)
 * Accept two arrays and multiply each element. Return the result into a new array.
 * Only multiply together numbers of the same index. Return the new array.
 * 
 * E. Examples/Test Cases
 * - Validate understanding of the problem
 * inputs: 
 * [3, 5, 7], [9, 10, 11]
 * 
 * outputs:
 * [27, 50, 77]
 * 
 * D. Data Structure (Usually this is paired with the algorithm step)
 * - How can we represent data when converting input to output
 * 
 * A. Algorith
 * - Steps for converting input to output
 * 1. create an empty array called result that will contain the product of the two arrays
 *  result = [];
 * 2. for every number that exists in the first array:
 *  array1.forEach(num, idx => num * array2[idx])
 *  1. multiply that number by the leftmost (first number) in the second array
 *  2. store that result in the result variable
 *  result.push(forEach * array2[idx])
 * 3. return the result variable
 * 
 * C. Code with intent
 * - Implementation of algorithm
 * 
 * 
 */

function multiplyList(nums1, nums2) {
  let result = [];
  nums1.forEach((num, idx) => {
    result.push(num * nums2[idx]);
  })
  return result;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]