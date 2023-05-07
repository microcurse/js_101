let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let plusOne = arr.map(object => {
  let newObject = {}
  for (let props in object) {
    newObject[props] = object[props] + 1;
  }
  return newObject;
});

console.log(plusOne);
console.log(arr);