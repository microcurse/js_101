// What will the following code output?

console.log([1, 2, 3] + [4, 5]);

/**
 * Solution:
 * The above code will output the string "1, 2, 34, 5". This is because the + operator
 * coerces the arrays into strings for concatenation. The expression translates to this
 * after coercion: "1, 2, 3" + "4, 5".
 *  
 */
