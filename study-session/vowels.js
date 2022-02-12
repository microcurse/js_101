/*
agenda
1. introductions: name, what you're currently studying, where you're located
2. study tips
  - Anki Cards
  - Working through exercises
3. student questions
4. code snippets

*/

// Given a string of one or more words, return an array that contains
// the number of vowels in each word of the argument string.

// The returned array should have the same number of
// elements as words in the argument string.


// Input: String of one or more words
//   - Word: Is a group of characters separated by spaces
// Output: Array of numbers. Numbers represent the number of vowels in each word. 


console.log(vowelCount('WhaTs yOur enneagram?'));                  // [1, 2, 4]
console.log(vowelCount('Colonel Sanders feeds me well !!'));       // [3, 2, 2, 1, 1, 0]
console.log(vowelCount(''));                                       // []
console.log(vowelCount('ZoInkies!! There are monsters in here.')); // [4, 2, 2, 2, 1, 2]
console.log(vowelCount('grrr!'));                                  // [0]

// Vowels can be capital or lowercase.
// Ignore anything that's not a letter.
// Empty String ==> Empty Array
// There may not be any vowels at all

// Algorithm 
// - Set variable for new array
// - Split the string to get your words into an array and store it in the variable
//  - For Loop
//      - Set variable for iterations, beginning at 0
//      - Continue as long as i is less than length of the array
// - Loop over that array
  //  - Initial loop will grab the individual words
  //  - Loop in each word
    //  - Create a string that contians all vowels 'aeiou'
      // if aeiou includes letter increment counter by 1
    //  - Split the word
        //  - Check for vowels

// Counter? Start at 0 for each word, increase by one for each vowel.
// Account for empty strings
// group.includes(memberOfGroup)

function vowelCount(str) {
  if (str.length === 0) return [];
    

  let words = str.toLowerCase().split(' ');
  const output = [];
  
  for (let i = 0; i < words.length; i += 1) {
    let vowels = 0;
    
    for (let j = 0; j < words[i].length; j += 1) {    
      if ('aeiou'.includes(words[i][j])) {
        vowels += 1;
      }
    }
    output.push(vowels);
  }
  
  return output;
}