let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let result = Object.values(obj).map(element => {
    if (element['type'] === 'fruit') {
      return (element['colors'].map(chars => chars[0].toUpperCase() + chars.slice(1)));
    } else {
      return element['size'].toUpperCase();
    }
});

console.log(result);