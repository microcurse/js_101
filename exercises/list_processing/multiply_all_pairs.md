# The PEDAC Process

## P: Understanding the Problem

- Establish the rules/ define the boundaries of the problem.
  - Assessing available information.
  - Restate Explicit requirements.
  - Identify Implicit requirements.
- Spend enough time. Don't rush this step.

**Multiply All Pairs**
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.


Explicit requirements:
- Input: multidimensional array
- Output: array
- Each number must be multiplied by eachother

Implicit requirements:
- Neither argument will be an empty array


## E: Examples and Test Cases

- Can confirm/ refute assumptions
- Help to answer questions about implicit requirements
- Act as assertions which help to codify the rules and boundaries

Input:
[2, 4], [4, 3, 1, 2]

Output:
- unsorted: [8, 6, 2, 4, 16, 12, 4, 8]
- sorted:   [2, 4, 4, 6, 8, 8, 12, 16]

## D: Data Structures

- Help to reason with data logically
- Help interact with data at an implementation level
- Thinking in terms of data structures is part of problem solving process
- Data structures are closely linked with algorithms
  - Set of steps from input to output
    - Involves structuring data in a certain way

array

## A: Algorithms

- A logical sequence of steps for accomplishing a task or objective
  - Closely linked to data structures
  - Series of steps to structure data to produce the required output
- Stay abstract/ high-level
  - Avoid implementation detail
  - Don't worry about efficiency for now

1. Create an empty array variable to store the result
2. Iterate through the 2nd array and multiply each element by the 1st element from the first array
  - Store that in the result array
3. Iterate through the 2nd array and multiply each element by the 2nd element from the first array
  - Store that in the result array
4. Sort the array
5. Return the result


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