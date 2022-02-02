const readline = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt('Are your measurements in meters or feet? ');
let measurement = readline.question();

prompt('Enter the length of the room: ');
let length = readline.question();
length = parseInt(length, 10);

prompt('Enter the width of the room: ');
let width = readline.question();
width = parseInt(width, 10);

let areaInMeters;
let areaInFeet;

if( measurement === 'feet') {
  areaInFeet = (length * width);
  areaInMeters = (areaInFeet / SQMETERS_TO_SQFEET);
} else {
  areaInMeters = (length * width);
  areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);
}

prompt(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`);