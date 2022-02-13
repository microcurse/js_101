function randomAgeBetween(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let age = Math.floor(Math.random() * (max - min + 1) + min);
  return `Teddy is ${age} years old!`;
}

console.log(randomAgeBetween(20, 120));