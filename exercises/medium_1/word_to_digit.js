const NUMBER_WORDS = {
  zero:   0,
  one:    1,
  two:    2,
  three:  3,
  four:   4,
  five:   5,
  six:    6,
  seven:  7,
  eight:  8,
  nine:   9
};

function wordToDigit(message) {
  Object.keys(NUMBER_WORDS).forEach(word => {
    let regex = new RegExp(word, 'g');
    message = message.replace(regex, NUMBER_WORDS[word]);
  });
  return message;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."