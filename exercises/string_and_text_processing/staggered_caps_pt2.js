function staggeredCase(str, onlyLetters = true) {
  let needUpper = true;

  return str.split('').map(char =>{
    if (onlyLetters) {
      char = char.toLowerCase();
  
      if (char >= 'a' && char <= 'z') {
        if (needUpper) {
          needUpper = false;
          return char.toUpperCase();
        } else {
          needUpper = true;
          return char.toLowerCase();
        }
      } else { 
        return char;
      }
    } else {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    }
  }).join('');
}

// console.log(staggeredCase("I Love Launch School!"));
// console.log(staggeredCase("ALL CAPS"));
// console.log(staggeredCase("ignore 77 the 444 numbers"));
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);