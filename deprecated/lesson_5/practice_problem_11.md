# The PEDAC Process

## P: Understanding the Problem

- Establish the rules/ define the boundaries of the problem.
  - Assessing available information.
  - Restate Explicit requirements.
  - Identify Implicit requirements.
- Spend enough time. Don't rush this step.

**Practice Problem 11**
Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

Explicit requirements:
- Input: array of objects
- Output: a new array identical in structure, but with each number incremented by 1
Do not mutate/modify the original data structure

Implicit requirements:
Each object's value should be incremented by 1
Return a structurally identical array


## E: Examples and Test Cases

- Can confirm/ refute assumptions
- Help to answer questions about implicit requirements
- Act as assertions which help to codify the rules and boundaries

[
  { a: 1 }, 
  { b: 2, c: 3 }, 
  { d: 4, e: 5, f: 6 }
];

[
  { a: 2 }, 
  { b: 3, c: 4 }, 
  { d: 5, e: 6, f: 7 }
];


## D: Data Structures

- Help to reason with data logically
- Help interact with data at an implementation level
- Thinking in terms of data structures is part of problem solving process
- Data structures are closely linked with algorithms
  - Set of steps from input to output
    - Involves structuring data in a certain way

Array of objects

## A: Algorithms

- A logical sequence of steps for accomplishing a task or objective
  - Closely linked to data structures
  - Series of steps to structure data to produce the required output
- Stay abstract/ high-level
  - Avoid implementation detail
  - Don't worry about efficiency for now

1. Iterate over the data structure (array)
2. Create a empty object variable
3. Loop through each object
4. Assign key value pairs to the new object variable
  - use property accessors/ bracket notation to populate the currently iterated key into the new object variable
  - assign value to that key by incrementing the original object's value by 1
5. Return the newly incremented object


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