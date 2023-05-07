/**
 * How can you determine whether a given string ends with an exclamation mark (!)?
 * 
 */

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

/**
 * Solution:
 * You can determine whether a given string ends with an exclamation mark
 * by calling String.prototype.includes method on str1 and str2 with an
 * argument of an exclamation mark (!). The includes() method returns a
 * boolean value of true or false.
 * 
 * LS Solution:
 * 
 */

str1.endsWith("!"); // true
str2.endsWith("!"); // false