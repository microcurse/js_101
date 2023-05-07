# The PEDAC Process

## P: Understanding the Problem

- Establish the rules/ define the boundaries of the problem.
  - Assessing available information.
  - Restate Explicit requirements.
  - Identify Implicit requirements.
- Spend enough time. Don't rush this step.

**Practice Problem 11**

Create an object that expresses the frequency with which each letter occurs in this string

Explicit requirements:
- Input: string
- Output: object

Implicit requirements:
- Question: Is this case sensitive?

## E: Examples and Test Cases

- Can confirm/ refute assumptions
- Help to answer questions about implicit requirements
- Act as assertions which help to codify the rules and boundaries

"The Flintstones Rock"

{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }


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

1. Create an empty object variable to store the result
2. Split the string into an array
3. Iterate through that array
  - Create an empty number variable to keep count
  - Create an empty string variable to store the current iteration
  - Compare the first element to the next element
  - If they are the same. Increment counter by 1
  - Keep doing this till we reach the end of the array
  - Then compare the second element to the first element
  - If they are the same. Increment counter by 1
  - Keep doing this till we reach the end of the array
  - Keep going till we've compared all elements with the array
  - Assign the empty object variable the current iteration equal to the counter
4. Return the result

## C: Implementing a solution in Code

- Translating solution algorithm to code
- Think about the algorithm in the context of the programming language 
  - Language features/ constraints
  - Characteristics of data structures
  - Built-in functions/ methods
  - Syntax and coding patterns
- Create test cases
- Code with intent

## Sum Even Number Row

Imagine a sequence of consecutive even integers beginning with 2. The integers are grouped in rows, with the first row containing one integer, the second row two integers, the third row three integers, and so on. Given an integer representing the number of a particular row, return an integer representing the sum of all the integers in that row.

## Final Thoughts

- Not a completely linear process
- Move back and forward between the steps
- Switch from implementation mode to abstract problem solving mode when necessary
- Don't try to problem solve at the code level!