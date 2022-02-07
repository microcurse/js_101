/**
 * 
 * function(arr, obj)
 * 
 */

function greetings(arr, obj) {
  let fullName = arr.join(' ');
  let title = obj.title;
  let occupation = obj.occupation;
  return `Hello, ${fullName}! Nice to have a ${title} ${occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.