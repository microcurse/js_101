/**
 * PEDAC
 * 
 * INPUT
 * two arrays as arguments
 * 
 * OUTPUT
 * returns an array containing the union of the values from the two
 * 
 * ALGORITHM
 * concatenate arrays
 * find duplicates, if there are duplicates, remove the duplicates
 * log result
 * 
 */

function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union(arr1, arr2) {
  const newArray = [];
  copyNonDupsTo(newArray, arr1);
  copyNonDupsTo(newArray, arr2);
  return newArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]