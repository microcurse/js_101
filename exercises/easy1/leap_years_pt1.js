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
  let toggle = false;
  if(year % 400 === 0) {
    toggle = true;
  } else if(year % 100 === 0){
    toggle = false;
  } else if(year % 4 === 0) {
    toggle = true;
  }
  console.log(toggle);
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true