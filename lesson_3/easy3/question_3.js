// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

/**
 * Solution:
 * The code above will output "hello there".
 * The variable str1 is declared and initialized to the string "hello there" on
 * line 1. The variable str2 is declared and initialized to the value of str1 which 
 * is a new string "hello there" on line 2. str2 is reassigned on line 3 to the 
 * string "goodbye!". Since str2 was assigned to a new string "hello there" on 
 * line 2, this does not affect the value of str1. Thus, printing "hello there" to 
 * the console.
 * 
 */