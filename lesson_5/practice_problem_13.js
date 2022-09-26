let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let result = arr.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 !== 0).reduce((prev, curr) => prev + curr);
  
  let oddSumB = b.filter(num => num % 2 !== 0).reduce((prev, curr) => prev + curr);

  return oddSumA - oddSumB;
});

console.log(result);