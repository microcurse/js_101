/**
 * PEDAC
 * 
 * P. Understand the problem
 * - Inputs
 * a string
 * 
 * - Outputs
 * true or false
 * 
 * - Explicit Requirements
 * return true if all parentheses in string are properly balanced, false otherwise
 * 
 * - Identify Rules
 * parentheses must occur in matching '(' and ')' pairs. Balanced pairs must each start with a (, not a )
 * 
 * - Mental model (optional)
 * Keep a tally of the ocurrences of each left and right parentheses while iterating through the string.
 * Increment the tally by 1 if it's a left parentheses and subtract by 1 if it's a right parentheses.
 * 
 * E. Examples/Test Cases
 * - Validate understanding of the problem
 * inputs:
 * "What (is) this?"
 * "What is) this?"
 * "What (is this?"
 * "((What) (is this))?"
 * "((What)) (is this))?"
 * "Hey!"
 * ")Hey!("
 * "What ((is))) up("
 * 
 * outputs:
 * true
 * false
 * false
 * true
 * false
 * true
 * false
 * false
 * 
 * D. Data Structure (Usually this is paired with the algorithm step)
 * - How can we represent data when converting input to output
 * an array
 * 
 * A. Algorithm
 * - Steps for converting input to output
 * 1. Iterate through the string
 * 2. Create a tally variable to store tallys
 *  1. if string at idx equals a left parentheses
 *    1. add 1 to current tally count
 *  2. else if string at idx equals a right parentheses
 *    1. subtract 1 from current tally count
 * 3. if tally is less than 0, return false
 * 
 * C. Code with intent
 * - Implementation of algorithm
 */

function isBalanced(string) {
  let tally = 0;
  for (let idx = 0; idx < string.length; idx++ ) {
    if (string[idx] === '(') {
      tally += 1;
    } else if (string[idx] === ')') {
      tally -= 1;
    }
    if (tally < 0) {
      return false;
    }
  }
  return tally === 0;
};


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);