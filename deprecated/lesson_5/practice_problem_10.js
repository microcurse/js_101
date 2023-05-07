let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortedArr = arr.map(subArr => {
  if (Number(subArr[0])) {
    return subArr.slice().sort((a, b) => b - a);
  } else {
    return subArr.slice().sort().reverse();
  }
});

console.log(sortedArr);