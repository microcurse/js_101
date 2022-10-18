function fibonacci(num) {
  let start = [1, 1];

  for (let i = 3; i <= num; i++) {
    start = [start[1], start[0] + start[1]]
  }
  return start[1];
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050