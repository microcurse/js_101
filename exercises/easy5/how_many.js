/**
 * PEDAC
 * 
 * P. Understand the problem
 * - Inputs
 * array of strings
 * 
 * - Outputs
 * object with each element with number of occurences of said element alongside it
 * 
 * - Explicit Requirements
 * case sensitive, count each occurence of element and place that number alongside when logged to console
 * 
 * - Identify Rules
 * there aren't specific rules on the output so I'm going to be using objects to reach a solution
 * 
 * - Mental model (optional)
 * Count the number of times each element occurs in the array. Then log the resulting element with the number
 * of times it occurs next to it
 * 
 * E. Examples/Test Cases
 * - Validate understanding of the problem
 * inputs: 
 * ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];
 * 
 * outputs:
 * {car: 4,
 *  truck: 3,
 *  SUV: 1,
 *  motorcycle: 2
 * }
 * 
 * D. Data Structure (Usually this is paired with the algorithm step)
 * - How can we represent data when converting input to output
 * 
 * A. Algorithm
 * - Steps for converting input to output
 * 1. create variable called 'result' to store the element and it's number of occurences.
 * 2. iterate through the array of strings
 *  1. set result property to itself or that property set to 0 if it doesn't exist
 *  2. increment that property's value by 1
 * 3. create a function to log the result of the result object that accepts an object as an argument
 *  1. for every item in the resulting object
 *    1. log the property of the resulting item and it's value
 * 4. use that function inside the count function to log the result to the console
 * C. Code with intent
 * - Implementation of algorithm
 */

function countOccurrences(array) {
  const result = {};

  for (let i = 0; i < array.length; i += 1) {
    result[array[i]] = result[array[i]] || 0;
    result[array[i]] += 1;
  }
  
  logOccurrences(result);
}

function logOccurrences(occurrences) {
  for (let item in occurrences) {
    console.log(`${item} => ${occurrences[item]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2