# The PEDAC Process

## P: Understanding the Problem

- Establish the rules/ define the boundaries of the problem.
  - Assessing available information.
  - Restate Explicit requirements.
  - Identify Implicit requirements.
- Spend enough time. Don't rush this step.

**Next Featured Number Higher than a Given Value**
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

- Explicit requirements:
  - Input: number
  - Output: number/ "There is no possible number that fulfills those requirements."

The "featured number" is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. The largest possible number is 9876543201. Output "There is no possible number that fulfills those requirements." if it reaches beyond the largest possible number.


- Implicit requirements:
  - Input is always a number
  - Every other multiple of 7 is even
  - First multiple of 7 is odd

## E: Examples and Test Cases

- Can confirm/ refute assumptions
- Help to answer questions about implicit requirements
- Act as assertions which help to codify the rules and boundaries

Ex of valid featured numbers:
21
35
49
63

Example of non valid featured numbers:
14
28
42
56
70

Input:
12
20
21
997
1029
999999
999999987
9876543186
9876543200
9876543201

Output:
21
21
35
1029
1043
1023547
1023456987
9876543201
9876543201
"There is no possible number that fulfills those requirements."

## D: Data Structures

- Help to reason with data logically
- Help interact with data at an implementation level
- Thinking in terms of data structures is part of problem solving process
- Data structures are closely linked with algorithms
  - Set of steps from input to output
    - Involves structuring data in a certain way

Numbers

## A: Algorithms

- A logical sequence of steps for accomplishing a task or objective
  - Closely linked to data structures
  - Series of steps to structure data to produce the required output
- Stay abstract/ high-level
  - Avoid implementation detail
  - Don't worry about efficiency for now

1. Create a number variable to store the result
2. Create a number variable to store the MAX NUMBER possible = 9876543201
3. Create a loop that keeps outputting multiples of 7
4. Compare current iteration (multiple) to the given number
  1. If current iteration is greater than curr number
    1. Check if that number is odd
    2. If it's not odd
    3. Multiply by 7 one more time and store that into the result variable
    4. else if the number's digits occur more than once
5. If loop reaches 9876543201
6. Output string "There is no possbile number that fulfills those requirements."
7. Return result

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