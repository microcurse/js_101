function stringToInteger(str, base = 10) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  }
  let newArr = str.split('').map(element => DIGITS[element]);
  let result = 0;
  newArr.forEach(num => (result = (base * result) + num));
  return result;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true 