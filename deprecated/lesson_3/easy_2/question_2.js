let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.slice().reverse();
console.log(reversedNumbers);
console.log(numbers);

numbers = [1, 2, 3, 4, 5];
let reversedNumbers2 = [...numbers].sort((num1, num2) => num2 - num1);
console.log(reversedNumbers2);
console.log(numbers);

// Bonus questioN: use .forEach() method
numbers = [1, 2, 3, 4, 5];
let reversedNumbers3 = [];
numbers.forEach((number) => {
  reversedNumbers3.unshift(number);
});
console.log(reversedNumbers3);
console.log(numbers);