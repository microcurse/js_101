/*
function penultimate(str) {
  let words = str.split(' ');
  return words[words.length - 2];
}

console.log(penultimate("last word") === 'last'); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
*/

/**
 * 
 * Further exploration: function that retrieves the middle word of a phrase/sentence
 * 
 * My initial thoughts for this is to take the length of the phrase and divide it by 2.
 * To catch edge cases on this, we'll use Math.floor to round down on even numbered sentences.
 * 
 */

function penultimate(str) {
  let words = str.split(' ');
  if (words.length % 2 === 0) {
    return words[Math.floor((words.length / 2) - 1)];
  } else {
    return words[Math.floor(words.length / 2)];
  }
}

console.log(penultimate("last word") === 'last'); // logs true
console.log(penultimate("Launch School is great!") === "School"); // logs true
console.log(penultimate("This is a test of a longer sentence") === "test"); // logs true
console.log(penultimate("") === ""); // logs true
console.log(penultimate("single") === "single"); // logs true
