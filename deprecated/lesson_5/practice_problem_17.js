let createUUID = () => {
  const hexadecimalChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];
  let uuid = '';

  sections.forEach((section, sectionIndex) => {
    for (let i = 1; i <= section; i++ ) {
      let randomize = Math.floor(Math.random() * hexadecimalChars.length);
      uuid += hexadecimalChars[randomize]
    }
    
    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });

  return uuid;
}

console.log(createUUID());