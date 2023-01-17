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

function whoWon(player, dealer) {
  if (player.total > WINNING_NUM) return 'PLAYER_BUSTED';
  if (dealer.total > WINNING_NUM) return 'DEALER_BUSTED';
  if (dealer.total < player.total) return 'PLAYER';
  if (dealer.total > player.total) return 'DEALER';

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

function displayResults(player, dealer) {
  let result = whoWon(player, dealer);
  prompt(getPrintibleResult(result));
}

function updateScore(player, dealer, score) {
  let winner = whoWon(player, dealer);

  if (winner === 'PLAYER' || winner === 'DEALER_BUSTED') {
    score.player += 1;
  } else if (winner === 'DEALER' || winner === 'PLAYER_BUSTED') {
    score.dealer += 1;
  }
}

function displayScore(score, round) {
  console.log(`--------------- Round ${round.num} ---------------`);
  console.log(`  Player score: ${score.player}   Dealer score: ${score.dealer}  `);
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

function playerTurn(player, deck) {
  while (true) {
    let response;
    while (true) {
      prompt('Hit or stay?');
      response = readline.question().toLowerCase();
      if (['hit', 'h', 'stay', 's'].includes(response)) break;
      prompt("Sorry, please enter 'hit' or 'stay'");
    }

    if (['hit', 'h'].includes(response)) {
      player.cards.push(deck.shift());
      player.total = calculateHandTotal(player.cards);
      prompt('You chose to hit!');
      prompt(`You now have [${printCard(player.cards)}] for a total of ${player.total}`);
      console.log(` `);
    }

    if (['stay', 's'].includes(response) || busted(player.total)) break;
  }

  return player.total;
}

function dealerTurn(dealer, deck) {
  while (true) {
    if (dealer.total >= 17) break;
    prompt('Dealer hits');
    dealer.cards.push(deck.shift());
    dealer.total = calculateHandTotal(dealer.cards);
    prompt(`Dealer has [${printCard(dealer.cards)}] for a total of ${dealer.total}`);
  }

  console.log(` `);
  return dealer.total;
}

function endOfRound(player, dealer, round) {
  console.log('-'.repeat(32));
  prompt(`Dealer has [${printCard(dealer.cards)}] for a total of ${dealer.total}`);
  prompt(`You have [${printCard(player.cards)}] for a total of ${player.total}`);
  console.log('-'.repeat(32));
  displayResults(player, dealer);
  round.num += 1;
}

function initParticipantHands(player, dealer, shuffledDeck) {
  player.cards.push(...dealCards(shuffledDeck));
  dealer.cards.push(...dealCards(shuffledDeck));
}

function printCards(player, dealer, hidden) {
  if (hidden) {
    prompt(`The dealer has [${printCard(dealer.cards[0])}, face-down card]`);
    prompt(`You have [${printCard(player.cards)}] for a total of ${player.total}`);
    console.log(` `);
    prompt(`PLAYER'S TURN`);
  } else {
    console.log(` `);
    prompt(`DEALER'S TURN`);
    prompt(`The dealer reveals their hand [${printCard(dealer.cards)}] for a total of ${dealer.total}`);
  }
}

function innerRoundLoop(player, dealer, deck, round) {
  printCards(player, dealer, true);
  player.total = playerTurn(player, deck);

  if (busted(player.total)) {
    return endOfRound(player, dealer, round);
  } else {
    prompt(`You stayed at ${player.total}`);
  }

  printCards(player, dealer, false);
  dealer.total = dealerTurn(dealer, deck);

  if (busted(dealer.total)) {
    return endOfRound(player, dealer, round);
  } else {
    prompt(`Dealer stays at ${dealer.total}`);
  }

  return endOfRound(player, dealer, round);
}

// Initialize round
function playRound(score, deck) {
  let round = { num: 1 };

  while (score.player < GAMES_TO_WIN && score.dealer < GAMES_TO_WIN) {
    const Player = { cards: [], total: 0 };
    const Dealer = { cards: [], total: 0 };
    let shuffledDeck = shuffleDeck(deck);
    initParticipantHands(Player, Dealer, shuffledDeck);
    Player.total = calculateHandTotal(Player.cards);
    Dealer.total = calculateHandTotal(Dealer.cards);
    displayScore(score, round);

    innerRoundLoop(Player, Dealer, shuffledDeck, round);

    updateScore(Player, Dealer, score);
    readline.question('\nPress any key to continue playing ');
    console.clear();
  }
}

// Game loop
while (true) {
  let answer;
  const Score = { player: 0, dealer: 0 };
  const Deck = createDeck(SUITS, VALUES);
  console.clear();
  welcomeGreeting();
  gameRules();
  playRound(Score, Deck);

  answer = playAgain(answer);
  if (answer === 'no' || answer === 'n') break;
}
prompt('Thanks for playing Twenty-one!');
