function removeVowels(strArr) {
  return strArr.map(string => string.replace(/[aeiou]/gi, ""));
}

// function checkVowels(str) {
//   return 'aeiou'.includes(str.split(''));
// }

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]