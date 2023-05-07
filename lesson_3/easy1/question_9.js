/**
 * In the previous problem, our first answer added 'Dino' to the array 
 * like this:
 * 
 */

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino");

// How can we add multiple items to our array? ('Dino' and 'Hoppy')

/**
 * Solution:
 * We can add multiple items to our array by passing more arguments to the
 * Array.prototype.push method.
 * 
 */

flintstones.push('Dino', 'Hoppy');
console.log(flintstones);