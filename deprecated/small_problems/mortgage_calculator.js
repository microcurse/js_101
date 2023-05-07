/**
 * Assignment: Mortgage / Car Loan Calculator
 * 
 * PEDAC
 * 
 * INPUT
 * the loan amount
 * the Annual Percentage Rate (APR) as a whole number
 * the loan duration
 * 
 * OUTPUT
 * monthly interest rate as dollar and cents amount ($123.45 or $371.00)
 * loan duration in months
 * 
 * Formula for calculating monthly payment
 * let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));
 * 
 * EDGE CASES
 * Make sure to check for number inputs, convert from string to number if needed
 * Don't support no-interest loans for now
 * 
 * AGLORITHM
 * Require readline-sync to ask for user input
 * 
 * Create variables
 * - loanAmount
 * - annualPercentageRate
 * - loanDuration
 * 
 * Ask for the loan duration in months
 * Create a prompt function similar to the other calculator
 * 
 */

const readline = require('readline-sync');

// make it clear which messages are coming from the program
function prompt(message) {
    console.log(`=> ${message}`);
}

// check for whitespaces, valid numbers, and a number greater than 0;
function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num)) || Number(num) < 0;
}

prompt("Welcome to the mortgage loan calculator");

while(true) {
  prompt("Please enter your loan amount:");
  let loanAmount = readline.question();
  
  // keep asking user for a valid number until one is provided
  while(invalidNumber(loanAmount)) {
    prompt("Oops, please enter a valid loan amount.")
    loanAmount = readline.question();
  }
  
  prompt("Please provide your Annual Percentage Rate:");
  prompt("Example: 5 is 5% or 2.5 for 2.5%");
  let interestRate = readline.question();
  
  // keep asking user for a valid number until one is provided
  while(invalidNumber(interestRate)) {
    prompt("Must enter a positive number")
    interestRate = readline.question();
  }
  
  let annualPercentageRate = Number(interestRate) * .01;
  let monthlyInterestRate = annualPercentageRate / 12;

  prompt("What is the loan duration (in months)?");
  let loanDurationMonths = readline.question();

  // keep asking user for a valid number until one is provided
  while(invalidNumber(loanDurationMonths)) {
    prompt("Must enter a positive number")
    loanDurationMonths = readline.question();
  }
  
  let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));
  
  let totalPaymentAmount = monthlyPayment * loanDurationMonths;
  
  prompt(`Your monthly payments will be $${monthlyPayment.toFixed(2)}`);
  prompt(`Your total payment is $${totalPaymentAmount.toFixed(2)}`);

  
  prompt("Want to do another calculation? yes/no");
  let anotherCalculation = readline.question().toLowerCase();
  while (anotherCalculation !== 'no' && anotherCalculation !== 'yes') {
    prompt("Please enter 'yes' or 'no'.");
  }

  if (anotherCalculation !== 'yes') break;
}
