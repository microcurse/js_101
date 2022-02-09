const stringy = function outputOnesAndZeroes(num) {
  let output = '';
  do {
    output += '1';
    if(num > output.length) {
      output += '0';
    }
  } while (num > output.length);
  console.log(output);
}
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
stringy(20);    // "10101010101010101010"