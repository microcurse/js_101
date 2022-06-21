let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);  //  { first: [1, 2] }

/**
 * numArray is a reference to the original array. 
 * logging object returns the altered values because they're pointing to the same array in memory.
 */