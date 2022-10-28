function fridayThe13ths(year) {
  // Takes year as arguement
  // return number of Friday the 13ths in that year
  // Year is greater than 1752 which is when the United Kingdom adopted the modern Gregorian Calendar.
  // same calendar will be used for the forseeable future

  // How do I find out how many Friday the 13ths are in a year?

  // Leap year rule:
  // Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 
  // 100, but these centurial years are leap years if they are exactly divisible by 400. For example, the years 
  // 1700, 1800, and 1900 are not leap years, but the year 2000 is

  // Algorithm for solving the problem:
  // 1. Iterate over all the months of the given year.
  // 2. For each month, get the day that falls on the 13th.
  // 3. Count the 13ths that fall on a Friday.
  // 4. Return the count.
  
  // Check if a year is a leap year. 
  // If it is, Feb has 29 days. 
  // If not Feb has 28 days.

  let thirteenths = [];

  for (let month = 0; month < 12; month += 1) {
    thirteenths.push(new Date(year, month, 13));
  }

  // console.log(thirteenths);
  return thirteenths.filter(day => day.getDay() === 5).length;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2