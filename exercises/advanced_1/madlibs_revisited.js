let template1 = 'The %adjective brown %noun %adverb %verb the %adjective yellow %noun, who %adverb %verb his %noun and looks around.'

let template2 = "The %noun %verb the %noun's %noun"

function madlibs(template) {
  const replacementTexts = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly']
  }

  let allReplacements = /%[a-z]+/g;

  function replaceText(match) {
    let key = match.replace(/[^a-z]/, "");
    let index = Math.floor(Math.random() * replacementTexts[key].length);
    return replacementTexts[key][index];
  }
  
  console.log(template.replace(allReplacements, replaceText));
}

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// // The "hungry" brown "cat" "lazily"
// // "licks" the "noisy" yellow
// // "dog", who "lazily" "licks" his
// // "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".