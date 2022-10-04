function palindromes(str) {
  let result = [];
  let subStr = substrings(str);

  subStr.forEach((element) => {
    if (element.length > 1 && element === element.split('').reverse().join('')) {
      result.push(element);
    }
  });

  return result;
}

function substrings(str) {
  let result = [];

  for (let i = 0; i < str.length; i ++) {
    let subStr = str.substring(i);
    result = result.concat(leadingSubstrings(subStr));
  }

  return result;
}

function leadingSubstrings(str) {
  let result = [];

  for (let i = 1; i <= str.length; i++) {
    result.push(str.slice(0, i));
  }

  return result;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]