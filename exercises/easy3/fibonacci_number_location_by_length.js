/**
 * 
 * Write a function that calculates and returns the index of the first Fibonacci number that has
 * the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)
 * 
 * Pseudocode:
 * 
 * First we need to write the fibonnaci formula
 * Next we need to accept the argument (number of digits)
 * Then we need to print the first occurance of a number with that many digits
 *  - Compare fibonacci's length (number of digits) with num
 * 
 * 
 */
function findFibonacciIndexByLength(num) {
  let a = 1n;
  let b = 1n;
  let count = 2n;
  let c;
  
  do {
    c = a + b;
    count += 1n;
    a = b
    b = c
  } while (String(c).length < num);

  return count;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.