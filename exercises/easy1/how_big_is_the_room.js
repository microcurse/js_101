const readline = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt('Enter the length of the room in meters: ');
let length = readline.question();
length = parseInt(length, 10);

prompt('Enter the width of the room in meters: ');
let width = readline.question();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

prompt(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`);