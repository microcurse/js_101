/**
 * 
 * PEDAC
 * 
 * INPUTS
 * three scores(numbers)
 * 
 * OUPUTS
 * letter grade score
 * 
 * ALGORITHM
 * Create a function to convert numerical score to letter grade
 * Get the mean of the three scores 
 *  - add scores together, then divide by total number of scores (3);
 * Compare mean score with appropriate grade in conversion table
 * return letter grade
 * 
 */

function getGrade(score1, score2, score3) {
  let avg = ((score1 + score2 + score3) / 3);

  if (avg <= 100 && avg >= 90) {
    return 'A';
  } else if (avg < 90 && avg >= 80) {
    return 'B';
  } else if (avg < 80 && avg >= 70) {
    return 'C';
  } else if (avg < 70 && avg >= 60) {
    return 'D'
  } else {
    return 'F'
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(65, 90, 93));    // "B"
console.log(getGrade(70, 80, 75));    // "C"
console.log(getGrade(50, 50, 45));    // "F"