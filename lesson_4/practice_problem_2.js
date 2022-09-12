[1, 2, 3].map(num => {
  num * num;
});

// Return value is [undefined, undefined, undefined]. There is no explicit return with this callback function. If this were set up as a single line function or explicity state return num * num, it would return [1, 4, 9].