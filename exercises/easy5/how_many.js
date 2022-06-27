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
 * A. Algorith
 * - Steps for converting input to output
 * 1. create variable called 'result' to store the element and it's number of occurences
 * 2. sort the array alphabetically
 * 3. iterate through each string in the input array
 *  1. create a variable called  'currElement' to store current string (array[i]) being iterated
 *  2. create a variable called 'currCount' to store how many occurences of that string. starts at 1
 *  3. create a variable called 'compare' to store array[i + 1] to compare with currElement
 *  4. while currElement === compare,
 *    1. currCount += 1
 *    2. compare = array[i + currCount];
 *  5. if the resulting array doesn't already include the currElement
 *    1. result.push([currElement, currCount]);
 *  last. set 'currCount' to 0 when there is no more occurences of currElement in array
 * 4. return the result variable
 * 
 * C. Code with intent
 * - Implementation of algorithm
 */

function countOccurrences(array) {
  let result = [];
  let sortedArray = array.sort();

  for (let i = 0; i < sortedArray.length; i += 1) {
    let currElement = sortedArray[i];
    let currCount = 1;
    let compare = sortedArray[i + 1];

    while (currElement === compare) {
      currCount += 1;
      compare = array[i + currCount];
    }
    
    result.push([currElement, currCount]);
  }
  return result;
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2