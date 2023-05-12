// Will the following functions return the same results?

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

console.log(first());
console.log(second());

// Solution: They will not return the same results. The function second()'s return's undefind since
// The object's opening bracket is on the next line. Return values need to be on the same line as
// the return word since semicolons are optional. The JavaScript engine inserts them where it thinks
// you need them. In this case, it adds it to the end of return since there's nothing directly after
// it.
