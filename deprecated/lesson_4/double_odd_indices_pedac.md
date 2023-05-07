# The PEDAC Process

## P: Understanding the Problem

- Establish the rules/ define the boundaries of the problem.
  - Assessing available information.
  - Restate Explicit requirements.
  - Identify Implicit requirements.
- Spend enough time. Don't rush this step.

**Double Odd Indices**

Given an array of positive numbers, transform the numbers with odd indices by multiplying each by 2.

- Explicit requirements:
  - Input: array of numbers
  - Output: array of numbers
  - Do not mutate the original array

- Implicit requirements:
  - Doubled means the number multiplied by two
  - Each odd index means numbers in index 1, 3, 5, 7, ..
  - Remember that array indexes start at 0

## E: Examples and Test Cases

- Can confirm/ refute assumptions
- Help to answer questions about implicit requirements
- Act as assertions which help to codify the rules and boundaries

**Double Odd Indices**

Input: [1, 4, 3, 7, 2, 6]
Output: [1, 8, 3, 14, 2, 12]

Do not mutate the original array

## D: Data Structures

- Help to reason with data logically
- Help interact with data at an implementation level
- Thinking in terms of data structures is part of problem solving process
- Data structures are closely linked with algorithms
  - Set of steps from input to output
    - Involves structuring data in a certain way

**Double Odd Indices**

- An array that is not mutated to a new value

## A: Algorithms

- A logical sequence of steps for accomplishing a task or objective
  - Closely linked to data structures
  - Series of steps to structure data to produce the required output
- Stay abstract/ high-level
  - Avoid implementation detail
  - Don't worry about efficiency for now

1. Create an empty array variable to store the result
2. Iterate through the array
3. Double each number with an odd index
  - Question: How do we find out if a number's index is odd?
    - Use modulo to confirm if a number has an odd index
4. Return the array
5. Console log the original array to ensure it was not mutated

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