/**
 * What will the following code output?
 * 
 */

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// "hello there"
// str1 gets assigned "hello there" and str2 gets assigned a reference of str1. the next line str2 gets assigned "goodbye!" but it doesn't reassign str1. therefore, when you console.log(str1) it logs "hello there"