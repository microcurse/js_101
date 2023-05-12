// Consider these two simple functions:

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the following function invocation return?

bar(foo());

/**
 * Solution: This code will output 'no'
 * When the function bar is invoked with an argument of the invocation of the foo function, we
 * see that the return value is the string "yes". The string "yes" is what's passed to the bar
 * function and it reassigns the parameter param from "no" to "yes". The return value of the 
 * bar function is a ternary operator which, when true, returns the string "yes". The condition
 * for true is if param is equal to the string "no". Since param is equal to "yes", the false 
 * condition is executed, which returns the string "no".
 * 
 */