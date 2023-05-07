/**
 * Determine whether the following object of people and their age contains
 * an entry for 'spot'
 * 
 */

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

/**
 * Solution:
 * To determine whether the following object of people and their ages
 * contains an entry for 'Spot', we first need to convert the object's 
 * properties to an array and store it into a variable. We then use the 
 * Array.prototype.includes() method and pass an argument of 'Spot' which 
 * returns a boolean true or false.
 * 
 */

let names = Object.entries(ages);
console.log(names.includes('Spot'));


/**
 * Solution using Object.prototype.hasOwnProperty() method:
 * 
 */

console.log(ages.hasOwnProperty('Spot'));