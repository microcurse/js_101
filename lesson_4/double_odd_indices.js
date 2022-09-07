let myNumbers = [1, 4, 3, 7, 2, 6];
function doubleOddIndices(numbers) {
  let doubledNums = [];

  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 1) {
      doubledNums.push(numbers[i] * 2);
    } else {
      doubledNums.push(numbers[i]);
    }
  }

  return doubledNums;
}

console.log(doubleOddIndices(myNumbers));  // => [1, 8, 3, 14, 2, 12]

// not mutated
console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]