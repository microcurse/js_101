// One day, Spot was playing with the Munster family's home computer, and he wrote a small
// program to mess with their demographic data:

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    // [{age: 32, gender: "male"}, {age: 30, gender: "female"}, ... ]
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

// After writing this function, he typed the following code:

messWithDemographics(munsters);

// Before Grandpa could stop him, Spot hit the Enter key with his tail. Did the family's data
// get ransacked? Why or why not?

/**
 * Solution:
 * Yes, the family's data got ransacked! Even though the .forEach() method always returns undefined 
 * and cannot mutate the array it's called on, the callback function can. Aside from this, the object
 * munsters is passed by reference to the messWithDemographics function. The callback function 
 * looks to reassign the values of the nested properties accessed through bracket notation. Since 
 * demoObject and munsters reference the same object, the callback function's reassignments to 
 * properties are reflected in the outer scoped munster's variable.
 * 
 */