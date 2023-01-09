/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
/* eslint-disable no-param-reassign */
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

function whoWon(playerTotal, dealerTotal) {
  if (playerTotal > WINNING_NUM) return 'PLAYER_BUSTED';
  if (dealerTotal > WINNING_NUM) return 'DEALER_BUSTED';
  if (dealerTotal < playerTotal) return 'PLAYER';
  if (dealerTotal > playerTotal) return 'DEALER';

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

function updateScore(score, playerTotal, dealerTotal) {
  const Winner = whoWon(playerTotal, dealerTotal);

  if (Winner === 'PLAYER' || Winner === 'DEALER_BUSTED') {
    score.Player += 1;
  } else if (Winner === 'DEALER' || Winner === 'PLAYER_BUSTED') {
    score.Dealer += 1;
  }
}

function displayScore(score, round) {
  console.log(`--------------- Round ${round} ---------------`);
  console.log(`  Player score: ${score.Player}   Dealer score: ${score.Dealer}  `);
  console.log('---------------------------------------');
}

function createDeck(suits, values) {
  let deck = [];

  suits.map((suit) => {
    values.forEach(value => deck.push([value, suit]));
  });

  return deck;
}

function shuffleDeck(array) {
  const newArray = array;

  for (let index = newArray.length - 1; index > 0; index -= 1) {
    const otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [newArray[index], newArray[otherIndex]] = [newArray[otherIndex], newArray[index]];
  }

  return newArray;
}

function playerTurn(playerHand, playerTotal, deck) {
  while (true) {
    let response;
    while (true) {
      prompt('Hit or stay?');
      response = readline.question().toLowerCase();
      if (['hit', 'h', 'stay', 's'].includes(response)) break;
      prompt("Sorry, please enter 'hit' or 'stay'");
    }

    if (['hit', 'h'].includes(response)) {
      playerHand.push(deck.shift());
      playerTotal = calculateHandTotal(playerHand);
      prompt('You chose to hit!');
      prompt(`You now have ${playerHand} for a total of ${playerTotal}`);
    }

    if (['stay', 's'].includes(response) || busted(playerTotal)) break;
  }

  return playerTotal;
}

function dealerTurn(dealerHand, dealerTotal, deck) {
  while (true) {
    if (dealerTotal >= 17) break;
    prompt('Dealer hits');
    dealerHand.push(deck.shift());
    dealerTotal = calculateHandTotal(dealerHand);
    prompt(`Dealer has ${dealerHand} for a total of ${dealerTotal}`);
  }

  return dealerTotal;
}

// Round loop
function playRound(score, deck) {
  let round = 1;

  while (score.Player < GAMES_TO_WIN && score.Dealer < GAMES_TO_WIN) {
    let shuffledDeck = shuffleDeck(deck);
    let playerHand = [];
    let dealerHand = [];
    playerHand.push(...dealCards(shuffledDeck));
    dealerHand.push(...dealCards(shuffledDeck));
    let playerTotal = calculateHandTotal(playerHand);
    let dealerTotal = calculateHandTotal(dealerHand);
    let roundOver = false;
    displayScore(score, round);

    while (!roundOver) {
      prompt(`The dealer has ${dealerHand[0]} and a face-down card`);
      prompt(`You have ${playerHand[0]} and ${playerHand[1]} for a total of ${playerTotal}`);

      playerTotal = playerTurn(playerHand, playerTotal, shuffledDeck);

      if (busted(playerTotal)) {
        displayResults(playerTotal, dealerTotal);
        break;
      } else {
        prompt(`You stayed at ${playerTotal}`);
      }

      prompt(`The dealer reveals their hand ${dealerHand} for a total of ${dealerTotal}`);
      dealerTotal = dealerTurn(dealerHand, dealerTotal, shuffledDeck);

      if (busted(dealerTotal)) {
        displayResults(playerTotal, dealerTotal);
        break;
      } else {
        prompt(`Dealer stays at ${dealerTotal}`);
      }

      console.log('-'.repeat(32));
      prompt(`Dealer has ${dealerHand} for a total of ${dealerTotal}`);
      prompt(`You have ${playerHand} for a total of ${playerTotal}`);
      console.log('-'.repeat(32));

      displayResults(playerTotal, dealerTotal);
      roundOver = true;
      round += 1;
    }

    updateScore(score, playerTotal, dealerTotal);
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
