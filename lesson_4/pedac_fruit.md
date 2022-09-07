# The PEDAC Process

## P: Understanding the Problem

- Establish the rules/ define the boundaries of the problem.
  - Assessing available information.
  - Restate Explicit requirements.
  - Identify Implicit requirements.
- Spend enough time. Don't rush this step.

**Fruits**

Given an object with key-value pairs, select the key-value pairs where the value is `Fruit`

- Explicit requirements:
  - Input: object
  - Output: the same object with specific key-value pairs selected

- Implicit requirements:
  - Use a function to select from the input object, key-value pairs where the value is `Fruit`.
  - This function will return the value instead of logging it to the console.
  - The function should be non-destructive.


## E: Examples and Test Cases

- Can confirm/ refute assumptions
- Help to answer questions about implicit requirements
- Act as assertions which help to codify the rules and boundaries

**Fruits**

Input:
{
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'vegetable
}

Output:
{
  apple: 'Fruit',
  pear: 'Fruit'
}

## D: Data Structures

- Help to reason with data logically
- Help interact with data at an implementation level
- Thinking in terms of data structures is part of problem solving process
- Data structures are closely linked with algorithms
  - Set of steps from input to output
    - Involves structuring data in a certain way

**Fruits**

- Object gets passed into the function
- The same object with specific selections get returned/ output from the function

## A: Algorithms

- A logical sequence of steps for accomplishing a task or objective
  - Closely linked to data structures
  - Series of steps to structure data to produce the required output
- Stay abstract/ high-level
  - Avoid implementation detail
  - Don't worry about efficiency for now

1. Create an empty object variable
2. Iterate through the object's keys
  - Use a for...in loop to iterate through all items in the object
3. If any of those keys' value's matches `Fruit`, store it in the the empty object variable
  - Use bracket notation to access the key's value.
  - Question: How do you store values into the empty object variable?
    - In order to store values into an array. Create a new property to that variable and assign it the value desired. It will create the proper key-value pair.
4. Return the object variable

## C: Implementing a solution in Code

- Translating solution algorithm to code
- Think about the algorithm in the context of the programming language 
  - Language features/ constraints
  - Characteristics of data structures
  - Built-in functions/ methods
  - Syntax and coding patterns
- Create test cases
- Code with intent

**Data Structure**


**Algorithm**
Iterate through the object's keys in order to access the values. Check if the value of the currently iterated key matches 'Fruit'. Return the resulting key-value pairs.


## Final Thoughts

- Not a completely linear process
- Move back and forward between the steps
- Switch from implementation mode to abstract problem solving mode when necessary
- Don't try to problem solve at the code level!