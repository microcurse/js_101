/**
 * Write three different ways to remove all of the elements from the following array
 * 
 */
let numbers = [1, 2, 3, 4];

// solution 1: using splice()
numbers.splice(0, numbers.length);
console.log(numbers);

// solution 2: using pop()
while (numbers.length) {
  numbers.pop();
}
console.log(numbers);

// solution 3: using shift()
while (numbers.length) {
  numbers.shift();
}
console.log(numbers);