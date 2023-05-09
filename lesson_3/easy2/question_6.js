// Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// This code will create a nested array that looks like this:
// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

/**
 * Create a new array that contains all of the above values,
 * but in an un-nested format.
 * 
 */

// Solution using the spread syntax
flintstones = [].concat(...flintstones);
console.log(flintstones);

// Solution using the .flat() method
console.log(flintstones.flat());

// Solution using the .reduce() method
flintstones = flintstones.reduce((acc, curr) => {
  return acc.concat(curr);
}, []); 
console.log(flintstones);