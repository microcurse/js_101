/*
a function that returns the sum of two numbers

Casual Pseudocode:

# Given a function call that accepts two arguments

- create a function that accepts two numbers
- write operation for adding them together
- return the result

Formal pseudocode:
START

# Given a function call that accepts two arguments

SET function that accepts two arguments (number1, number2)
READ numbers that are passed in and add them together (number1 + number2)
PRINT the sum of those numbers (return)

END
*/

/*
a function that takes an array of strings, and returns a string that is all those strings concatenated together

Casual pseudocode:

# Given a function that accepts one argument (array of strings)

- define variable to store our result (new string of concatenated strings)
- iterate through the array
- for each string within the array, concatenate it into result variable
- return the result

Formal pseudocode:
START

# Given a function that accepts one argument (array of strings)

SET result = concatenated strings
FOREACH item in array
  SET result = result + element
RETURN RESULT

END
*/

/*
a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element.

Casual pseudocode:

# Given everyOther([1,4,7,2,5]); // => [1,7,5]

- use the map() array method to return a new array.
- use element, index as arguments for the map method
- for each element return that element if the index % 2 === 1

Formal pseudocode:
START

# Given everyOther([1,4,7,2,5]); // => [1,7,5]

SET variable to store new array
ITERATE through given array with map() method using element and index on each element of array
  IF index of current element % 2 === 1
    THEN return that element (store into new array)
return new array

END
*/

/*
a function that determines the index of the 3rd occurence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null.

Casual pseudocode:

# Given a string of characters 'axbxcdxex'

- use string.split() method to create array of elements in string
- define variable for a character that we're looking for
- define a variable to keep track of how many occurances of x. counter starts at 0.
- iterate through that array using a for loop
  - if current element === x
    - counter += 1
    - if counter === 3
        return index of current element

Formal pseudocode:
START

# Given a string of characters 'axbxcdxex'

SET variable = string.split() to create an array of elements we can iterate over
SET character that we're looking for
ITERATE over that array
  SET counter variable that stores how many times an element is found
  FOR element at current index
    IF element === 'x'
      THEN counter increments by 1
      IF counter reaches 3
        return index of current element


END
*/

/*
a function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes.

# Given merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]

Casual pseudocode:

- use a method to merge two arrays. This would be the map() method
- map over the first array and use the shift() array method to push the value into the new array
- when the first array has a larger length than the second array, then use the shift() to push the first element of the second array to the new array
- if both arrays have equal lengths, then shift() the next element of the first array
- repeat this until there's no more elements in each array

Formal pseudocode:
START

# Given merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]

SET variable to store new map()'ed array
MAP over the array1 with element, index
  SET variable to store newArr
  WHILE array1.length < array2.length && array1.length != 0
    THEN array1.pop(newArr)
  return newArr

END
*/
;