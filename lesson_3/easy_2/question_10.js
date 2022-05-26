/**
 *  PEDAC
 *  look for lower-case 't' in statements.
 *  if 't' exists, increase count by 1;
 *  print to console number of t's 
 */

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter(letter => letter === 't').length);
console.log(statement2.split('').filter(letter => letter === 't').length);