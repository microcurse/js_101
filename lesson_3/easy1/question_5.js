/**
 * What will the following code output?
 * 
 */

console.log(false == '0');
console.log(false === '0');

/**
 * Solution:
 * The following code will output true then false. Using non-strict equality
 * operator == will coerce the string '0' to the same type (boolean). Since 0 is
 * considered a falsy value, it logs true to the console when evaluated. The 
 * second line logs false to the console because the strict equality operator
 * === checks for both value and type. Since boolean and string are of different
 * types, it evaluates to false.
 * 
 */