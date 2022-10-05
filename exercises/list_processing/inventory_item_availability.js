function transactionsFor(itemId, transactions) {
  return transactions.filter(transaction => transaction['id'] === itemId);
}

// solution using forEach
// function isItemAvailable(item, transactions) {
//   let currTransactions = transactionsFor(item, transactions);
//   let sumTransactions = 0;

//   currTransactions.forEach(element => {
//     element['movement'] === 'in' ? sumTransactions += element['quantity'] : sumTransactions -= element['quantity'];
//   });

//   return (Math.sign(sumTransactions) > 0 ? true : false);
// }

// solution using reduce
function isItemAvailable(item, transactions) {
  let total = transactionsFor(item, transactions).reduce((sum, transactions) => {
    return (transactions['movement'] === 'in' ? sum + transactions['quantity'] : sum - transactions['quantity']);
  }, 0);

  return total > 0;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
console.log(isItemAvailable(102, transactions));     // false