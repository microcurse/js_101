// Given the following similar sets of code, what will each code snippet print?

// A
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/**
 * Solution:
 * This code prints to the console the "one is: ["one"]"", then prints "two is: ["two"]",
 * then prints "three is: ["three"]".
 * 
 * On lines 10-12 we declare variables one, two, and three, each initialized to the reference
 * of arrays ["one"], ["two"], and ["three"] respectively.
 * 
 * The messWithVars function is declared on lines 4-8 and defines 3 parameters: one, two, three.
 * 
 * On line 14 there is an invocation of the messWithVars function which is passed 3 arguments: 
 * one, two, three. The values of these arguments are the refrences to the arrays ["one"], 
 * ["two"], ["three"].
 * 
 * In the messWithVars function, there are reassignments to each of the parameters on lines 
 * 5 through 7. Note that because the parameters share the same variable names as the ones
 * declared on the outer scope, the outer scoped counterparts are then shadowed and reassignment
 * does affect them. Also, because reassignment is not destructive, this does not affect the 
 * array references of their global counterparts. Thus, printing "one is: ["one"]"", 
 * "two is: ["two"]", "three is: ["three"]". to the console.
 * 
 */

// B
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/**
 * Solution:
 * This code still prints "one is: ["one"]"", "two is: ["two"]", "three is: ["three"]" to the 
 * console.
 * 
 * Variable shadowing still occurs because the parameters share the same name as their global
 * counterparts. Lines 45-47 still utilize reassignment which is not mutative. This reassignment
 * does not affect the array references of the global variables. Note that the local variables are
 * reassigned to new references to new arrays. Which means they don't use any of the references 
 * that were passed to the function during invocation on line 11. Therefore, printing
 * "one is: ["one"]"", "two is: ["two"]", "three is: ["three"]" to the console on the last
 * line of the snippet.
 * 
 */

// C
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/**
 * Solution:
 * This code prints "one is: ['two']", "two is: ['three']", "three is: ['one']" to the console.
 * 
 * The concepts of variable shadowing still occur here. However, since the messWithVars function
 * now invokes the mutative method .splice() on each of the parameters. The arrays are mutated
 * which, since they share a reference to the same array as their global counterpart. We see 
 * a change in the global variables.
 * 
 */