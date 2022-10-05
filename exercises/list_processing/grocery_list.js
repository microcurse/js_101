function buyFruit(arr) {
  let result = [];

  arr.forEach((fruits) => {
    for (let i = 0; i < fruits[1]; i ++) {
      result.push(fruits[0]);
    }
  });

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]