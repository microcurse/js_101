/**
 * The following function unnecessarily uses two return statements to return boolean values. Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?
 */

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// solution 1: removing the if/else statement and returning if either color === blue or green
function isColorValid(color) {
  return (color === "blue" || color === "green");
}

console.log(isColorValid("blue"));

// solution 2: use .includes()
function isColorValid(color) {
  return ["blue", "green"].includes(color);
}

console.log(isColorValid("red"));