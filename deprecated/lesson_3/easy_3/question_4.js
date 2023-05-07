/**
 * What will the following code output?
 * 
 */

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// [{ first: 42 }, { second: "value2" }, 3, 4, 5]
// this is because the slice() method returns a shallow copy of a portion of an array. this means that arr1 and arr2 points to the same object in memory. if that object in memory gets reassigned or altered, then any other reference to that pointer also gets changed.