/**
 * ASCII Art
 * 
 * Write a program that outputs "The Flintstones Rock!" 10 times, with each line indented 1 space to the 
 * right of the line above it. The output should start out like this:
 * 
 * The Flintstones Rock!
 *  The Flintstones Rock!
 *   The Flintstones Rock!
 *    ...
 * 
 * PEDAC
 * 
 * INPUT
 * Phrase
 * 
 * OUTPUT
 * Phrase repeated 10 times with each line indented 1 space to the right of the line above it.
 * 
 * ALGORITHM
 * Let's use the .padStart() method to pad the current string with another.
 * We need to create a loop that loops 10 times.
 * Inside the loop, we console.log the phrase.padStart(phrase.length + count, ' ');
 * 
 */

const phrase = "The Flintstones Rock!";

for (let count = 0; count < 10; count += 1) {
  console.log(phrase.padStart(phrase.length + count, ' '));
}