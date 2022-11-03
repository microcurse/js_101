function sumSquareDifference(num) {
  let sumSquared = 0;
  let squaredSum = 0;

  for (let count = 1; count <= num; count += 1) {
    sumSquared += count;
  }

  sumSquared = Math.pow(sumSquared, 2);

  for (let count = 1; count <= num; count += 1) {
    squaredSum += Math.pow(count, 2);
  }

  return sumSquared - squaredSum;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150