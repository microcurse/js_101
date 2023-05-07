/**
 * Will the code below raise an error?
 * 
 */

let numbers = [1, 2, 3];
numbers[6] = 5;

/**
 * Solution:
 * This will not raise an error. It will create empty elements in the array equal to
 * the element which the reassignment designates. It will then assign the number
 * 5 to the 6th element in the array. Elements at index 3, 4, and 5 will be
 * undefined.
 * 
 * LS Solution:
 * It doesn't raise an error. The JavaScript engine will treat array slots 3 through 
 * 5 as empty slots.
 * 
 */

// Bonus
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

/**
 * Solution:
 * numbers[4] will return undefined.
 * 
 * LS Solution:
 * numbers[4] will output undefined, but the slot is empty -- it doesn't have a value, 
 * not even undefined, in spite of what the line returns. This distinction is important: 
 * if you use map(), for instance, the new array will also have empty slots in the 
 * corresponding positions. On the other hand, slots with a value of undefined will be 
 * remapped based on the return value of the callback:
 * 
 */

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
numbers.map(() => 10);  // => [ 10, 10, 10, <2 empty items>, 10, 10 ]