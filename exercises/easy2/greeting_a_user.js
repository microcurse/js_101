const readline = require('../node_modules/readline-sync');

console.log('What is your name?');
let name = readline.question();

if(name.includes("!")) {
  console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}