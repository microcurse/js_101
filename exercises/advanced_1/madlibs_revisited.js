let adjective = 'quick';
let noun = 'fox';
let verb = 'jump';
let adverb = 'easily';

const replacementText = {
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly']
}

function madlibs(template) {
  // Math.floor(Math.random() * adjective.length)
  // This randomizes once, then the replace method takes that and changes all instances of the given string.
  let randomAdj = replacementText['adjective'][Math.floor(Math.random() * adjective.length)];
  // let randomNoun = replacementText[[noun][Math.floor(Math.random() * noun.length)]];
  // let randomVerb = replacementText[[verb][Math.floor(Math.random() * verb.length)]];
  // let randomAdverb = replacementText[[adverb][Math.floor(Math.random() * adverb.length)]];

  // The problem lies here, it globally finds %adjective and replaces all at once with a single replacement text.
  let regex = /%adjective/g;
  console.log(template.replace(regex, randomAdj));
}

let template1 = 'The %adjective brown %noun %adverb %verb the %adjective yellow %noun, who %adverb %verb his %noun and looks around.'

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

// madlibs(template1);
// // The "hungry" brown "cat" "lazily"
// // "licks" the "noisy" yellow
// // "dog", who "lazily" "licks" his
// // "leg" and looks around.

// madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

// madlibs(template2);      // The "cat" "pats" the "cat"'s "head".