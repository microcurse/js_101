function substrings(str) {
  let result = [];

  for (let i = 0; i < str.length; i ++) {
    let substring = str.substring(i);
    console.log(substring);
    result = result.concat(leadingSubstrings(substring));
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


console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]