# The PEDAC Process

## P: Understanding the Problem

- Establish the rules/ define the boundaries of the problem.
  - Assessing available information.
  - Restate Explicit requirements.
  - Identify Implicit requirements.
- Spend enough time. Don't rush this step.

**Leading Substrings**
Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

Explicit requirements:
- Input: string
- Output: array
- Each substring should begin with the first letter of the word
- List should be sorted from shortest to longest

Implicit requirements:
- The number of elements in the array should match how many characters are in the string. 
  - e.g. 5 chars in string should output an array with 5 elements


## E: Examples and Test Cases

- Can confirm/ refute assumptions
- Help to answer questions about implicit requirements
- Act as assertions which help to codify the rules and boundaries

Input:
'abc'
'a'
'xyzzy'

Output:

Splitting the string
['a', 'b', 'c']
['a']
['x', 'y', 'z', 'z']

['a', 'ab', 'abc']
['a']
['x', 'xy', 'xyz', 'xyzz', 'xyzzy']

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

1. Split the string into an array
  - ['a', 'b', 'c']
2. Iterate through the array
  - Add element at 0 index to the result array
  - Add element at next index to the result array's next element
  - Keep going till there are no elements left in the array
4. Keep doing this till there are no elements left in the original string/ array



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