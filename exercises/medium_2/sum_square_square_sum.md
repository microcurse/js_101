# The PEDAC Process

## P: Understanding the Problem

- Establish the rules/ define the boundaries of the problem.
  - Assessing available information.
  - Restate Explicit requirements.
  - Identify Implicit requirements.
- Spend enough time. Don't rush this step.

**Sum Square - Square Sum**
Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.

- Explicit requirements:
  - Input: number
  - Output: number
Count up all the numbers leading up to the given number. Then square the sum of those numbers. Then take the number count and square each number and add it to eachother. Subtract the first number and the second number

- Implicit requirements:
  - Input is always a number

## E: Examples and Test Cases

- Can confirm/ refute assumptions
- Help to answer questions about implicit requirements
- Act as assertions which help to codify the rules and boundaries

Input:
3
10
1
100

Output:
22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
2640
0
100

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

1. Count up to the number given
  - Create a for loop that increments the count by 1 till it equals the given number
2. Add those numbers together
3. Square the sum and store into the first result variable
4. Count up to the numbers given
5. Square each number
6. Add them together
7. Subtract the second result from the first result

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