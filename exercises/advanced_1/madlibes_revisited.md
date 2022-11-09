# The PEDAC Process

## P: Understanding the Problem

- Establish the rules/ define the boundaries of the problem.
  - Assessing available information.
  - Restate Explicit requirements.
  - Identify Implicit requirements.
- Spend enough time. Don't rush this step.

**Madlibs Revisited**
Build a madlibs program that takes a text "template" as input, plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into that text, and then returns it. You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program. Your program should read this text and, for each line, place random words of the appropriate types into the text and return the result.

The challenge of this program isn't just about writing your solution—it's about choosing the structure of the text templates. Choose the right way to structure your templates and this problem becomes much easier. Consequently, this exercise is a bit more open-ended since the input is also something that you'll define for yourself.

- Explicit requirements:
  - Input: string
  - Output: string
  - Accepts a "template" string as an input
  - Outputs the template with the replacement texts
  - Do not output the quotations shown in the example
  - The replacement texts will be randomized each time the program is run

- Implicit requirements:
  - Templates won't be empty
  - Templates will be a string
  - Templates won't have special characters except for punctuation

## E: Examples and Test Cases

- Can confirm/ refute assumptions
- Help to answer questions about implicit requirements
- Act as assertions which help to codify the rules and boundaries

Input:
Replacement texts:
adjectives: quick lazy sleepy noisy hungry
nouns: fox dog head leg tail cat
verbs: jumps lifts bites licks pats
adverbs: easily lazily noisily excitedly

Template:
The {adjective} brown {noun} {adverb} {verb} the {adjective} yellow {noun}, who {adverb} {verb} his {noun} and looks around.


Output:
The "sleepy" brown "cat" "noisily" "licks" the "sleepy" yellow "dog", who "lazily" "licks" his "tail" and looks around.


## D: Data Structures

- Help to reason with data logically
- Help interact with data at an implementation level
- Thinking in terms of data structures is part of problem solving process
- Data structures are closely linked with algorithms
  - Set of steps from input to output
    - Involves structuring data in a certain way

string

## A: Algorithms

- A logical sequence of steps for accomplishing a task or objective
  - Closely linked to data structures
  - Series of steps to structure data to produce the required output
- Stay abstract/ high-level
  - Avoid implementation detail
  - Don't worry about efficiency for now

1. Create an object called replacementText which stores all of the replacement texts as properties
2. Create template to pass into the function
3. Use a special character to identify each substring that needs to be replaced with one of the replacementTexts
  - use %adjective to identify which substring needs to be replaced
3. Use Math.random() * 10 to select an element from each of the replacement text arrays
4. console log the result

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