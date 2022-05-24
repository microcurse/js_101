let advice = "Few things in life are as important as house training your pet dinosaur. Another important thing is to do play with them!";

advice.replace('important', 'urgent');

//replace all occurances

let replaceAll = /important/gi;
let replaceThis = advice.replace(replaceAll, 'urgent');
console.log(replaceThis);