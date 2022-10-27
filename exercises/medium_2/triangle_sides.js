function triangle(x, y, z) {
  /*
    Four outcomes
    equilateral: all three sides are of equal length
    isosceles: two sides are equal, while the third is different
    scalene: all three sides are of different lengths
    invalid: none of these conditions are met

    valid triangle: sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0

    return a string representation of one of the four outcomes
  */
  let perimiter = x + y + z;
  let shortest = Math.min(x, y, z);
  let longest = Math.max(x, y, z);
  let middle = perimiter - shortest - longest;

  if (isValid(shortest, middle, longest)) {
    return getTriangleType(shortest, middle, longest);
  } else {
    return "invalid";
  };

  function isValid(shortest, middle, longest) {
    return shortest > 0 && shortest + middle > longest;
  }

  function getTriangleType(x, y, z) {
    if (x === y && y === z) {
      return "equilateral";
    } else if (x === y || x === z || y === z) {
      return "isosceles";
    } else {
      return "scalene"
    } 
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"