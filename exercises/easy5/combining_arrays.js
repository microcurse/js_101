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
 * write function that checks for duplicates
 * - use foreach to iterate through the comparison array
 * - use includes() to check if the current iteration matches with the current comparison
 * - if it doesn't, output that iteration into the resulting array
 * - return resulting array
 * write function that accepts two arrays
 * - check for duplicates by running the arrays through the check for dupes.
 * - concat them into one array
 * log result
 * 
 */

function copyNonDupsTo(resultArray, array) {
  array.forEach(element => {
    if(!resultArray.includes(element)) {
      resultArray.push(element);
    }
  });
}

function union(array1, array2) {
  let newArray = [];
  copyNonDupsTo(newArray, array1);
  copyNonDupsTo(newArray, array2);
  return newArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]