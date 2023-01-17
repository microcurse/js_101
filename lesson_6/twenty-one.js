const readline = require('readline-sync');

const SUITS = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const WINNING_NUM = 21;
const GAMES_TO_WIN = 5;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function welcomeGreeting() {
  prompt('Welcome to Twenty-One!');
}

function printCard(cards) {
  // guard clause to print dealer's single shown card;
  const newArray = [...cards];
  if (typeof newArray[0] === 'string') {
    return newArray.join(' of ');
  }

  return newArray.map((card) => card.join(' of ')).join(', ');
}

function gameRules() {
  console.log('---------------- RULES ----------------');
  prompt('Beat the dealer by getting a count as close to 21 as possible, without going over 21!');
  prompt('If either player goes over 21, that player "busts" and immediately loses.');
  prompt('When you\'re dealt cards, you can choose to "hit" to draw another card from the deck.');
  prompt('Or you can choose to "stay" if you\'re confident you can win with those cards!');
  prompt(`First player to win ${GAMES_TO_WIN} rounds takes the game!`);
  console.log(' ');
}

function calculateHandTotal(cards) {
  const values = cards.map((card) => card[0]);

  let sum = 0;
  values.forEach((value) => {
    if (value === 'Ace') {
      sum += 11;
    } else if (['King', 'Queen', 'Jack'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter((value) => value === 'Ace').forEach(_ => {
    if (sum > WINNING_NUM) sum -= 10;
  });

  return sum;
}

function dealCards(cards) {
  return [cards.shift(), cards.shift()];
}

function playAgain(answer) {
  while (true) {
    prompt('Play again? (yes or no)');
    answer = readline.question().toLowerCase();
    if (['no', 'n', 'yes', 'y'].includes(answer)) break;
    prompt("Sorry, please type either 'yes' or 'no'");
  }

  return answer;
}

function busted(total) {
  return total > WINNING_NUM;
}

function whoWon(pTotal, dTotal) {
  if (pTotal > WINNING_NUM) return 'PLAYER_BUSTED';
  if (dTotal > WINNING_NUM) return 'DEALER_BUSTED';
  if (dTotal < pTotal) return 'PLAYER';
  if (dTotal > pTotal) return 'DEALER';

  return 'TIE';
}

function getPrintibleResult(result) {
  switch (result) {
    case 'PLAYER_BUSTED':
      return 'You busted! Dealer wins!';
    case 'DEALER_BUSTED':
      return 'Dealer busted! You win!';
    case 'PLAYER':
      return 'You win!';
    case 'DEALER':
      return 'Dealer wins!';
    case 'TIE':
      return "It's a tie!";
    default:
      return 'Winner not recognized';
  }
}

function displayResults(pTotal, dTotal) {
  let result = whoWon(pTotal, dTotal);
  prompt(getPrintibleResult(result));
}

function updateScore(score, pTotal, dTotal) {
  let winner = whoWon(pTotal, dTotal);

  debugger;
  if (winner === 'PLAYER' || winner === 'DEALER_BUSTED') {
    score.Player += 1;
  } else if (winner === 'DEALER' || winner === 'PLAYER_BUSTED') {
    score.Dealer += 1;
  }
}

function displayScore(score, round) {
  console.log(`--------------- Round ${round.roundNum} ---------------`);
  console.log(`  Player score: ${score.Player}   Dealer score: ${score.Dealer}  `);
  console.log('---------------------------------------');
}

function createDeck(suits, values) {
  let deck = [];

  suits.forEach((suit) => {
    values.forEach((value) => deck.push([value, suit]));
  });

  return deck;
}

function shuffleDeck(array) {
  const newArray = [...array];

  for (let index = newArray.length - 1; index > 0; index -= 1) {
    const otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [newArray[index], newArray[otherIndex]] =
    [newArray[otherIndex], newArray[index]];
  }

  return newArray;
}

function playerTurn(pHand, pTotal, deck) {
  while (true) {
    let response;
    while (true) {
      prompt('Hit or stay?');
      response = readline.question().toLowerCase();
      if (['hit', 'h', 'stay', 's'].includes(response)) break;
      prompt("Sorry, please enter 'hit' or 'stay'");
    }

    if (['hit', 'h'].includes(response)) {
      pHand.push(deck.shift());
      pTotal = calculateHandTotal(pHand);
      prompt('You chose to hit!');
      prompt(`You now have [${printCard(pHand)}] for a total of ${pTotal}`);
      console.log(` `);
    }

    if (['stay', 's'].includes(response) || busted(pTotal)) break;
  }

  debugger;
  return pTotal;
}

function dealerTurn(dHand, dTotal, deck) {
  while (true) {
    if (dTotal >= 17) break;
    prompt('Dealer hits');
    dHand.push(deck.shift());
    dTotal = calculateHandTotal(dHand);
    prompt(`Dealer has [${printCard(dHand)}] for a total of ${dTotal}`);
  }

  console.log(` `);
  return dTotal;
}

function endOfRound(pHand, dHand, pTotal, dTotal, round) {
  console.log('-'.repeat(32));
  prompt(`Dealer has [${printCard(dHand)}] for a total of ${dTotal}`);
  prompt(`You have [${printCard(pHand)}] for a total of ${pTotal}`);
  console.log('-'.repeat(32));
  displayResults(pTotal, dTotal);
  round.roundNum += 1;
}

function initParticipantHands(pHand, dHand, shuffledDeck) {
  pHand.push(...dealCards(shuffledDeck));
  dHand.push(...dealCards(shuffledDeck));
}

function printCards(pHand, dHand, pTotal, dTotal, hidden) {
  if (hidden) {
    prompt(`The dealer has [${printCard(dHand[0])}, face-down card]`);
    prompt(`You have [${printCard(pHand)}] for a total of ${pTotal}`);
    console.log(` `);
    prompt(`PLAYER'S TURN`);
  } else {
    console.log(` `);
    prompt(`DEALER'S TURN`);
    prompt(`The dealer reveals their hand [${printCard(dHand)}] for a total of ${dTotal}`);
  }
}

function innerRoundLoop(deck, pHand, dHand, pTotal, dTotal, round) {
  printCards(pHand, dHand, pTotal, dTotal, true);
  pTotal = playerTurn(pHand, pTotal, deck);

  if (busted(pTotal)) {
    debugger;
    return endOfRound(pHand, dHand, pTotal, dTotal, round);
  } else {
    prompt(`You stayed at ${pTotal}`);
  }

  printCards(pHand, dHand, pTotal, dTotal, false);
  dTotal = dealerTurn(dHand, dTotal, deck);

  if (busted(dTotal)) {
    debugger;
    return endOfRound(pHand, dHand, pTotal, dTotal, round);
  } else {
    prompt(`Dealer stays at ${dTotal}`);
  }

  return endOfRound(pHand, dHand, pTotal, dTotal, round);
}

// Initialize round
function playRound(score, deck) {
  let round = { roundOver: false, roundNum: 1 };

  while (score.Player < GAMES_TO_WIN && score.Dealer < GAMES_TO_WIN) {
    let shuffledDeck = shuffleDeck(deck);
    let pHand = [];
    let dHand = [];
    initParticipantHands(pHand, dHand, shuffledDeck);
    let pTotal = calculateHandTotal(pHand);
    let dTotal = calculateHandTotal(dHand);
    displayScore(score, round);
    round.roundOver = false;

    innerRoundLoop(shuffledDeck, pHand, dHand, pTotal, dTotal, round);

    debugger;
    updateScore(score, pTotal, dTotal);
    readline.question('\nPress any key to continue playing ');
    console.clear();
  }
}

// Game loop
while (true) {
  let answer;
  const Score = { Player: 0, Dealer: 0 };
  console.clear();
  welcomeGreeting();
  gameRules();
  const DECK = createDeck(SUITS, VALUES);
  playRound(Score, DECK);

  answer = playAgain(answer);
  if (answer === 'no' || answer === 'n') break;
}
prompt('Thanks for playing Twenty-one!');
