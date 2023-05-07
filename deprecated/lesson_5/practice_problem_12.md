# The PEDAC Process

## P: Understanding the Problem

- Establish the rules/ define the boundaries of the problem.
  - Assessing available information.
  - Restate Explicit requirements.
  - Identify Implicit requirements.
- Spend enough time. Don't rush this step.

**Practice Problem 12**
Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

Explicit requirements:
- Input: multi dimensional array
- Output: multi dimensional array
- The new array should contain only numbers that are multiples of 3
- Use a combination of methods including filter

Implicit requirements:
- The output should still be a multi-dimensional array
- Questions:
  - What do we do if the number in question is not a multiple of 3? 
  - Does it get removed from the array? Does the length of the array change? 
  - Does it hold its place in the array and return undefined?


## E: Examples and Test Cases

- Can confirm/ refute assumptions
- Help to answer questions about implicit requirements
- Act as assertions which help to codify the rules and boundaries

[
  [2], 
  [3, 5, 7], 
  [9], 
  [11, 15, 18]
]

[
  [0], 
  [3, 0, 0], 
  [9], 
  [0, 15, 18]
]

[
  [ ], 
  [3, , ], 
  [9], 
  [ , 15, 18]
]

[
  [undefined], 
  [3, undefined, undefined ], 
  [9], 
  [undefined, 15, 18]
]

[
  [3], 
  [9], 
  [15, 18]
]


## D: Data Structures

- Help to reason with data logically
- Help interact with data at an implementation level
- Thinking in terms of data structures is part of problem solving process
- Data structures are closely linked with algorithms
  - Set of steps from input to output
    - Involves structuring data in a certain way

Multi-dimensional arrays

## A: Algorithms

- A logical sequence of steps for accomplishing a task or objective
  - Closely linked to data structures
  - Series of steps to structure data to produce the required output
- Stay abstract/ high-level
  - Avoid implementation detail
  - Don't worry about efficiency for now

1. Iterate over the data structure (array)
2. Create an empty array variable
3. Store values in new array variable that are multiples of 3


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