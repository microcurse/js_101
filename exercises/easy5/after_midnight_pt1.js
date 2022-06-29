/**
 * PEDAC
 * 
 * P. Understand the problem
 * - Inputs
 * number representing minutes
 * 
 * - Outputs
 * a string of numbers representing the time of day in 24 hour format
 * 
 * - Explicit Requirements
 * return the time of day in 24 hour format hh:mm
 * the function should work with any integer input including negatives
 * if the number of minutes is positive, the time is after midnight
 * if the number of minutes is negative, the time is before midnight
 * 
 * - Identify Rules
 * cannot use javascript's Date class method
 * output must be in a string format
 *
 * - Mental model (optional)
 * Accept a number as minutes. If the number is positive the starting result will be 00:00 to represent midnight.
 * Add the incoming minutes into the result (00:00) and check if the number is 60 or larger increment 
 * the hour by how many 60s can be divided into that number. The remainder will then be placed into 
 * the minutes section. If the number is negative then the resulting output starts at 24:00.
 * Subtract the incoming minutes from 60 and subtract 1 hour for as many times as 60 can divide into the 
 * incoming number. Log the result which should equal to true based on the test case
 * 
 * E. Examples/Test Cases
 * - Validate understanding of the problem
 * inputs: 
 * integers as minutes
 * 0 | -3 | 35 | -1437 | 3000 | 800 | -4231
 * 
 * outputs:
 * string representing hh:mm
 * "00:00" | "23:57" | "00:35" | "00:03" | "02:00" | "13:20" | "01:29"
 * 
 * D. Data Structure (Usually this is paired with the algorithm step)
 * - How can we represent data when converting input to output
 * range of numbers for minutes is 00 - 59
 * range of numbers for hours is 00 - 24
 * 
 * A. Algorithm
 * - Steps for converting input to output
 * 1. Create a variable hour = 60 (minutes)
 * 2. Create a variable day = 24 (hours)
 * 3. Create a variable resultHrs = 0
 * 4. Create a variable resultMin = 0
 * 3. Check if the minutes are negative or positive using Math.sign method
 *  1. if the minutes are positive and is < 60
 *    1. set resultMins = minutes
 *  2. else if minutes are positive and >= than 60
 *    1. set resultHrs = Math.floor(minutes divided by hour)
 *    2. minutes += minutes % hour
 *    3. if resultHrs > 23
 *      1. resultHrs += Math.floor(resultHrs divided by day)
 *  3. else if minutes are negative and < 60
 *    1. set minutes to positive so we can math it properly
 *    2. set resultHrs = 23
 *    3. set resultMins = 60
 *    4. resultMins -= minutes
 *  4. else if minutes are negative and >= 60
 *    1. set minutes to positive so we can math it properly
 *    2. set resultHrs = Math.floor(minutes divided by hour)
 *    3. minutes -= minutes % hour
 *    4. if resultHrs > 23
 *      1. resultHrs -= Math.floor(resultHrs divided by day)
 * 4. convert number to hh:mm format and log result
 *   1. console.log(`${String(resultHrs).padStart(2, '0')}:${String(resultMins).padStart(2, '0')});
 *    
 * 
 * C. Code with intent
 * - Implementation of algorithm
 */

function timeOfDay(minutes) {
  let hour = 60;
  let day = 24;
  let resultHrs = 0;
  let resultMins = 0;

  if (Math.sign(minutes) === 1 && minutes < 60) {
    resultMins = minutes;
  } else if (Math.sign(minutes) === 1 && minutes >= 60) {
    resultHrs = Math.floor(minutes / hour);
    minutes += minutes % hour;
    if (resultHrs > 23) {
      resultHrs += Math.floor(resultHrs / day);
    }
  } else if (Math.sign(minutes) === -1 && Math.abs(minutes) < 60) {
    minutes = Math.abs(minutes);
    resultHrs = 23;
    resultMins = 60;
    resultMins -= minutes;
  } else if (Math.sign(minutes) === -1 && Math.abs(minutes) >= 60) {
    minutes = Math.abs(minutes);
    resultHrs = 23;
    resultMins = 60;
    resultHrs = Math.floor(minutes / hour);
    minutes -= minutes % hour;
    if (resultHrs > 23) {
      resultHrs -= Math.floor(resultHrs / day);
    }
  }
  console.log(`${String(resultHrs).padStart(2, '0')}:${String(resultMins).padStart(2, '0')}`);
}

timeOfDay(0);
timeOfDay(-3);
timeOfDay(35);
timeOfDay(-1437);
timeOfDay(3000);
timeOfDay(800);
timeOfDay(-4231);

// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");