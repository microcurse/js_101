# The PEDAC Process

## P: Understanding the Problem

- Establish the rules/ define the boundaries of the problem.
  - Assessing available information.
  - Restate Explicit requirements.
  - Identify Implicit requirements.
- Spend enough time. Don't rush this step.

**General Example**

Given a string, produce a new string with every other word removed.

- Explicit requirements:
  - Input: string
  - Output: new string
  - Remove every other word from the input string

- Questions:
  - What do we mean by "every other word"?
    - All the odd words? 
    - All the even words?
  - How do we define a word in this context?
    - Words are delimited by spaces

## E: Examples and Test Cases
## D: Data Structures
## A: Algorithms
## C: Implementing a solution in Code

## Sum Even Number Row

Imagine a sequence of consecutive even integers beginning with 2. The integers are grouped in rows, with the first row containing one integer, the second row two integers, the third row three integers, and so on. Given an integer representing the number of a particular row, return an integer representing the sum of all the integers in that row.

- Sequence of integers
- Sequence begins with 2
- Integers are grouped in rows
- Integers are consecutive
- Each row increments larger: 1, 2, 3 ...
- Row 'number 1' equals the number of elements in the row
  - row 1 has 1 element, row 2 has 2 elements, row 3 has 3 elements, ...
- Input: a single integer
  - Identifies a 'row', which is a subset of a sequence of integers
- Output: a single integer
  - The sum of all the integers of the row identified by the input

- Sequence:
2, 4, 6, 8, 10, 12, 14, 16 ,18, ...

2
4, 6
8, 10, 12
14, 16, 18, 20
...

- How do we create the structure?