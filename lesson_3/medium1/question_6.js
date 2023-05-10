// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// Bonus: How can you reliably test if a value is NaN?

/**
 * Solution:
 * 
 * The following code will output false. Anytime NaN is one of the operands of any
 * relational comparison, the result is always false.
 * 
 * A reliable way of testing if a value is NaN is the Number.isNaN() method.
 * 
 */
