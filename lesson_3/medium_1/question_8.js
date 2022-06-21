let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);

/**
 * Yes, the family's data got ransacked!
 * This is because the messWithDemographics function contains the Object.values method wich returns an array
 * of the values of each property. Each of the values are the properties of each family member, and
 * the method calls to alter age and gender.
 * 
 * Altered answer: Objects are passed by reference. Therefore when the messWithDemographics function is called,
 * it is effectively altering the munsters object.
 * 
 */