# Twenty-One

## Rules of Twenty-One

- Deck: 52 total cards containing 4 suits of each card (Clubs, Hearts, Spades, Diamonds), and 13 total values (2, 3, 4, 5, 6, 7, 8, 9, Jack, Queen, King, and Ace.)

- Goal: Get as close to 21 as possible without going over. If you go over 21 it's a bust, and you lose.

- Setup: Game consists of a Dealer and a Player. Both participants start with two cards. The player can see their 2 cards, but can only see one of the dealer's.

- Card Values: Jack, Queen, and King each equal 10. Numbers equal their number. Aces equal 1 or 11 depending on your hand. If you have an ace and your total is over 21, the ace must equal 1.

- Player Turn: The player always goes first, and can decide to hit or to stay. Hit means the player is dealt another card. If the total equals more than 21, the player busts and loses the game.

- Dealer Turn: When the player stays, it's the dealer's turn. The dealer must follow a strict rule for determining to hit or to stay: hit until the total is at least 17. If the dealer busts, then the player wins.

- Comparing Cards: When both the player and the dealer stay, it's time to compare the total value of the cards and see who has the higher value.

## Implementation Steps
1. Initalize the deck
2. Deal cards to the player and dealer
3. Player turn: hit or stay
  - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
  - repeat until total >= 17
6. If dealer busts, player wins.
7 Compare cards and declare winner.
