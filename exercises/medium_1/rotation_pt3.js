function maxRotation(num) {
  let numberDigits = String(num).length;
  for (let i = numberDigits; i >= 2; i--) {
    num = rotateRightmostDigits(num, i);
  }
  return num;
}

function rotateRightmostDigits(number, count) {
  let strNum = String(number);
  let firstPart = strNum.slice(0, strNum.length - count);
  let secondPart = strNum.slice(strNum.length - count);
  let resultStr = firstPart + rotateString(secondPart);

  return resultStr;
}

function rotateString(str) {
  return str.slice(1) + str[0];
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845