function sumEvenNumberRow(rowNumber) {
  const rows = [];
  let startInteger = 2;

  for (let currentRowNum = 1; currentRowNum <= rowNumber; currentRowNum++ ) {
    let row = createRow(startInteger, currentRowNum);
    rows.push(row);
    startInteger = row[row.length - 1] + 2;
  }

  let finalRow = rows.pop();
  return finalRow.reduce((a, b) => a + b);
}

function createRow(startInteger, rowLength) {
  const row = [];
  let currentInteger = startInteger;
  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }
  return row;
}

// row number: 1 --> sum of integers in row: 2
// row number: 2 --> sum of integers in row: 10
// row number: 4 --> sum of integers in row: 68

console.log(sumEvenNumberRow(1)); // 2
console.log(sumEvenNumberRow(2)); // 10
console.log(sumEvenNumberRow(4)); // 68

// Algorithm:
// 1. Create an empty 'rows' array to contain all of the rows
// 2. Create a 'row' array and add it to the overall 'rows' array
// 3. Repeat 2 until all the necessary rows have been created
//   - All rows have been created when the length of the 'rows' array is equal to the input integer
// 4. Sum the final row
// 5. Return the sum

// [
//   [2],
//   [4, 6],
//   [8, 10, 12],
//   [14, 16, 18, 20],
//   ...
// ]

// Calculating the starting integer:
// Rules: First integer of a row equals to last integer of preceding row + 2
// Algorithm:
// 1. Get the last row from the rows array
// 2. Get the last integer of that row
// 2. add 2 to the integer

// start: 2, length: 1 --> [2]
// start: 4, lenght: 2 --> [4, 6]
// start: 8, lenght: 3 --> [8, 10, 12]

// console.log(createRow(2, 1)); // [2]
// console.log(createRow(4, 2)); // [4, 6]
// console.log(createRow(8, 3)); // [8, 10, 12]

// Algorithm:
// 1. Create an empty 'row' to contain the integers
// 2. Add the starting integer
// 3. Increment the starting integer by 2 to get the next integer in sequence
// 4. Repeat steps 2 and 3 until the array has reached the correct length
// 5. Return the 'row' array

// Start the loop
//  - Add start integer to the row array
//  - Increment the start integer by 2
//  - Break out of loop if length of row array equals the rowLength 