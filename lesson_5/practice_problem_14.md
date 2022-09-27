# The PEDAC Process

## P: Understanding the Problem

- Establish the rules/ define the boundaries of the problem.
  - Assessing available information.
  - Restate Explicit requirements.
  - Identify Implicit requirements.
- Spend enough time. Don't rush this step.

**Practice Problem 14**
Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

Explicit requirements:
- Input: object
- Output: multi-dimensional array
- Colors of the fruit must be capitalized and output as an array
- Sizes of the vegetables must be uppercased and output as a string

Implicit requirements:
- return a multi-dimensional array
- array should be returned in the same order as the object

## E: Examples and Test Cases

- Can confirm/ refute assumptions
- Help to answer questions about implicit requirements
- Act as assertions which help to codify the rules and boundaries

[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

[
  fruit: ["Red", "Green"], 
  vegenable: "MEDIUM", 
  fruit: ["Red", "Green"], 
  fruit: ["Orange"], 
  vegetable: "LARGE"
]


## D: Data Structures

- Help to reason with data logically
- Help interact with data at an implementation level
- Thinking in terms of data structures is part of problem solving process
- Data structures are closely linked with algorithms
  - Set of steps from input to output
    - Involves structuring data in a certain way

Objects and multi-dimensional arrays

## A: Algorithms

- A logical sequence of steps for accomplishing a task or objective
  - Closely linked to data structures
  - Series of steps to structure data to produce the required output
- Stay abstract/ high-level
  - Avoid implementation detail
  - Don't worry about efficiency for now

1. Iterate over the data structure (object)
2. Create an empty array variable to store the result
3. Iterate over inner object's values to access its properties
4. Check the `type` property for `fruit` or `vegetable` value
  - if its a `fruit` return the `colors` to the result variable
    - Iterate through the colors array and capitalize just the first letter of each element
      - To uppercase the first letter, iterate through array, split each word into individual characters, uppercase the first element in that array, then rejoin the characters into words
  - if its a `vegetable` return the `size` to the result variable
    - Uppercase all letters before returning this to the result variable
5. Return result

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