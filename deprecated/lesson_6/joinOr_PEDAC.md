PEDAC
P: Understanding the Problem

 Write a method that joins an array into a string with a commas (,) delimiting each 
 element and a join word. Default is 'or'

 Explicit requirements:
 - Input: an array of numbers and two strings
 - Output: a string
 - default delimiter is comma (, ) followed by a space
 - Join word default is 'or'


 Implicit requirements:
 - Array will always contain numbers
 - The first given string is used as a delimiter in place of default comma (,)
 - The second given string is used in place of default 'or'
 - If array is empty, return an empty string.
 - If array has 1 element, return that element
 - If array only has 2 elements, only use the default 'or' delimeter, or the 
   given second string
 
 E: Examples and test cases
 
 Input:
 [1, 2, 3]
 [1, 2, 3], ';'
 [1, 2, 3], ', ' 'and'
 []
 [5]
 [1, 2]

 Output:
 "1, 2, or 3"
 "1; 2; or 3"
 "1, 2, and 3"
 ""
 "5"
 "1 or 2"

 D: Data structures

 Arrays and strings

 A: Algorithm

 - Create three arguments for the joinOr method with delimiter set to default of ', ' and 
   joinWord default equal to 'or'
 - Use a switch case statement for determining the delimiter and joinWord to use
   - If there are 3 or more elements
     - use delimiter between each element
     - use joinWord between the last two elements
   - If there are only 2 elements
     - Use joinWord between the two elements
   - If there's only 1 element
     - Output the element as a string
   - If there are no elements
     - Output an empty string



