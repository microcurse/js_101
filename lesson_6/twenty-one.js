const readline = require('readline-sync');
const SUITS = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const DECK = [
  ['H', '2'], ['H', '3'], ['H', '4'], ['H', '5'], ['H', '6'], ['H', '7'], ['H', '8'], ['H', '9'], ['H', '10'], ['H', 'J'], ['H', 'Q'], ['H', 'K'], ['H', 'A'], ['S', '2'], ['S', '3'], ['S', '4'], ['S', '5'], ['S', '6'], ['S', '7'], ['S', '8'], ['S', '9'], ['S', '10'], ['S', 'J'], ['S', 'Q'], ['S', 'K'], ['S', 'A'], ['C', '2'], ['C', '3'], ['C', '4'], ['C', '5'], ['C', '6'], ['C', '7'], ['C', '8'], ['C', '9'], ['C', '10'], ['C', 'J'], ['C', 'Q'], ['C', 'K'], ['C', 'A'], ['D', '2'], ['D', '3'], ['D', '4'], ['D', '5'], ['D', '6'], ['D', '7'], ['D', '8'], ['D', '9'], ['D', '10'], ['D', 'J'], ['D', 'Q'], ['D', 'K'], ['D', 'A'],
];
let round = 0;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function welcomeGreeting() {
  prompt('Welcome to Twenty-One!');
}

function calculateHandTotal(cards) {
  const values = cards.map((card) => card[1]);

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

  // Find all Aces and check if the sum is greater than 21, reduce its value by 10
  values.filter((value) => value === 'A').forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function dealCards(cards) {
  return [cards.shift(), cards.shift()];
}

function playAgain(answer) {
  prompt('------------------');
  while (true) {
    prompt('Play again? (yes or no)');
    answer = readline.question().toLowerCase();
    if (answer === 'y' || answer === 'n' || answer === 'yes' || answer === 'no') break;
    prompt("Sorry, please type either 'yes' or 'no'");
  }

  return answer;
}

function busted(total) {
  return total > 21;
}

function whoWon(playerHand, dealerHand) {
  const PlayerTotal = calculateHandTotal(playerHand);
  const DealerTotal = calculateHandTotal(dealerHand);

  if (PlayerTotal > 21) return 'PLAYER_BUSTED';
  if (DealerTotal > 21) return 'DEALER_BUSTED';
  if (DealerTotal < PlayerTotal) return 'PLAYER';
  if (DealerTotal > PlayerTotal) return 'DEALER';

  return 'TIE';
}

function displayResults(playerHand, dealerHand) {
  const Result = whoWon(playerHand, dealerHand);

  switch (Result) {
    case 'PLAYER_BUSTED':
      prompt('You busted! Dealer wins!');
      break;
    case 'DEALER_BUSTED':
      prompt('Dealer busted! You win!');
      break;
    case 'PLAYER':
      prompt('You win!');
      break;
    case 'DEALER':
      prompt('Dealer wins!');
      break;
    case 'TIE':
      prompt("It's a tie!");
      break;
    default:
      // Nothing here, just appeasing the linter
  }
}

function shuffleDeck(array) {
  const newArray = array;

  for (let index = newArray.length - 1; index > 0; index -= 1) {
    const otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [newArray[index], newArray[otherIndex]] = [newArray[otherIndex], newArray[index]];
  }

  return newArray;
}

function roundEnd(total) {
  // This needs to check if either the player or dealer has busted.
  // If true, then display the busted text
  // Display round info
  // Continue play
  if (busted(total)) {
    displayResults(playerTotal, dealerTotal);
  }
}

// Game loop
while (true) {
  let answer;

  welcomeGreeting();
  // Initialize the deck
  const Deck = shuffleDeck(DECK);
  let playerHand = [];
  let dealerHand = [];

  playerHand.push(...dealCards(Deck));
  dealerHand.push(...dealCards(Deck));

  let playerTotal = calculateHandTotal(playerHand);
  let dealerTotal = calculateHandTotal(dealerHand);

  prompt(`The dealer has ${dealerHand[0]} and a face-down card`);
  prompt(`You have ${playerHand[0]} and ${playerHand[1]} for a total of ${playerTotal}`);

  // Player's turn
  while (true) {
    let playerTurn;
    while (true) {
      prompt('Hit or stay?');
      playerTurn = readline.question().toLowerCase();
      if (['hit', 'h', 'stay', 's'].includes(playerTurn)) break;
      prompt("Sorry, please enter 'hit' or 'stay'");
    }

    if (['hit', 'h'].includes(playerTurn)) {
      playerHand.push(DECK.shift());
      playerTotal = calculateHandTotal(playerHand);
      prompt('You chose to hit!');
      prompt(`You now have ${playerHand} for a total of ${playerTotal}`);
    }

    if (['stay', 's'].includes(playerTurn) || busted(playerTotal)) break;
  }

  roundEnd(playerTotal);
  prompt(`You stayed at ${playerTotal}`);

  if (busted(playerTotal)) {
    displayResults(playerHand, dealerHand);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`You stayed at ${playerTotal}`);
  }

  // Dealer's turn
  prompt(`The dealer reveals their hand ${dealerHand} for a total of ${dealerTotal}`);
  while (true) {
    if (dealerTotal >= 17) break;
    prompt('Dealer hits');
    dealerHand.push(DECK.shift());
    dealerTotal = calculateHandTotal(dealerHand);
    prompt(`Dealer has ${dealerHand} for a total of ${dealerTotal}`);
  }

  if (busted(dealerTotal)) {
    displayResults(playerHand, dealerHand);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`Dealer stays at ${dealerTotal}`);
  }

  console.log('=====================');
  prompt(`Dealer has ${dealerHand} for a total of ${dealerTotal}`);
  prompt(`You have ${playerHand} for a total of ${playerTotal}`);
  console.log('=====================');

  displayResults(playerHand, dealerHand);

  answer = playAgain(answer);
  if (answer === 'no' || answer === 'n') break;
}
console.clear();
prompt('Thanks for playing Twenty-one!');
