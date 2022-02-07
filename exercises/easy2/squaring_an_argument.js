function multiply(num1, num2) {
  return num1 *= num2;
}

function power(num, exp) {
  if(exp === 1) {
    return multiply(num, 1);
  }
  return num * power(num, exp - 1);
}

// console.log(power(5) === 25); // logs true
// console.log(power(-8) === 64); // logs true
console.log(power(5, 4) === 625); // logs true