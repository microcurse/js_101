# The PEDAC Process

## P: Understanding the Problem

- Establish the rules/ define the boundaries of the problem.
  - Assessing available information.
  - Restate Explicit requirements.
  - Identify Implicit requirements.
- Spend enough time. Don't rush this step.

**Lettercase Counter**
Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

- Explicit requirements:
  - Input: string
  - Output: object
  - Object contains 3 properties:
    1. Number of characters in that string that are lowercase
    2. Number of characters that are uppercase
    3. Number of characters that are neither (not letters);

- Implicit requirements:
  - Special characters should be put into the neither bucket
  - Need to iterate through the string and create an object with the keys:
    1. lowercase
    2. uppercase
    3. neither
    - Their values will be the result of counting each character in the string
  - EVERYTHING but letters will be counted as 'neither'
  - Blank or empty strings will count as 0

## E: Examples and Test Cases

- Can confirm/ refute assumptions
- Help to answer questions about implicit requirements
- Act as assertions which help to codify the rules and boundaries


Input:
'abCdef 123'
'AbCd +Ef'
'123'
''

Output:
{ lowercase: 5, uppercase: 1, neither: 4 }
{ lowercase: 3, uppercase: 3, neither: 2 }
{ lowercase: 0, uppercase: 0, neither: 3 }
{ lowercase: 0, uppercase: 0, neither: 0 }


## D: Data Structures

- Help to reason with data logically
- Help interact with data at an implementation level
- Thinking in terms of data structures is part of problem solving process
- Data structures are closely linked with algorithms
  - Set of steps from input to output
    - Involves structuring data in a certain way


Strings into objects

## A: Algorithms

- A logical sequence of steps for accomplishing a task or objective
  - Closely linked to data structures
  - Series of steps to structure data to produce the required output
- Stay abstract/ high-level
  - Avoid implementation detail
  - Don't worry about efficiency for now

1. Create an empty object variable to store the result
1. Iterate through the string
2. Check if the currently iterated element is a letter
  - If it isn't, then increment the 'neither' counter by 1
    - Do this by using result['neither'] += 1;
  - If it is a letter, check if it's the uppercase version or the lowercase version of itself
    - How to check if the current iteration is upper or lower cased?
    - Increment the corresponding values
      - result['uppercase'] += 1;
      - result['lowercase'] += 1;
4. Return result


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