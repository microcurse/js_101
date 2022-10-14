function rotateRightmostDigits(number, count) {
  let strNum = String(number);
  // begining of number that remains unchanged
  let firstPart = strNum.slice(0, strNum.length - count);
  // rotated part of number
  let secondPart = strNum.slice(strNum.length - count);
  let resultStr = firstPart + rotateString(secondPart);

  return resultStr;
}

function rotateString(str) {
  return str.slice(1) + str[0];
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917