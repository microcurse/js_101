let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalAge = 0;
for (const munster in munsters) {
  if (munsters[munster]['gender'] === 'male') {
    totalAge += munsters[munster]['age'];
  }
}
console.log(totalAge);