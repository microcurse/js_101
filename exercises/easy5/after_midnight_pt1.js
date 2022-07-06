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
// const MINS_PER_HOUR = 60;
// const HRS_PER_DAY = 24;
// const MINS_PER_DAY = HRS_PER_DAY * MINS_PER_HOUR;

// function leadingZero(number) {
//   return number < 10 ? `0${number}` : String(number);
// }

// function formatTime(hours, minutes) {
//   return `${leadingZero(hours)}:${leadingZero(minutes)}`;
// }

// function timeOfDay(deltaMinutes) {
//   if (deltaMinutes < 0) {
//     deltaMinutes = (deltaMinutes % MINS_PER_DAY) + MINS_PER_DAY;
//   } else {
//     deltaMinutes = deltaMinutes % MINS_PER_DAY;
//   }

//   let hours = Math.floor(deltaMinutes / MINS_PER_HOUR);
//   let minutes = deltaMinutes % MINS_PER_HOUR;

//   return formatTime(hours, minutes);
// }

/**
 * Further Exploration
 * PEDAC
 * 
 * P. Understand the problem
 * - Inputs
 * number representing minutes
 * 
 * - Outputs
 * a string representing the day and time in 24 hour format "Thursday hh:mm"
 * 
 * - Explicit Requirements
 * Use JavaScript's Date class to return the day of the week
 * Assume deltaMinutes is the number of minutes before or after midnight between Saturday and Sunday
 * 
 * - Identify Rules
 * deltaMinutes is the number of minutes before or after midnight between Saturday and Sunday.
 *
 * - Mental model (optional)
 * Accept a number of minutes and determine if it's negative or positive so we know if we're going backward
 * or forward in time. The JavaScript Date classes calculate time in milliseconds, therefore we need 
 * a variable that calculates number of milliseconds in a minute. In order to calculate the day of the week, 
 * we need a reference time to compare the given deltaMinutes with. Create a function which outputs the 
 * resulting calculations into a string format. "Tuesday 21:30". 
 * 
 * E. Examples/Test Cases
 * - Validate understanding of the problem
 * inputs: 
 * integers as minutes
 * 0 | -3 | 35 | -1437 | 3000 | 800 | -4231
 * 
 * outputs:
 * string representing hh:mm
 * "Sunday 00:00" | "Saturday 23:57" | "Sunday 00:35" | "Saturday 00:03" | "Tuesday 02:00" | "Sunday 13:20" | "Thursday 01:29"
 * 
 * D. Data Structure (Usually this is paired with the algorithm step)
 * - How can we represent data when converting input to output
 * 
 * A. Algorithm
 * - Steps for converting input to output
 * 1. Create a constant variable for MILLISECONDS_PER_MINUTE = 6000
 * 2. Create a constant variable for REFERENCE_TIME 
 *  1. REFERENCE_TIME is a new date object starting from the beginning of this week (Sunday July 3, 2022, 00:00:00)
 *  2. use the getTime() method to get the reference time in milliseconds
 * 3. Create a constant array variable for DAY_OF_THE_WEEK which contains Sun - Sat
 * 4. Create a new date object using the REFERENCE_TIME + deltaMinutes * MILLISECONDS_PER_MINUTE
 * 5. Use the index of the array to return the proper day of the week when using the getDay method
 * 6. Use the getHours to get the hours from the date object
 * 7. Use the getMinutes method to get the minutes from the date object
 * 8. Return the Day HH:MM using the leadingZeros function to add leading zeros if there aren't any
 * 
 * C. Code with intent
 * - Implementation of algorithm 
 */

 const MILLISECONDS_PER_MINUTE = 60000;
 const REFERENCE_TIME = new Date('July 3, 2022 00:00:00').getTime();
 const DAY_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

 function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
 }
 
 function formatTime(date) {
  let day = DAY_OF_WEEK[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  return `${day} ${leadingZero(hours)}:${leadingZero(minutes)}`;
 }
 
 function timeOfDay(deltaMinutes) {
  let date = new Date(REFERENCE_TIME + deltaMinutes * MILLISECONDS_PER_MINUTE);

  return formatTime(date);
 }

console.log(timeOfDay(0) === "Sunday 00:00");
console.log(timeOfDay(-3) === "Saturday 23:57");
console.log(timeOfDay(35) === "Sunday 00:35");
console.log(timeOfDay(-1437) === "Saturday 00:03");
console.log(timeOfDay(3000) === "Tuesday 02:00");
console.log(timeOfDay(800) === "Sunday 13:20");
console.log(timeOfDay(-4231) === "Thursday 01:29");
