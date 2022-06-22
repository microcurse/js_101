/**
 * PEDAC
 * 
 * INPUT
 * an array of integers
 * 
 * OUTPUT
 * a string with the value rounded to three decimal points. string is equal to:
 * multiplying all integers together, divide the result by the number of entries.
 * 
 * ALGORITHM
 * create variable for resulting string
 * create variable for length of array
 * 
 * iterate through each element of array
 * create a variable to store the multiplication work
 * multiply next position in array with the multiply variable
 * keep doing this till there are no more elements in the array
 * 
 * divide the result by the length of the array
 * 
 * round the result down to three decimal points
 * convert result to string
 * 
 * return result
 * 
 */

function multiplicativeAverage(numbers) {
  let multiply = 1;

  for( let i = 0; i < numbers.length; i += 1 ) {
    multiply *= numbers[i]; 
  }

  return (multiply / numbers.length).toFixed(3);
};

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([7, 4, 9]));                   // "84"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"