// What will the following two lines of code output?

console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

/**
 * Solution:
 * This code will first output 0.8999999999999999 to the console, then it will output false.
 * 0.8999999999999999 because Javascript uses floating point numbers for all numeric 
 * operations. Most floating point representations used on computers lack a certain amount
 * of precision, and that can yield unexpected results like these.
 * 
 */
