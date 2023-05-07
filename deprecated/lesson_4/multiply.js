let myNumbers = [1, 4, 3, 7, 2, 6];

function multiply(numbers, multiple) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * multiple);
  }

  return result;
}

console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]