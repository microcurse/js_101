function digitList(numbers) {
  let strNums = numbers.toString().split('');
  let result = [];
  strNums.forEach( num => {
    result.push(Number(num));
  });
  return result;
}

/**
 * Solution using .map() method
 * 
 */

function digitList(numbers) {
  let strNums = numbers.toString().split('');
  const result = strNums.map( num => Number(num) );
  return result;
}

/**
 * Solution with refactored .map() method usage
 */

function digitList(numbers) {
  return numbers.toString().split('').map(num => Number(num));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]