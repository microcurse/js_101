/**
 * Return a new version of this sentence that ends just before the word house.
 * Don't worry about spaces or punctuation: remove everything starting from
 * the beginning of house to the end of the sentence.
 * 
 */

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '


/**
 * Solution:
 * Declare a variable newAdvice and initialize it to the return value of 
 * invoking the .slice() method on the variable advice. Pass the first 
 * argument of 0 as a starting index and pass the second argument of
 * the return value of calling the .indexOf('house') method on the variable
 * advice. The .indexOf() method returns a number and providdes the ending 
 * index for the .slice() method. The return value of the .slice() method is
 * the string 'Few things in life are as important as '.
 * 
 */

let newAdvice = advice.slice(0, (advice.indexOf('house')));
console.log(newAdvice);