# The PEDAC Process

## P: Understanding the Problem

- Establish the rules/ define the boundaries of the problem.
  - Assessing available information.
  - Restate Explicit requirements.
  - Identify Implicit requirements.
- Spend enough time. Don't rush this step.

**Stack Machine Interpretation**
Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

- n : Place a value, n, in the register. Do not modify the stack
- PUSH : Push the register value onto the stack. Leave the value in the register.
- ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
- SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
- MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
- DIV : Pop a value from the stack and divide the register value by the opped stack value, storing the integer result back in the register.
- REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
- POP : Remove the topmost item from the stack and place it in the register.
- PRINT : Print the register value.


Explicit requirements:
- Input: string of commands
- Output: a number


Implicit requirements:


## E: Examples and Test Cases

- Can confirm/ refute assumptions
- Help to answer questions about implicit requirements
- Act as assertions which help to codify the rules and boundaries

Input:
'PRINT' - Print the register value. Since the register value is 0, it prints 0
'5 PUSH 3 MULT PRINT'
- 5
  - Store 5 as the register value
- PUSH
  - Push the register value (5) into the stack []
- 3
  - Store 3 as the register value
- MULT
  - Pop a value (5) from the stack and multiply it by the register value (3). Store that result as the register value (15)
- PRINT
  - Print the register value (15)

Output:
// 0
// 15


## D: Data Structures

- Help to reason with data logically
- Help interact with data at an implementation level
- Thinking in terms of data structures is part of problem solving process
- Data structures are closely linked with algorithms
  - Set of steps from input to output
    - Involves structuring data in a certain way

string
numbers

## A: Algorithms

- A logical sequence of steps for accomplishing a task or objective
  - Closely linked to data structures
  - Series of steps to structure data to produce the required output
- Stay abstract/ high-level
  - Avoid implementation detail
  - Don't worry about efficiency for now

Inteprit the current command
- Split the string into an array delimited by ' ' (spaces)
- Create a list of commands using a switch case

execute the command


store the value of the register and the stack
- Create an empty number variable named "register"
- Create an empty array variable named "stack"


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