function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first()); // {prop1 : "hi there"}
console.log(second());  // undefined

/**
 * No, these functions do not return the same result. 
 * logging the second() function returns undefined because the object containing prop1 was already called in
 * the first() function.
 * 
 * The actual reason for this odd behavior is that semicolons, in JavaScript, are technically optional.
 */