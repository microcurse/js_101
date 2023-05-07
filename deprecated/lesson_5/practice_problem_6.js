let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (const munster in munsters) {
  let age = munsters[munster].age;
  let gender = munsters[munster].gender;
  let name = munster;

  console.log(`${name} is a ${age}-year-old ${gender}`);
}
