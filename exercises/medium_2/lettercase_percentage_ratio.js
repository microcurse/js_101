function letterPercentages(str) {
  let count = str.length;

  function getPercentage(regex) {
    let matchingChars = str.match(regex) || [];
    return ((matchingChars.length / count) * 100).toFixed(2);
  }

  return {
    lowercase: getPercentage(/[a-z]/g),
    uppercase: getPercentage(/[A-Z]/g),
    neither: getPercentage(/[^a-z]/gi)
  }
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }