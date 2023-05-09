// Starting with the string:

let famousWords = "seven years ago...";

// show two different ways to put the expected "Four score and " in front of it.

/**
 * Solution using the + operator
 * 
 */

let firstPart = "Four score and ";

console.log(firstPart + famousWords);

/**
 * Solution using the .concat() string method
 * 
 */

console.log(firstPart.concat(famousWords));