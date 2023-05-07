// Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

// Solution
let munstersDescLowerCased = munstersDescription.toLowerCase();
let capitalized = munstersDescLowerCased[0].toUpperCase() + munstersDescLowerCased.slice(1);
console.log(capitalized);