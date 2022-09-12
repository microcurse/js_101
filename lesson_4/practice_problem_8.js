let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintstonesNumbered = {}

flintstones.forEach((ele, idx) => {
  flintstonesNumbered[ele] = idx;
});

console.log(flintstonesNumbered);

// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }