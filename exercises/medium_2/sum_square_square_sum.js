function sumSquareDifference(count) {
  let sum = 0;
  let sumOfSquares = 0;

  for (let num = 1; num <= count; num += 1) {
    sum += num;
    sumOfSquares += Math.pow(num, 2);
  }
  return Math.pow(sum, 2) - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150