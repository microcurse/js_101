/**
 * PEDAC
 * 
 * INPUT
 * String of zero or more space separated words
 * 
 * OUTPUT
 * Object that shows the number of words of different sizes
 * 
 * ALGORITHM
 * create new variable and store the resulting array of .split() on the argument (phrase)
 * create a variable to count occurrences of each length of a word
 * create new object variable to store result
 * create a list of key-value pairs using the length and the counter
 *  - iterate through the array and .map() each element
 *    - if the array doesn't include(currentIterations.length())
 *      - return length of current iteration
 *    - else
 *      - increment counter for that length by 1
 * use Object.fromEntries(entries) to create the object
 * return or print to console that object 
 * 
 * 
 */
function wordSizes(phrase) {
  const WORDS = phrase.split(' ');
  let result = {};
  WORDS.map((word) => {
    if(!result[word.length]) {
      result[word.length] = 0;
    }
    result[word.length] = Number(result[word.length]) + 1;
  });
  return result
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}