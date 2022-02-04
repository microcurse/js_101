/**
 *  write a function that determines if the given year is a leap year.
 *  create two branches of logic, one for is a leap year and one for 'isn't a leap year'
 *  
 *  criteria for leap year = If year is divided evenly by 4 and divisible by 100 and 400 evenly
 * 
 *  criteria for non leap year = if year is divisible evenly by 100 and 4
 * 
 *  print true if leap year
 *  print false if not leap year
 * 
 */

function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true