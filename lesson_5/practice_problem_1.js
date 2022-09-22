let arr = ['10', '11', '9', '7', '8'];

let descendingSort = arr.sort((a, b) => {
  return Number(b) - Number(a);
});

console.log(descendingSort);