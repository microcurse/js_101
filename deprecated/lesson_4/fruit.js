let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(items) {
  let fruits = {};

  for (const fruit in items) {
    if (items[fruit] === 'Fruit') {
      fruits[fruit] = items[fruit];
    }
  }
  return fruits;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
console.log(produce); // => { apple: 'Fruit', carrot: 'Vegetable', pear: 'Fruit', broccoli: 'Vegetable' }