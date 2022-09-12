[1, 2, 3].every(num => {
  return num = num * 2;
});

// This returns false. The every method checks all elements in the array for a truthy value. Since the callback function on every element compares the num = num * 2, it returns false.

// Correct answer: The return values of the callback will be 2, 4, and 6 on the respective iterations. The expression num = num * 2 is an assignment expression and will evaluate as the expression on the right-hand side of the assignment and that is what gets returned in each iteration. Since all of those numbers are truthy values, every will return true.