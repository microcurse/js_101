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
7. Compare cards and declare winner.

## Tips on Getting Started

### Data Structure
Using nested arrays. Element at index 0 will be the card's suit, and the element at index 1 will be the card's value.

e.g. 
['C', 'A'] = Ace of Clubs = C11/C1
['H', '7'] = 7 of Hearts = H7

### Calculating aces
Aces will equal 11 as long as the player's hand is less than 21, otherwise the Ace will equal 1.

Algorithm:
1. Pass in currentHand as an argument to the function
2. Create an empty variable that gets the total value of the given cards from the currentHand.
3. Create an empty variable sum that stores the resulting calculations
4. For each value from the given cards
  - If value === A
    - Increment the sum variable by 11
  - Else if value === K, Q, J
    - Icremenent the sum variable by 10
  - else
    - Increment the sum variable by the number
5. Check if the sum is greater than 21
  - If it is, decrement the value of the sum by 10 (Ace should equal 1 instead of 11. Subtracting 10 will allow us to acheive the same thing along with ensuring the proper incrementing of future Aces);
6. Return the sum

### Player turn

Pseudocode:
- Ask player to hit or stay
- If stay, stop asking
- Otherwise, go to #1

### Suffle Cards
Use the Fisher-Yates shuffle

### Dealer Turn
The dealer turn follows a pattern that is very similar to the player's turn. However, the dealer's break condition occurs at the top of the "hit or stay" loop.

Pseudocode:
- If cards are <= 17
- Stay and break out of loop
- Otherwise, go to #1