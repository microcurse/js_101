function oddities(arr) {
  let newArr = arr.filter( (element, index) => {
    if (index % 2 === 0) {
      return element;
    };
  });
  return newArr;
}

function evenly(arr) {
  let newArr = arr.filter( (element, index) => {
    if (index % 2 === 1) {
      return element;
    };
  });
  return newArr;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log(evenly([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evenly([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenly(["abc", "def"])); // logs ['def']
console.log(evenly([123])); // logs []
console.log(evenly([])); // logs []