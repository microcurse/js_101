// first split the string into an array of words delimited by spaces
// iterate through each word of the array
// split it into another array
// capitalize the first element in that index
// join that array again
// join the resulting array
// return the resulting array

function wordCap(str) {
  let words = str.split(' ');
  let result = '';

  for (let i = 0; i < words.length; i++) {
    result += words[i][0].toUpperCase() + words[i].substring(1) + ' ';
  }

  return result;
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'