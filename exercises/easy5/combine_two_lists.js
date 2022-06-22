/**
 * PEDAC
 * 
 * INPUT
 * two arrays passed as arguments
 * 
 * OUTPUT
 * new array that contains all elements from both array arguments, with each element taken in alternation
 * 
 * ALGORITHM
 * create a variable for the new array
 * 
 * > while both array's length is > 0
 * 
 * remove the firstmost element
 * place that into the new array
 * 
 * remove the firstmost element
 * place that into the new array
 * 
 * > keep doing this till both arrays are empty
 * 
 * return new array
 * 
 */

function interleave( array1, array2 ) {
  let newArray = [];

  while (array1.length > 0 && array2.length > 0) {
    newArray.push(array1.shift());
    newArray.push(array2.shift());
  }

  return newArray;
}

console.log(interleave([1,2,3], ['a','b','c']));

/**
 * Further Exploration:
 * forEach solution
 * 
 */

function interleave( array1, array2 ) {
  let newArray = [];
  
  array1.forEach(item => {
    newArray.push(item, array2.shift());
  });
  
  return newArray;
}

console.log(interleave([1,2,3], ['a','b','c']));

/**
 * Further FURTHER Exploration:
 * map() solution
 * 
 */

function interleave( array1, array2 ) {
  let newArray = [];
  
  array1.map(item => newArray.push(item, array2.shift()));

  return newArray;
}

console.log(interleave([1,2,3], ['a','b','c']));