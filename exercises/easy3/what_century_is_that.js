/**
 * PEDAC
 * 
 * INPUT
 * years as number
 * 
 * OUTPUT
 * centuries, ex. 1901 - 2000 = 20th Century
 * 
 * ALGORITHM
 * Centuries are a span of 100 years
 * Use a guard clause for numbers less than 100 years
 *  - if year < 100
 *    - return 1st
 * set centuryNum = year / 100;
 * 
 * Logic to assign 'st', 'nd', 'rd', 'th',
 * st = ends with 1 (unless 11, then = th)
 * nd = ends with 2 (unless 12, then = th)
 * rd = ends with 3 (unless 13, then = th)
 * th = ends with 4-9 || ends with 0;
 * 
 * set centryStr = String(centuryNum);
 * set endingNum = centryStr.charAt(centryStr.length - 1);
 * set secondToLast = centryStr.charAt(0);
 * 
 * if (endingNum === 1 && secondToLast !== 1)
 *  then centryStr + 'st'
 * 
 * return centryStr
 */

function century(year) {
  let centuryNum = Math.ceil(year / 100);
  let centuryStr = String(centuryNum);
  let endingNum = centuryStr.charAt(centuryStr.length - 1);
  let secondToLast = centuryStr.charAt(centuryStr.length - 2);

  if (endingNum === '1' && secondToLast !== '1') {
    return centuryStr + 'st';
  } else if (endingNum === '2' && secondToLast !== '1') {
    return centuryStr + 'nd';
  } else if (endingNum === '3' && secondToLast !== '1') {
    return centuryStr + 'rd';
  } else {
    return centuryStr + 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
