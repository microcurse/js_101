/**
 * Further Exploration
 * PEDAC
 * 
 * P. Understand the problem
 * - Inputs
 * A string representing 24 hour time in string format (hh:mm)
 * 
 * - Outputs
 * A number in the range between 0..1439 which represents minutes before/after midnight
 * 
 * - Explicit Requirements
 * Write two functions that each take a time of day in 24 hour format.
 * The afterMidnight function counts time forward and the beforeMidnight function counts time backwards.
 * Return the number of minutes before and after midnight respectively.
 * 
 * - Identify Rules
 * Cannot use JavaScript's Date class method.
 *
 * - Mental model (optional)
 * Create two functions that accept a string (time in hh:mm) as an argument. Separate out hours and
 * minutes and convert the strings to numbers. Multiply the hours by minutes per hour and add that to the 
 * resulting minutes. This gives us our afterMidnight minutes. Use minutes per day 
 * (hours per day * minutes per hour = 1440) and subtract that from the given hours * minutes per hour + given minutes.
 * Return resulting minutes.
 * 
 * E. Examples/Test Cases
 * - Validate understanding of the problem
 * inputs:
 * "00:00"
 * "00:00"
 * "12:34"
 * "12:34"
 * "24:00"
 * "24:00"
 * 
 * outputs:
 * 0
 * 0  
 * 754
 * 686
 * 0
 * 0
 * All logging to 'true'
 * 
 * D. Data Structure (Usually this is paired with the algorithm step)
 * 
 * A. Algorithm
 * - Steps for converting input to output
 * 1.Create constant variables for calculating time:
 *  1. MINS_PER_HOUR = 60
 *  2. HRS_PER_DAY = 24
 *  3. MINS_PER_DAY = MINS_PER_HOUR * HRS_PER_DAY
 * 3. Create the afterMidnight function that accepts an argument
 *  1. Separate the hours from the minutes using split(':') method
 *  2. Convert string hours to number hours using Number('hh')
 *  3. Convert string minutes to number minutes using Number('mm')
 *  4. Multiply hours by MINS_PER_HOUR + minutes
 *  5. if hours is > 24
 *    1. return 0;
 *  6. return the result
 * 4. Create beforeMidnight function that accepts an argument
 *  1. Separate the hours from the minutes using split(':') method
 *  2. Convert string hours to number hours using Number('hh')
 *  3. Convert string minutes to number minutes using Number('mm')
*   4. Multiply hours by MINS_PER_HOUR + minutes
 *  5. if hours is > 24
 *    1. return 0;
 *  6. subtract MINS_PER_DAY from result of (hours * MINS_PER_HOUR + minutes)
 *  7. return the result
 * 
 *  
 * C. Code with intent
 * - Implementation of algorithm 
 */

const MINS_PER_HOUR = 60;
const HRS_PER_DAY = 24;
const MINS_PER_DAY = MINS_PER_HOUR * HRS_PER_DAY;

function afterMidnight(time) {
  let hours = Number(time.split(':')[0]);
  let minutes = Number(time.split(':')[1]);
  
  if (hours >= 24 || hours === 0) {
    return 0;
  }

  return hours * MINS_PER_HOUR + minutes;
}

function beforeMidnight(time) {
  let hours = Number(time.split(':')[0]);
  let minutes = Number(time.split(':')[1]);
  
  if (hours >= 24 || hours === 0) {
    return 0;
  }

  return (MINS_PER_DAY - (hours * MINS_PER_HOUR + minutes));
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);