// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

/**
 * Which array methods remove elements from an array?
 * .pop()
 * .slice() non-mutative. Doesn't do what we need it to.
 * .splice()
 * 
 */

// Solution using .splice() method
let removedNumbers = numbers.splice(0, numbers.length);
console.log(numbers);

// Solution using .length
numbers.length = 0;
console.log(numbers);

// Solution using .pop() method.
while (numbers.length) {
  numbers.pop()
}
console.log(numbers);
