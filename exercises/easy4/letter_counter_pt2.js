function wordSizes(phrase) {
  const WORDS = phrase.split(' ');
  let result = {};
  WORDS.map((word) => {
    word = word.replace(/[^a-z]/gi, '')
    if(!result[word.length]) {
      result[word.length] = 0;
    }
    result[word.length] = Number(result[word.length]) + 1;
  });
  return result
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}