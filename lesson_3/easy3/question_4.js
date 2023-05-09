// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

/**
 * Solution: The above code outputs the array [{ first: "value1" }, { second: "value2" }, 3, 4, 5] The variable arr1 is declared and initialized to the array  [{ first: "value1" }, { second: "value2" }, 3, 4, 5] on line 1. The variable arr2 is declared and initialized to the return value of calling the .slice() method on arr1. The .slice() method returns a shallow copy of arr1 which means the original array will not be modified if there are any mutations to arr2. Thus, printing [{ first: "value1" }, { second: "value2" }, 3, 4, 5] to the console on the last line of the snippet.
 * 
 */

