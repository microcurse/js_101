let statement = "The Flintstones Rock";
let statementArr = statement.split('').filter(char => char !== ' ');
let result = {};

statementArr.forEach(ele => {
  if (Object.keys(result).includes(ele)) {
    result[ele] += 1;
  } else {
    result[ele] = 1;
  }
});

console.log(result);

// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }