# The PEDAC Process

## P: Understanding the Problem

- Establish the rules/ define the boundaries of the problem.
  - Assessing available information.
  - Restate Explicit requirements.
  - Identify Implicit requirements.
- Spend enough time. Don't rush this step.

**Practice Problem 17**
A UUID is a type of identifier often used to uniquely identify items, even when some of those items were created on a different server or by a different application. That is, without any synchronization, two or more computer systems can create new items and label them with a UUID with no significant risk of stepping on each other's toes. It accomplishes this feat through massive randomization. The number of possible UUID values is approximately 3.4 X 10E38, which is a huge number. The chance of a conflict is vanishingly small with such a large number of possible values.

Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

Write a function that takes no arguments and returns a string that contains a UUID.

Explicit requirements:
- Input: No input???
- Output: 32 hexadecimal character string broken up into 5 sections 8-4-4-4-12
Uniquely identify items
massive randomization
3.4 x 10E38 possible values
32 hexadecimal characters (digits 0-9 and letters a-f) represented as a string
broken up into 5 sections 8-4-4-4-12 pattern
e.g. f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91

Implicit requirements:


## E: Examples and Test Cases

- Can confirm/ refute assumptions
- Help to answer questions about implicit requirements
- Act as assertions which help to codify the rules and boundaries

[
  [f65c57f6],
  [a6aa],
  [17a8],
  [faa1],
  [a67f2dc9fa91]
]

After joining the array of hexadecimal numbers:
'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'


## D: Data Structures

- Help to reason with data logically
- Help interact with data at an implementation level
- Thinking in terms of data structures is part of problem solving process
- Data structures are closely linked with algorithms
  - Set of steps from input to output
    - Involves structuring data in a certain way


## A: Algorithms

- A logical sequence of steps for accomplishing a task or objective
  - Closely linked to data structures
  - Series of steps to structure data to produce the required output
- Stay abstract/ high-level
  - Avoid implementation detail
  - Don't worry about efficiency for now

1. Create an empty string variable to store the result
2. Create an array containing all hexadecimal characters from 0-9 and a-f;
3. Create an empty array variable to store the current randomly generated number
4. Randomly select elements from the hexadecimal array
  - Use the length of the array + 1 to traverse and select an element based on its index
  - Store that result into the current random generated array
5. Assign a random assortment of those characters in each section of the UUID/ result


  // need a way to generate characters based on the hexadecimalChars
    // Math.floor(Math.random() * (max - min + 1) + min);
    // max = 16, min = 0;
  // take length of hexadecimalChars minus 1. This is so the value at 0 index can be traversed
    // 


## C: Implementing a solution in Code

- Translating solution algorithm to code
- Think about the algorithm in the context of the programming language 
  - Language features/ constraints
  - Characteristics of data structures
  - Built-in functions/ methods
  - Syntax and coding patterns
- Create test cases
- Code with intent


## Final Thoughts

- Not a completely linear process
- Move back and forward between the steps
- Switch from implementation mode to abstract problem solving mode when necessary
- Don't try to problem solve at the code level!