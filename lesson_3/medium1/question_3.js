// Alan wrote the following function, which was intended to return all of the 
// factors of number:

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

function factors(number) {
  let divisor = number;
  let factors = [];

  if (divisor === 0 || Math.sign(divisor) === -1) {
    return 'Please pass a number greater than 0';
  };

  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }

  return factors;
}

console.log(factors(50));

// Bonus: What is the purpose of number % divisor === 0 in the code?
// The purpose is to check if the divisor is a factor of the number. If the expression
// doesn't have a remainder, it must be a factor of the given number