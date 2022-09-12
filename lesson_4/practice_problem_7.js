['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// Return value is ['bear']. Map always returns an array and since there is a if condition to return elem with a length greater than 3, it returns ['bear'].

// Correct answer: [ undefined, 'bear' ]. This is because when the first elem doesn't meet the condition, it returns implicitly returns undefined.