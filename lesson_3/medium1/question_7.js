// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

/**
 * Solution:
 * The above code will output 34 to the console.
 * The variable answer is declared and initialized to the number 42. On lines 5-7 the function
 * messWith it is declared and defines a single parameter someNumber. The function looks to 
 * return the result of the adding 8 to the value of someNumber. On line 9 the variable 
 * newAnswer is declared and initialized to the invocation of messWithIt with an argument of
 * answer, which is the number 42. The someNumber parameter is initialized to the number 42
 * and we see that the function returns the reassignment of someNumber + 8, which is 50.
 * We're using pass by value when passing the value of answer as an argument to the messWithIt
 * function. Since it's pass by value, the number 42 assigned to someNumber is different than
 * the 42 assigned to answer. Thus, printing the result of 42 - 8, which is 34 on the last line
 * of the code snippet.
 * 
 */