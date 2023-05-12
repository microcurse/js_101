// What does the last line in the following code output?
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

/**
 * Solution:
 * The above code outputs the array [1, 2] to the console on line 7
 * This is because the value of the first property is passed by reference. Since that reference
 * is assigned to numArray, and we mutate that array on line 4 using the .push(2) method. We see
 * the change reflected in both the the object variable and the numArray variable.
 * 
 */