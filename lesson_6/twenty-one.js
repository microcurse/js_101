const readline = require('readline-sync');
const DECK = [
  ['H', '2'], ['H', '3'], ['H', '4'], ['H', '5'], ['H', '6'], ['H', '7'], ['H', '8'], ['H', '9'], ['H', '10'], ['H', 'J'], ['H', 'Q'], ['H', 'K'], ['H', 'A'], ['S', '2'], ['S', '3'], ['S', '4'], ['S', '5'], ['S', '6'], ['S', '7'], ['S', '8'], ['S', '9'], ['S', '10'], ['S', 'J'], ['S', 'Q'], ['S', 'K'], ['S', 'A'], ['C', '2'], ['C', '3'], ['C', '4'], ['C', '5'], ['C', '6'], ['C', '7'], ['C', '8'], ['C', '9'], ['C', '10'], ['C', 'J'], ['C', 'Q'], ['C', 'K'], ['C', 'A'], ['D', '2'], ['D', '3'], ['D', '4'], ['D', '5'], ['D', '6'], ['D', '7'], ['D', '8'], ['D', '9'], ['D', '10'], ['D', 'J'], ['D', 'Q'], ['D', 'K'], ['D', 'A'],
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function welcomeGreeting() {
  prompt('Welcome to Twenty-One!');
}

function calculateHandTotal(cards) {
  const values = cards.map(cards[1]);

  let sum = 0;
  values.forEach((value) => {
    if (value === 'A') {
      sum += 11;
    } else if (['K', 'Q', 'J'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // Find all Aces and check if the sum is greater than 21, reduce it by 10
  values.filter((value) => value === 'A').forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function dealCards(cards) {
  return [cards.shift(), cards.shift()];
}

// Ask the user if they want to play again
function playAgain(answer) {
  while (true) {
    prompt('Play again? (y or n)');
    answer = readline.question().toLowerCase();
    if (answer === 'y' || answer === 'n' || answer === 'yes' || answer === 'no') break;
    prompt('Invalid choice.');
  }

  return answer;
}

function busted(cards) {
  if (calculateHandTotal(cards) > 21) {
    return 'Looks like you busted!';
  }
}

function playerTurn(cards) {
  while (true) {
    prompt('Hit or stay?');
    // Show player their hand here?
    let answer = readline.question();
    if (answer === 'stay' || busted()) break;
  }

  calculateHandTotal(cards);
  if (busted) {
    // problably end the game? or ask the user to play again?
    playAgain();
  } else {
    prompt('You chose to stay!'); // if player didn't bust, must have stayed to get here
  }

  // return; // something
}

function shuffleDeck(array) {
  const newArray = array;

  for (let index = newArray.length - 1; index > 0; index -= 1) {
    const otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [newArray[index], newArray[otherIndex]] = [newArray[otherIndex], newArray[index]];
  }

  return newArray;
}

// function displayResults() {

// }

// function gameResults() {

// }

function dealerTurn() {
  while (true) {
    if (cardsValue <= 17) {
      console.log(cardsValue);
      break;
    } else {
      dealCard();
    }
  }
}

/* eslint-disable no-unreachable-loop */

// Game loop
while (true) {
  welcomeGreeting();
  // Initialize the deck
  const Deck = shuffleDeck(DECK);
  let playerHand = [];
  let dealerHand = [];

  playerHand.push(...dealCards(Deck));
  dealerHand.push(...dealCards(Deck));
  console.log(playerHand);
  console.log(dealerHand);

  break;
debugger;
  // displayGame();
  // playerTurn();
}
