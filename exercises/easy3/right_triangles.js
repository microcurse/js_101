/**
 * function triangle(n) 
 * 
 * This function should log a right triangle whose sides each have n stars.
 * The hypotenuse of the triangle (diagonal side) should have one end at the lower-left of the triangle
 * and the other end at the upper-right
 * 
 * PEDAC
 * 
 * inputs:
 *  number(integer) of stars
 * 
 * output:
 *  first line should be an empty console log;
 *  a star for each number
 *  each line adds another star
 *  stars should be right aligned
 *    - This can be achieved by setting a variable for spaces
 *  
 * algorithm:
 * Set variable for star
 * Set variable for spaces
 * Create a for loop that loops a total of the number passed into the function
 *  - console log space.padEnd(num, spaces) for spaces 
 *  - stars += *
 *  - spaces -= ' '
 *  - decriment total loop count by 1
 * 
 * NEW DISCOVERIES!
 * String.padEnd()
 * String.padStart()
 * String.repeat()
 * 
 */

function triangle(num) {
  let stars = 1;
  while (stars <= num) {
    console.log('*'.repeat(stars).padStart(num, ' '));
    stars += 1;
  }
}


 triangle(5);
//
//    *
//   **
//  ***
// ****
//*****

triangle(9);
//
//        *
//       **
//      ***
//     ****
//    *****
//   ******
//  *******
// ********
//*********