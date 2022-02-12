const readline = require('../node_modules/readline-sync');

console.log('Enter a noun: ');
const noun = readline.question();

console.log('Enter a verb: ');
const verb = readline.question();

console.log('Enter a adjective: ');
const adjective = readline.question();

console.log('Enter a adverb: ');
const adverb = readline.question();

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);