function featured(num) {
  let result = 0;
  const MAX_POSSIBLE_NUM = 9876543201;

  while (result <= num || result % 2 === 0 || checkForDuplicateDigits(result)) {
    result += 7;
    if (result > MAX_POSSIBLE_NUM) {
      return "There is no possible number that fulfills those requirements."
    }
  }

  return result;
}

function checkForDuplicateDigits(num) {
  return (/([0-9]).*?\1/).test(num.toString());
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."