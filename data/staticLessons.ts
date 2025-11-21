import { LessonContent } from "../types";

export const STATIC_LESSONS: Record<number, LessonContent> = {
  1: {
    theory: `## System Initialization: Hello World  
Neural link established.  
Your first transmission through the PyVerse comms grid is the classic **"Hello, World!"** signal.  
This ritual confirms that your Python module is online and responding.`,
    tutorial: `The \`print()\` function is Python's way of outputting information to the console (the screen). 
To print text, you must enclose it in matching quotes—either single (\`'text'\`) or double (\`"text"\`).

**Example:**
\`\`\`python
print("System Ready")
print('Engine Online')
\`\`\`
Using \`print()\` is the most fundamental way to debug and inspect what your code is doing.`,
    challenge: `**Mission:**  
Transmit the message **Hello, World!** to the PyVerse command console using the \`print()\` function.`,
    starterCode: `# Initialize transmission below
`,
    validationRegex: `print\\s*\\(\\s*["']Hello, World!["']\\s*\\)`,
    expectedOutput: `Hello, World!`,
    hint: "Use the `print()` function. Ensure the text 'Hello, World!' is enclosed in quotes (either single ' or double \").",
    solutionCode: `print("Hello, World!")`
  },

  2: {
    theory: `## Data Buffer Allocation: Variables  
In the PyVerse, variables are memory capsules—named containers storing mission-critical data.  
Assign values to activate them.`,
    tutorial: `Variables are created the moment you assign a value to them. You don't need to declare a type (like "int" or "string") beforehand; Python figures it out automatically.
    
**Syntax:** \`variable_name = value\`

**Example:**
\`\`\`python
pilot_name = "Neo"
altitude = 5000
print(pilot_name)
\`\`\`
Variable names cannot start with a number and should not contain spaces (use underscores like \`my_variable\`).`,
    challenge: `**Mission:**  
Create a variable named \`signal\` and store the string **"Online"** inside it. Then print the variable.`,
    starterCode: `# Create and print the variable
`,
    validationRegex: `signal\\s*=\\s*["']Online["'][\\s\\S]*print\\s*\\(\\s*signal\\s*\\)`,
    expectedOutput: `Online`,
    hint: "First, type `signal = \"Online\"`. On the next line, use `print(signal)` to display it.",
    solutionCode: `signal = "Online"\nprint(signal)`
  },

  3: {
    theory: `## Molecular Structuring: Data Types  
Python entities come in many forms—strings, integers, floats, booleans.  
Recognizing their type is essential for stable reactor computations.`,
    tutorial: `Common Python data types include:
- **Integer (\`int\`)**: Whole numbers (e.g., \`5\`, \`-10\`).
- **Float (\`float\`)**: Decimal numbers (e.g., \`3.14\`, \`0.001\`).
- **String (\`str\`)**: Text enclosed in quotes (e.g., \`"Hello"\`).
- **Boolean (\`bool\`)**: Truth values (\`True\` or \`False\`).

**Example:**
\`\`\`python
x = 10      # int
y = 10.5    # float
z = "10"    # str
\`\`\``,
    challenge: `**Mission:**  
Create:  
- an integer variable \`level\` set to **3**  
- a float variable \`energy\` set to **9.5**  
Print both variables on separate lines.`,
    starterCode: `# Define data types
`,
    validationRegex: `level\\s*=\\s*3[\\s\\S]*energy\\s*=\\s*9\\.5[\\s\\S]*print\\s*\\(`,
    expectedOutput: `3\n9.5`,
    hint: "Integers are whole numbers (3). Floats have decimals (9.5). Create them like `name = value`, then print each.",
    solutionCode: `level = 3\nenergy = 9.5\nprint(level)\nprint(energy)`
  },

  4: {
    theory: `## Decision Core: If Statements  
The PyVerse AI routes decisions through conditional gates.  
If a condition is true, a new timeline is activated.`,
    tutorial: `Python uses **indentation** (whitespace at the beginning of a line) to define blocks of code. An \`if\` statement checks a condition. If the condition is true, the indented code block runs.

**Syntax:**
\`\`\`python
if condition:
    # Indented code runs if true
\`\`\`

**Example:**
\`\`\`python
fuel = 10
if fuel < 20:
    print("Low Fuel")
\`\`\``,
    challenge: `**Mission:**  
Write an if-statement: If \`power\` is greater than **50**, print **"Reactor Stable"**.`,
    starterCode: `power = 75  # Do not change this
# Write your code below
`,
    validationRegex: `if\\s+power\\s*>\\s*50\\s*:[\\s\\S]*print\\s*\\(\\s*["']Reactor Stable["']\\s*\\)`,
    expectedOutput: `Reactor Stable`,
    hint: "Use the syntax `if condition:`. Don't forget the colon `:` at the end of the line, and indent the print statement.",
    solutionCode: `power = 75\nif power > 50:\n    print("Reactor Stable")`
  },

  5: {
    theory: `## Temporal Loop Engine: For Loops  
For-loops iterate through sequences—like scanning star sectors one by one.`,
    tutorial: `A \`for\` loop iterates over a sequence (like a list or a range of numbers). The \`range()\` function generates a sequence of numbers.
    
**Note:** \`range(start, stop)\` includes the start number but excludes the stop number.

**Example:**
\`\`\`python
# Prints 0, 1, 2
for i in range(3):
    print(i)

# Prints 2, 3, 4
for x in range(2, 5):
    print(x)
\`\`\`
`,
    challenge: `**Mission:**  
Use a \`for\` loop with \`range()\` to print the numbers **1** through **5** (inclusive).`,
    starterCode: `# Loop from 1 to 5
`,
    validationRegex: `for\\s+\\w+\\s+in\\s+range\\s*\\(\\s*1\\s*,\\s*6\\s*\\):`,
    expectedOutput: `1\n2\n3\n4\n5`,
    hint: "The `range(start, stop)` function stops *before* the stop number. To get 1 to 5, you need range(1, 6).",
    solutionCode: `for i in range(1, 6):\n    print(i)`
  },

  6: {
    theory: `## Continuity Cycle: While Loops  
While-loops persist until a condition collapses.  
Use with caution—endless loops can destabilize the warp grid.`,
    tutorial: `A \`while\` loop continues to execute a block of code as long as its condition remains True. You must ensure the condition eventually becomes False to avoid an infinite loop.

**Example:**
\`\`\`python
count = 0
while count < 3:
    print("Counting...")
    count = count + 1  # Increment to eventually stop
\`\`\`
`,
    challenge: `**Mission:**  
Use a \`while\` loop to print numbers **1** to **3**. Increment your counter variable carefully.`,
    starterCode: `counter = 1
# Write while-loop
`,
    validationRegex: `while\\s+counter\\s*<=\\s*3\\s*:[\\s\\S]*print\\s*\\(\\s*counter\\s*\\)`,
    expectedOutput: `1\n2\n3`,
    hint: "Set the condition to `while counter <= 3:`. Inside the loop, print `counter` then add `counter += 1`.",
    solutionCode: `counter = 1\nwhile counter <= 3:\n    print(counter)\n    counter += 1`
  },

  7: {
    theory: `## Data Array: Lists  
Lists are multi-slot memory crates.  
Store multiple items, traverse them, deploy them.`,
    tutorial: `Lists are ordered collections of items. They are created using square brackets \`[]\`.
Python is **0-indexed**, meaning the first item is at position 0, the second at 1, etc.

**Example:**
\`\`\`python
ships = ["X-Wing", "TIE Fighter", "Falcon"]
print(ships[0]) # Prints "X-Wing"
print(ships[2]) # Prints "Falcon"
\`\`\``,
    challenge: `**Mission:**  
Create a list named \`modules\` containing the strings: **"engine"**, **"shields"**, **"comms"**.  
Print the **second** item ("shields").`,
    starterCode: `# Create list
`,
    validationRegex: `modules\\s*=\\s*\\[\\s*["']engine["']\\s*,\\s*["']shields["']\\s*,\\s*["']comms["']\\s*\\][\\s\\S]*print\\s*\\(\\s*modules\\[1\\]\\s*\\)`,
    expectedOutput: `shields`,
    hint: "Lists use square brackets `[]`. Python is 0-indexed, so the first item is index 0, the second is index 1.",
    solutionCode: `modules = ["engine", "shields", "comms"]\nprint(modules[1])`
  },

  8: {
    theory: `## Keyed Storage Lattice: Dictionaries  
Dictionaries map keys to values, like encrypted ID→Data links.`,
    tutorial: `Dictionaries store data in **key: value** pairs. They are unordered and changeable. You access values by referencing their key, not an index number. Use curly braces \`{}\`.

**Example:**
\`\`\`python
alien = {
  "color": "green",
  "planet": "Mars"
}
print(alien["color"]) # Prints "green"
\`\`\``,
    challenge: `**Mission:**  
Create a dictionary named \`pilot\` with keys:  
- **"name"**: set to **"Nova"**  
- **"rank"**: set to **"Cadet"**  
Print the pilot's **rank**.`,
    starterCode: `# Create dictionary
`,
    validationRegex: `pilot\\s*=\\s*\\{\\s*["']name["']\\s*:\\s*["']Nova["']\\s*,\\s*["']rank["']\\s*:\\s*["']Cadet["']\\s*\\}[\\s\\S]*print\\s*\\(\\s*pilot\\[["']rank["']\\]\\s*\\)`,
    expectedOutput: `Cadet`,
    hint: "Use curly braces `{}`. Key-Value pairs are separated by colons. Access values using `dictionary['key']`.",
    solutionCode: `pilot = {"name": "Nova", "rank": "Cadet"}\nprint(pilot["rank"])`
  },

  9: {
    theory: `## Subroutine Matrix: Functions  
Functions encapsulate reusable command sequences.  
Invoke them to execute skill modules.`,
    tutorial: `A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function.
Use the \`def\` keyword to define one.

**Example:**
\`\`\`python
def greet():
    print("Hello Commander")

greet() # Calls the function
\`\`\``,
    challenge: `**Mission:**  
Define a function named \`activate()\` that prints **"Module Activated"**.  
Then **call** the function.`,
    starterCode: `# Define function
`,
    validationRegex: `def\\s+activate\\s*\\(\\s*\\)\\s*:[\\s\\S]*print\\s*\\(\\s*["']Module Activated["']\\s*\\)[\\s\\S]*activate\\s*\\(`,
    expectedOutput: `Module Activated`,
    hint: "Use `def function_name():` to define it. Don't forget to call it afterwards by writing `activate()` on a new line.",
    solutionCode: `def activate():\n    print("Module Activated")\nactivate()`
  },

  10: {
    theory: `## Local vs Global Reality: Scope  
Variables exist in universes—local or global.  
Inside functions, local variables override cosmic (global) values.`,
    tutorial: `**Global Scope**: Variables created in the main body of the code are global and can be used anywhere.
**Local Scope**: Variables created inside a function belong to that function. They cannot be accessed from outside. If a local variable has the same name as a global one, the function uses the local one.

**Example:**
\`\`\`python
x = 10 # Global
def test():
    x = 5 # Local
    print(x) # Prints 5
test()
print(x) # Prints 10
\`\`\``,
    challenge: `**Mission:**  
1. Create a global variable \`status\` = **"Offline"**.  
2. Define a function \`update()\` that sets a local variable \`status\` = **"Online"** and prints it.  
3. Call the function.`,
    starterCode: `# Scope demonstration
`,
    validationRegex: `status\\s*=\\s*["']Offline["'][\\s\\S]*def\\s+update\\s*\\(\\s*\\)\\s*:[\\s\\S]*status\\s*=\\s*["']Online["'][\\s\\S]*update\\s*\\(`,
    expectedOutput: `Online`,
    hint: "Define `status` outside the function first. Then inside `def update():`, define `status` again with the new value.",
    solutionCode: `status = "Offline"\ndef update():\n    status = "Online"\n    print(status)\nupdate()`
  },

  11: {
    theory: `## Structural Blueprint: Classes  
Classes define starship templates.  
Objects are instantiated vessels based on these schematics.`,
    tutorial: `Python is an Object Oriented Programming (OOP) language. A **Class** is like a blueprint for creating objects.
Inside a class, functions are called **methods**. The first parameter of any method must be \`self\`, which refers to the current instance of the object.

**Example:**
\`\`\`python
class Robot:
    def say_hi(self):
        print("Beep Boop")

r1 = Robot() # Create instance
r1.say_hi()  # Call method
\`\`\``,
    challenge: `**Mission:**  
1. Create a class named \`Ship\`.  
2. Add a method \`launch(self)\` that prints **"Launch Sequence Initiated"**.  
3. Create an instance of Ship and call \`launch()\`.`,
    starterCode: `# Define class
`,
    validationRegex: `class\\s+Ship\\s*:[\\s\\S]*def\\s+launch\\s*\\(\\s*self\\s*\\)\\s*:[\\s\\S]*print\\s*\\(\\s*["']Launch Sequence Initiated["']\\s*\\)[\\s\\S]*Ship\\(\\)\\.launch\\(`,
    expectedOutput: `Launch Sequence Initiated`,
    hint: "Class methods must include `self` as the first parameter. Instantiate with `my_ship = Ship()`, then `my_ship.launch()`.",
    solutionCode: `class Ship:\n    def launch(self):\n        print("Launch Sequence Initiated")\n\nmy_ship = Ship()\nmy_ship.launch()`
  },

  12: {
    theory: `## Lineage Protocol: Inheritance  
Classes can inherit traits from parent blueprints—enhancing or overriding capabilities.`,
    tutorial: `Inheritance allows us to define a class that inherits all the methods and properties from another class.
**Parent Class (Base Class)**: The class being inherited from.
**Child Class (Derived Class)**: The class that inherits.

**Example:**
\`\`\`python
class Animal:
    def eat(self): print("Nom Nom")

class Dog(Animal): # Dog inherits Animal
    pass 

dog = Dog()
dog.eat() # Prints "Nom Nom"
\`\`\``,
    challenge: `**Mission:**  
1. Create a class \`Drone\` that inherits from \`Unit\`.  
2. Ensure \`Drone\` can use the parent's \`ping()\` method.  
3. Instantiate \`Drone\` and call \`ping()\`.`,
    starterCode: `class Unit:
    def ping(self):
        print("Ping")

# Create child class below
`,
    validationRegex: `class\\s+Drone\\s*\\(\\s*Unit\\s*\\)\\s*:[\\s\\S]*Drone\\(\\)\\.ping\\(`,
    expectedOutput: `Ping`,
    hint: "Define the class as `class Drone(Unit):`. Since you don't need to add new methods, you can just write `pass` inside the class body.",
    solutionCode: `class Drone(Unit):\n    pass\n\nd = Drone()\nd.ping()`
  },

  13: {
    theory: `## Enhancement Layer: Decorators  
Decorators modify functions with augmentation modules—preprocessing, authorization, logging.`,
    tutorial: `A decorator is a function that takes another function and extends the behavior of the latter function without explicitly modifying it.
Syntactically, you use the \`@\` symbol.

**How it works:**
\`\`\`python
def my_decorator(func):
    def wrapper():
        print("Before")
        func()
        print("After")
    return wrapper

@my_decorator
def say_hello():
    print("Hello")
\`\`\``,
    challenge: `**Mission:**  
1. Create a decorator \`boost\` that prints **"Boosting"** before calling the function.  
2. Apply it to a function \`run\` that prints **"Running"**.  
3. Call \`run()\`.`,
    starterCode: `# Decorator mission
def boost(func):
    def wrapper():
        # Print "Boosting" here
        func()
    return wrapper

# Apply @boost below
def run():
    print("Running")

run()
`,
    validationRegex: `print\\s*\\(\\s*["']Boosting["']\\s*\\)[\\s\\S]*@boost[\\s\\S]*def\\s+run`,
    expectedOutput: `Boosting\nRunning`,
    hint: "Inside `wrapper`, add `print('Boosting')` before `func()` is called. Then add `@boost` immediately above `def run():`.",
    solutionCode: `def boost(func):\n    def wrapper():\n        print("Boosting")\n        func()\n    return wrapper\n\n@boost\ndef run():\n    print("Running")\n\nrun()`
  },

  14: {
    theory: `## Energy Stream Emitters: Generators  
Generators yield values lazily—power-efficient data streams ideal for long-range scans.`,
    tutorial: `Normal functions return a single result and exit. Generators use \`yield\` to produce a sequence of results over time. Each time \`yield\` is hit, the function pauses and saves its state.
This is memory efficient for large loops.

**Example:**
\`\`\`python
def my_gen():
    yield "A"
    yield "B"

for char in my_gen():
    print(char)
\`\`\``,
    challenge: `**Mission:**  
Create a generator function \`scan()\` that uses \`yield\` to output **1**, then **2**, then **3**.  
Iterate over it with a loop and print each value.`,
    starterCode: `# Generator mission
`,
    validationRegex: `def\\s+scan\\s*\\(\\s*\\)\\s*:[\\s\\S]*yield\\s+1[\\s\\S]*yield\\s+2[\\s\\S]*yield\\s+3`,
    expectedOutput: `1\n2\n3`,
    hint: "Define the function. Inside, write `yield 1`, `yield 2`, etc. Then use `for item in scan(): print(item)`.",
    solutionCode: `def scan():\n    yield 1\n    yield 2\n    yield 3\n\nfor x in scan():\n    print(x)`
  },

  15: {
    theory: `## Temporal Async Core: Async/Await  
Async functions run concurrently—perfect for multi-channel starship operations.`,
    tutorial: `Asynchronous programming allows your program to handle other tasks while waiting for a long operation (like a network request) to finish.
You use \`async def\` to define a coroutine and \`await\` to wait for a result.

**Example:**
\`\`\`python
import asyncio

async def say_after(delay, what):
    await asyncio.sleep(delay)
    print(what)

asyncio.run(say_after(1, 'hello'))
\`\`\``,
    challenge: `**Mission:**  
1. Define an \`async\` function named \`pulse()\`.  
2. Inside, print **"Pulse"**.  
3. Use \`asyncio.run(pulse())\` to execute it.`,
    starterCode: `import asyncio

# Write async function
`,
    validationRegex: `async\\s+def\\s+pulse\\s*\\(\\s*\\)\\s*:[\\s\\S]*print\\s*\\(\\s*["']Pulse["']\\s*\\)[\\s\\S]*asyncio\\.run\\(\\s*pulse\\(\\)\\s*\\)`,
    expectedOutput: `Pulse`,
    hint: "Start with `async def pulse():`. The `asyncio.run()` function is used to start the top-level entry point.",
    solutionCode: `import asyncio\nasync def pulse():\n    print("Pulse")\nasyncio.run(pulse())`
  },

  16: {
    theory: `## Anomaly Containment: Try / Except
Errors (Exceptions) can cause system crashes.  
Wrap unstable code in \`try/except\` blocks to maintain containment fields.`,
    tutorial: `When an error occurs, Python normally stops and generates an error message. This can be handled using the \`try\` statement.
- **try**: The block of code to test for errors.
- **except**: The block of code to handle the error.

**Example:**
\`\`\`python
try:
    print(undefined_variable)
except:
    print("An error occurred")
\`\`\``,
    challenge: `**Mission:**  
1. Write a \`try\` block that attempts to divide **10** by **0**.  
2. Use an \`except\` block to catch the error and print **"Meltdown Averted"**.`,
    starterCode: `# Error handling mission
`,
    validationRegex: `try\\s*:[\\s\\S]*10\\s*\/\\s*0[\\s\\S]*except[\\s\\S]*print\\s*\\(\\s*["']Meltdown Averted["']\\s*\\)`,
    expectedOutput: `Meltdown Averted`,
    hint: "Place the dangerous code `10 / 0` inside the `try:` block. Use `except:` to handle the crash.",
    solutionCode: `try:\n    x = 10 / 0\nexcept:\n    print("Meltdown Averted")`
  },

  17: {
    theory: `## Syntax Compressor: List Comprehensions
List comprehensions compress multi-line loops into a single line of pure, crystalline logic.`,
    tutorial: `List comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list.

**Syntax:** \`[expression for item in iterable]\`

**Example:**
\`\`\`python
# Instead of:
# new_list = []
# for x in range(5):
#     new_list.append(x)

new_list = [x for x in range(5)]
\`\`\``,
    challenge: `**Mission:**  
Use a list comprehension to create a list called \`squares\` containing the square (\`x**2\`) of every number from **1** to **5** (inclusive).  
Print the list.`,
    starterCode: `# List comprehension mission
`,
    validationRegex: `squares\\s*=\\s*\\[.*for.*in.*\\][\\s\\S]*print\\s*\\(\\s*squares\\s*\\)`,
    expectedOutput: `[1, 4, 9, 16, 25]`,
    hint: "Syntax: `[expression for item in iterable]`. Use `x**2` as the expression and `range(1, 6)` as the iterable.",
    solutionCode: `squares = [x**2 for x in range(1, 6)]\nprint(squares)`
  },

  18: {
    theory: `## Nanobot Functionality: Lambda
Lambda functions are anonymous, single-use subroutines.`,
    tutorial: `A lambda function is a small anonymous function. It can take any number of arguments, but can only have one expression.
They are often used as inputs to other functions (like \`map\` or \`filter\`).

**Syntax:** \`lambda arguments : expression\`

**Example:**
\`\`\`python
# A function that adds 10 to 'a'
x = lambda a : a + 10
print(x(5)) # Prints 15
\`\`\``,
    challenge: `**Mission:**  
1. Create a lambda function named \`cube\` that takes one argument \`x\` and returns \`x\` to the power of 3.  
2. Print the result of \`cube(3)\`.`,
    starterCode: `# Lambda mission
`,
    validationRegex: `cube\\s*=\\s*lambda\\s+x\\s*:\\s*x\\s*\\*\\*\\s*3[\\s\\S]*print\\s*\\(\\s*cube\\(\\s*3\\s*\\)\\s*\\)`,
    expectedOutput: `27`,
    hint: "Write `cube = lambda x: ...`. The power operator in Python is `**`.",
    solutionCode: `cube = lambda x: x**3\nprint(cube(3))`
  },

  19: {
    theory: `## Singularity Containers: Sets
Sets are unordered collections that cannot hold duplicates.
Any redundant data matter added to a set is instantly annihilated.`,
    tutorial: `Sets are written with curly brackets \`{}\`. Unlike lists, they are unordered, unchangeable (items cannot be changed, but can be added/removed), and most importantly, **do not allow duplicates**.

**Example:**
\`\`\`python
thisset = {"apple", "banana", "apple"}
print(thisset) 
# Output: {'banana', 'apple'} 
# (The second "apple" is ignored)
\`\`\``,
    challenge: `**Mission:**  
1. You have a corrupted data stream: \`codes = [101, 102, 101, 103, 102]\`.  
2. Convert it into a \`set\` named \`unique_codes\` to remove duplicates.  
3. Print the set.`,
    starterCode: `# Set mission
codes = [101, 102, 101, 103, 102]
`,
    validationRegex: `set\\s*\\(\\s*codes\\s*\\)[\\s\\S]*print\\s*\\(`,
    expectedOutput: `{101, 102, 103}`,
    hint: "Use the `set()` constructor function: `unique_codes = set(codes)`.",
    solutionCode: `codes = [101, 102, 101, 103, 102]\nunique_codes = set(codes)\nprint(unique_codes)`
  },

  20: {
    theory: `## External Uplink: Modules
Modules allow you to import code from other files or the standard library.`,
    tutorial: `A module is basically a code library—a file containing a set of functions you can include in your application. Python has a massive standard library built-in.
Use the \`import\` keyword to load them.

**Example:**
\`\`\`python
import random
print(random.randint(1, 10))
\`\`\``,
    challenge: `**Mission:**  
1. \`import math\`.  
2. Use \`math.sqrt()\` to find the square root of **25**.  
3. Print the result.`,
    starterCode: `# Import mission
`,
    validationRegex: `import\\s+math[\\s\\S]*print\\s*\\(\\s*math\\.sqrt\\(\\s*25\\s*\\)\\s*\\)`,
    expectedOutput: `5.0`,
    hint: "Just `import math` at the top, then call `print(math.sqrt(25))`.",
    solutionCode: `import math\nprint(math.sqrt(25))`
  },

  21: {
    theory: `## Immutable Sealed Vaults: Tuples
Tuples are like lists, but once forged, they cannot be altered.`,
    tutorial: `Tuples are used to store multiple items in a single variable.
A tuple is a collection which is ordered and **immutable**.
Tuples are written with round brackets \`()\`.

**Example:**
\`\`\`python
thistuple = ("apple", "banana", "cherry")
# thistuple[0] = "orange" # This raises an Error!
print(thistuple[0]) # Access is allowed
\`\`\``,
    challenge: `**Mission:**  
1. Create a tuple named \`coords\` containing **4**, **5**, and **6**.  
2. Print the second element (index 1) of the tuple.`,
    starterCode: `# Tuple mission
`,
    validationRegex: `coords\\s*=\\s*\\(\\s*4\\s*,\\s*5\\s*,\\s*6\\s*\\)[\\s\\S]*print\\s*\\(\\s*coords\\[1\\]\\s*\\)`,
    expectedOutput: `5`,
    hint: "Tuples use parentheses `()`. Lists use brackets `[]`. Accessing them is the same: `coords[1]`.",
    solutionCode: `coords = (4, 5, 6)\nprint(coords[1])`
  },

  22: {
    theory: `## Laser Precision: Slicing
Slicing allows you to extract specific segments of data streams (lists or strings).`,
    tutorial: `You can return a range of characters or items by using the slice syntax.
Specify the start index and the end index, separated by a colon, to return a part of the string or list.
**Syntax:** \`sequence[start:stop:step]\`

**Example:**
\`\`\`python
b = "Hello, World!"
print(b[2:5]) # Output: "llo"
# Index 2 is 'l', Index 5 is ',' (excluded)
\`\`\``,
    challenge: `**Mission:**  
1. Given the list \`readings = [10, 20, 30, 40, 50]\`.  
2. Use slicing to extract **[20, 30, 40]** and store it in \`sub_readings\`.  
3. Print \`sub_readings\`.`,
    starterCode: `readings = [10, 20, 30, 40, 50]
# Slice mission
`,
    validationRegex: `readings\\[1:4\\][\\s\\S]*print\\s*\\(`,
    expectedOutput: `[20, 30, 40]`,
    hint: "20 is at index 1. 40 is at index 3. The stop index is exclusive, so use index 4. `readings[1:4]`.",
    solutionCode: `readings = [10, 20, 30, 40, 50]\nsub_readings = readings[1:4]\nprint(sub_readings)`
  },

  23: {
    theory: `## Holographic Projection: f-Strings
f-Strings provide a modern, readable way to embed expressions inside string literals.`,
    tutorial: `Formatted String Literals (f-strings) are prefixed with \`f\` and use curly braces \`{}\` containing expressions that will be replaced with their values.

**Example:**
\`\`\`python
val = 10
print(f"Value is {val * 2}") 
# Output: "Value is 20"
\`\`\``,
    challenge: `**Mission:**  
1. Use an f-string to print **"System Efficiency: 98%"**.  
2. Use the variable \`eff = 98\` inside the f-string curly braces.`,
    starterCode: `eff = 98
# f-String mission
`,
    validationRegex: `print\\s*\\(\\s*f["']System Efficiency: {eff}%["']\\s*\\)`,
    expectedOutput: `System Efficiency: 98%`,
    hint: "Put `f` before the opening quote. Use `{eff}` inside the string to inject the value.",
    solutionCode: `eff = 98\nprint(f"System Efficiency: {eff}%")`
  },

  24: {
    theory: `## Universal Adapters: *args & **kwargs
Sometimes you don't know how many inputs a system will receive.`,
    tutorial: `If you don't know how many arguments will be passed to your function, add a \`*\` before the parameter name.
This receives a **tuple** of arguments.

**Example:**
\`\`\`python
def my_func(*kids):
  print("The youngest child is " + kids[2])

my_func("Emil", "Tobias", "Linus")
\`\`\``,
    challenge: `**Mission:**  
1. Define a function \`sum_all(*args)\` that sums all numbers passed to it.  
2. Call \`print(sum_all(1, 2, 3, 4))\`.`,
    starterCode: `# Args mission
`,
    validationRegex: `def\\s+sum_all\\s*\\(\\s*\\*args\\s*\\)\\s*:[\\s\\S]*return\\s+sum\\(\\s*args\\s*\\)[\\s\\S]*print\\s*\\(\\s*sum_all\\(\\s*1\\s*,\\s*2\\s*,\\s*3\\s*,\\s*4\\s*\\)\\s*\\)`,
    expectedOutput: `10`,
    hint: "You can use the built-in `sum(args)` function inside your function definition.",
    solutionCode: `def sum_all(*args):\n    return sum(args)\nprint(sum_all(1, 2, 3, 4))`
  },

  25: {
    theory: `## Resource Airlocks: Context Managers
The \`with\` statement ensures resources are safely opened and closed, even if errors occur.`,
    tutorial: `The most common use of context managers is opening files. Using \`with\`, the file is automatically closed after the indented block is finished, preventing memory leaks or corruption.

**Example:**
\`\`\`python
with open("file.txt", "r") as f:
    content = f.read()
# f is closed here automatically
\`\`\``,
    challenge: `**Mission:**  
For this simulation, we will use a mock context manager.  
1. Write: \`with open("data.txt", "w") as f:\`  
2. Inside the block, write \`f.write("Secure")\`.  
(Note: The environment mocks file operations).`,
    starterCode: `# Context Manager mission
# We have mocked 'open' for you.
`,
    validationRegex: `with\\s+open\\s*\\(\\s*["']data\\.txt["']\\s*,\\s*["']w["']\\s*\\)\\s+as\\s+f\\s*:[\\s\\S]*f\\.write\\(\\s*["']Secure["']\\s*\\)`,
    expectedOutput: `File 'data.txt' written.`,
    hint: "The syntax is `with expression as variable:`. Everything inside the block must be indented.",
    solutionCode: `with open("data.txt", "w") as f:\n    f.write("Secure")`
  },

  26: {
    theory: `## Parallel Processing: Enumerate & Zip
- \`enumerate()\`: Adds a counter to an iterable.
- \`zip()\`: Combines two iterables.`,
    tutorial: `Often you need the index (position) of an item while looping. \`enumerate()\` gives you back two variables: the index and the value.

**Example:**
\`\`\`python
fruits = ["apple", "banana"]
for idx, x in enumerate(fruits):
  print(idx, x)
# Output:
# 0 apple
# 1 banana
\`\`\``,
    challenge: `**Mission:**  
1. Given \`items = ["Alpha", "Beta"]\`.  
2. Use \`enumerate\` in a for-loop to print the index and the item.`,
    starterCode: `items = ["Alpha", "Beta"]
# Enumerate mission
`,
    validationRegex: `for\\s+\\w+,\\s*\\w+\\s+in\\s+enumerate\\(\\s*items\\s*\\):[\\s\\S]*print\\(`,
    expectedOutput: `0 Alpha\n1 Beta`,
    hint: "Unpack the tuple returned by enumerate: `for index, item in enumerate(items):`.",
    solutionCode: `items = ["Alpha", "Beta"]\nfor i, item in enumerate(items):\n    print(i, item)`
  },

  27: {
    theory: `## Stream Refineries: Map & Filter
Functional programming tools allows for mass-processing of data arrays.`,
    tutorial: `**Filter**: The \`filter()\` function returns an iterator were the items are filtered through a function to test if the item is accepted or not.
    
**Syntax**: \`filter(function, iterable)\`

**Example:**
\`\`\`python
ages = [5, 12, 17, 18, 24, 32]

def myFunc(x):
  if x < 18:
    return False
  else:
    return True

adults = filter(myFunc, ages)
\`\`\``,
    challenge: `**Mission:**  
1. Given \`nums = [1, 2, 3, 4]\`.  
2. Use \`filter\` and a \`lambda\` to keep only numbers greater than **2**.  
3. Convert the result to a list and print it.`,
    starterCode: `nums = [1, 2, 3, 4]
# Filter mission
`,
    validationRegex: `list\\(\\s*filter\\(\\s*lambda\\s*\\w+\\s*:\\s*\\w+\\s*>\\s*2\\s*,\\s*nums\\s*\\)\\s*\\)`,
    expectedOutput: `[3, 4]`,
    hint: "Wrap the whole filter call in `list()`. The lambda should be `lambda x: x > 2`.",
    solutionCode: `nums = [1, 2, 3, 4]\nres = list(filter(lambda x: x > 2, nums))\nprint(res)`
  },

  28: {
    theory: `## The Soul of the Machine: Magic Methods
Magic methods (dunders) allow objects to behave like built-in types.`,
    tutorial: `Dunder (Double UNDERscore) methods are special methods.
\`__str__\` controls what is returned when you call \`str(object)\` or \`print(object)\`.

**Example:**
\`\`\`python
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def __str__(self):
    return f"{self.name}({self.age})"

p = Person("John", 36)
print(p) # Output: John(36)
\`\`\``,
    challenge: `**Mission:**  
1. Create a class \`Core\`.  
2. Define \`__str__\` to return **"Core Online"**.  
3. Print an instance of \`Core\`.`,
    starterCode: `# Magic Method mission
`,
    validationRegex: `class\\s+Core\\s*:[\\s\\S]*def\\s+__str__\\s*\\(\\s*self\\s*\\)\\s*:[\\s\\S]*return\\s+["']Core Online["'][\\s\\S]*print\\(\\s*Core\\(\\)\\s*\\)`,
    expectedOutput: `Core Online`,
    hint: "Define the method `def __str__(self):`. It must return a string, not print it.",
    solutionCode: `class Core:\n    def __str__(self):\n        return "Core Online"\nprint(Core())`
  },

  29: {
    theory: `## Structural Integrity: Type Hinting
Type hints act as structural reinforcement, telling developers what data types are expected.`,
    tutorial: `Python is dynamically typed, but you can add optional type hints to help documentation and IDE tools.
This doesn't affect runtime, but makes code cleaner.

**Syntax:** \`variable: type\` and \`def func(arg: type) -> return_type:\`

**Example:**
\`\`\`python
def add(x: int, y: int) -> int:
    return x + y
\`\`\``,
    challenge: `**Mission:**  
1. Define a function \`greet(name: str) -> str\`.  
2. It should return **"Hello " + name**.  
3. Call it with **"Commander"** and print the result.`,
    starterCode: `# Type Hinting mission
`,
    validationRegex: `def\\s+greet\\(\\s*name\\s*:\\s*str\\s*\\)\\s*->\\s*str\\s*:[\\s\\S]*return\\s+["']Hello\\s+["']\\s*\\+\\s*name[\\s\\S]*print\\(\\s*greet\\(\\s*["']Commander["']\\s*\\)\\s*\\)`,
    expectedOutput: `Hello Commander`,
    hint: "Use colons for argument types and `->` for the return type. `def greet(name: str) -> str:`.",
    solutionCode: `def greet(name: str) -> str:\n    return "Hello " + name\nprint(greet("Commander"))`
  },

  30: {
    theory: `## The Infinite Loop: Recursion
Recursion occurs when a function calls itself.`,
    tutorial: `Recursion is a common mathematical and programming concept. It means that a function calls itself.
Every recursive function needs a **Base Case**—a condition where it stops calling itself, otherwise it runs forever (Stack Overflow).

**Example:**
\`\`\`python
def tri_recursion(k):
  if k > 0:
    result = k + tri_recursion(k - 1)
  else:
    result = 0
  return result
\`\`\``,
    challenge: `**Mission:**  
1. Define a recursive function \`factorial(n)\`.  
2. Base case: if \`n\` is 1, return 1.  
3. Recursive case: return \`n * factorial(n-1)\`.  
4. Print \`factorial(5)\`.`,
    starterCode: `# Recursion mission
`,
    validationRegex: `def\\s+factorial\\(\\s*n\\s*\\)\\s*:[\\s\\S]*if\\s+n\\s*==\\s*1\\s*:[\\s\\S]*return\\s+1[\\s\\S]*return\\s+n\\s*\\*\\s*factorial\\(\\s*n\\s*-\\s*1\\s*\\)[\\s\\S]*print\\(\\s*factorial\\(\\s*5\\s*\\)\\s*\\)`,
    expectedOutput: `120`,
    hint: "Check if `n == 1` first. If so, return 1. Otherwise return `n * factorial(n-1)`.",
    solutionCode: `def factorial(n):\n    if n == 1:\n        return 1\n    return n * factorial(n - 1)\nprint(factorial(5))`
  },

  31: {
    theory: `## Temporal Coordinates: Datetime
The \`datetime\` module allows you to manipulate temporal markers.`,
    tutorial: `A date in Python is not a data type of its own, but we can import a module named \`datetime\` to work with dates as date objects.

**Example:**
\`\`\`python
import datetime

x = datetime.datetime.now()
print(x.year)
print(x.strftime("%A")) # Weekday name
\`\`\``,
    challenge: `**Mission:**  
1. Import \`datetime\` from \`datetime\`.  
2. Create a date object for **Jan 1, 2050** using \`datetime(2050, 1, 1)\`.  
3. Print the year of that date.`,
    starterCode: `# Datetime mission
`,
    validationRegex: `from\\s+datetime\\s+import\\s+datetime[\\s\\S]*datetime\\(2050,\\s*1,\\s*1\\)[\\s\\S]*print\\(\\s*\\w+\\.year\\s*\\)`,
    expectedOutput: `2050`,
    hint: "Access the year attribute using `.year` on the datetime object.",
    solutionCode: `from datetime import datetime\nd = datetime(2050, 1, 1)\nprint(d.year)`
  },

  32: {
    theory: `## Universal Serialization: JSON
JSON (JavaScript Object Notation) is the lingua franca of data exchange.`,
    tutorial: `JSON is a syntax for storing and exchanging data. Python has a built-in package called \`json\`, which can be used to work with JSON data.
- \`json.dumps()\`: Convert Python object to JSON string.
- \`json.loads()\`: Convert JSON string to Python object.

**Example:**
\`\`\`python
import json
x = { "name": "John", "age": 30 }
y = json.dumps(x) # Result is a string
\`\`\``,
    challenge: `**Mission:**  
1. Import \`json\`.  
2. Create a dictionary \`payload = {"id": 99}\`.  
3. Convert it to a JSON string using \`json.dumps()\` and print it.`,
    starterCode: `# JSON mission
`,
    validationRegex: `import\\s+json[\\s\\S]*payload\\s*=\\s*{\\s*["']id["']\\s*:\\s*99\\s*}[\\s\\S]*print\\(\\s*json\\.dumps\\(\\s*payload\\s*\\)\\s*\\)`,
    expectedOutput: `{"id": 99}`,
    hint: "`json.dumps()` (dump string) converts a Python object to a JSON string.",
    solutionCode: `import json\npayload = {"id": 99}\nprint(json.dumps(payload))`
  },

  33: {
    theory: `## Pattern Recognition: Regex (re)
Regular Expressions allow for complex string searching and validation.`,
    tutorial: `A RegEx, or Regular Expression, is a sequence of characters that forms a search pattern.
The \`re\` module offers a set of functions that allows us to search a string for a match.

**Common patterns:**
- \`\\d\`: Any digit (0-9)
- \`\\w\`: Any alphanumeric character
- \`+\`: One or more occurrences

**Example:**
\`\`\`python
import re
txt = "The rain in Spain"
x = re.search("^The.*Spain$", txt)
\`\`\``,
    challenge: `**Mission:**  
1. Import \`re\`.  
2. Use \`re.search()\` to find the digits in **"Sector 7G"**.  
3. Print the found digits using \`.group()\`.`,
    starterCode: `import re
text = "Sector 7G"
# Regex mission
`,
    validationRegex: `re\\.search\\(\\s*r?["']\\\\d\\+["']\\s*,\\s*text\\s*\\)[\\s\\S]*print\\(\\s*\\w+\\.group\\(\\)\\s*\\)`,
    expectedOutput: `7`,
    hint: "The regex for a digit is `\\d` or `\\d+` (one or more digits).",
    solutionCode: `import re\ntext = "Sector 7G"\nmatch = re.search(r"\\d+", text)\nprint(match.group())`
  },

  34: {
    theory: `## High-Speed Tally: Collections Counter
The \`Counter\` tool automatically tallies elements in a list.`,
    tutorial: `A \`Counter\` is a sub-class of the dictionary. It is used to keep the count of the elements in an iterable in the form of an unordered dictionary where the key represents the element in the iterable and value represents the count of that element.

**Example:**
\`\`\`python
from collections import Counter
c = Counter(['a', 'b', 'c', 'a', 'b', 'b'])
print(c)
# Counter({'b': 3, 'a': 2, 'c': 1})
\`\`\``,
    challenge: `**Mission:**  
1. Import \`Counter\` from \`collections\`.  
2. Count the votes in \`["Yes", "No", "Yes", "Yes"]\`.  
3. Print the count for **"Yes"**.`,
    starterCode: `votes = ["Yes", "No", "Yes", "Yes"]
# Counter mission
`,
    validationRegex: `from\\s+collections\\s+import\\s+Counter[\\s\\S]*Counter\\(\\s*votes\\s*\\)[\\s\\S]*print\\(\\s*\\w+\\[["']Yes["']\\]\\s*\\)`,
    expectedOutput: `3`,
    hint: "Create the counter object first: `c = Counter(votes)`. Then access `c['Yes']`.",
    solutionCode: `from collections import Counter\nvotes = ["Yes", "No", "Yes", "Yes"]\nc = Counter(votes)\nprint(c["Yes"])`
  },

  35: {
    theory: `## Safe Storage: DefaultDict
A \`defaultdict\` never raises a KeyError.`,
    tutorial: `Usually, a Python dictionary throws a \`KeyError\` if you try to get an item with a key that is not currently in the dictionary. 
The \`defaultdict\` in contrast will simply create any items that you try to access (provided of course they do not exist yet).

**Example:**
\`\`\`python
from collections import defaultdict
# Factory function 'list' creates empty list on missing key
d = defaultdict(list) 
d["python"].append("awesome")
\`\`\``,
    challenge: `**Mission:**  
1. Import \`defaultdict\` from \`collections\`.  
2. Create a \`defaultdict(int)\`.  
3. Increment the key **"errors"** by 1 and print the dictionary.`,
    starterCode: `# Defaultdict mission
`,
    validationRegex: `from\\s+collections\\s+import\\s+defaultdict[\\s\\S]*defaultdict\\(\\s*int\\s*\\)[\\s\\S]*\\[["']errors["']\\]\\s*\\+=\\s*1[\\s\\S]*print\\(`,
    expectedOutput: `defaultdict(<class 'int'>, {'errors': 1})`,
    hint: "Pass `int` (without parentheses) to `defaultdict` constructor.",
    solutionCode: `from collections import defaultdict\nd = defaultdict(int)\nd["errors"] += 1\nprint(d)`
  },

  36: {
    theory: `## Data Gatekeepers: @property
Properties allow you to control access to class attributes.`,
    tutorial: `The \`@property\` decorator allows you to define a method that can be accessed like an attribute (without parentheses). This is often used for "Getters" to calculate values on the fly or control access.

**Example:**
\`\`\`python
class Circle:
    def __init__(self, radius):
        self.radius = radius

    @property
    def diameter(self):
        return self.radius * 2

c = Circle(5)
print(c.diameter) # 10 (Notice no parentheses!)
\`\`\``,
    challenge: `**Mission:**  
1. Create class \`Shield\`.  
2. Add a method \`level(self)\` decorated with \`@property\` that returns **50**.  
3. Print \`Shield().level\` (no parentheses).`,
    starterCode: `# Property mission
`,
    validationRegex: `class\\s+Shield\\s*:[\\s\\S]*@property[\\s\\S]*def\\s+level\\(\\s*self\\s*\\)[\\s\\S]*return\\s+50[\\s\\S]*print\\(\\s*Shield\\(\\)\\.level\\s*\\)`,
    expectedOutput: `50`,
    hint: "The `@property` decorator goes immediately above the method definition. You access it like a variable, not a function.",
    solutionCode: `class Shield:\n    @property\n    def level(self):\n        return 50\nprint(Shield().level)`
  },

  37: {
    theory: `## Factory Controls: Class Methods
\`@classmethod\` receives the class itself (\`cls\`) as the first argument.`,
    tutorial: `Regular methods take \`self\` (the instance). Class methods take \`cls\` (the class). 
They can be called on the class itself, without creating an instance first.
This is often used for factory methods (alternative constructors).

**Example:**
\`\`\`python
class Pizza:
    @classmethod
    def margherita(cls):
        return cls(["cheese", "tomatoes"])
\`\`\``,
    challenge: `**Mission:**  
1. Create class \`Drone\`.  
2. Add a class method \`create(cls)\` that returns **"Drone Created"**.  
3. Call it using the class name: \`print(Drone.create())\`.`,
    starterCode: `# Classmethod mission
`,
    validationRegex: `class\\s+Drone\\s*:[\\s\\S]*@classmethod[\\s\\S]*def\\s+create\\(\\s*cls\\s*\\)[\\s\\S]*return\\s+["']Drone Created["'][\\s\\S]*print\\(\\s*Drone\\.create\\(\\)\\s*\\)`,
    expectedOutput: `Drone Created`,
    hint: "Use `@classmethod` decorator and change `self` to `cls` in the argument list.",
    solutionCode: `class Drone:\n    @classmethod\n    def create(cls):\n        return "Drone Created"\nprint(Drone.create())`
  },

  38: {
    theory: `## Lightweight Structure: NamedTuple
NamedTuples are like tuples but with named fields.`,
    tutorial: `Named tuples assign meaning to each position in a tuple and allow for more readable, self-documenting code. They can be used wherever regular tuples are used, and they add the ability to access fields by name instead of position index.

**Example:**
\`\`\`python
from collections import namedtuple
Color = namedtuple('Color', ['red', 'green', 'blue'])
c = Color(55, 155, 255)
print(c.red) # 55
\`\`\``,
    challenge: `**Mission:**  
1. Import \`namedtuple\`.  
2. Create a type \`Coord\` with fields \`lat\` and \`lon\`.  
3. Create an instance with lat=10, lon=20 and print the \`lat\`.`,
    starterCode: `# Namedtuple mission
`,
    validationRegex: `from\\s+collections\\s+import\\s+namedtuple[\\s\\S]*namedtuple\\(\\s*["']Coord["']\\s*,\\s*\\[.*["']lat["'].*\\]\\s*\\)[\\s\\S]*print\\(\\s*\\w+\\.lat\\s*\\)`,
    expectedOutput: `10`,
    hint: "`Coord = namedtuple('Coord', ['lat', 'lon'])`. Then `c = Coord(10, 20)`.",
    solutionCode: `from collections import namedtuple\nCoord = namedtuple('Coord', ['lat', 'lon'])\np = Coord(10, 20)\nprint(p.lat)`
  },

  39: {
    theory: `## Enforced Blueprints: Abstract Classes
Abstract Base Classes (ABCs) force subclasses to implement specific methods.`,
    tutorial: `An abstract class can be considered a blueprint for other classes. It allows you to create a set of methods that must be created within any child classes built from the abstract class.
A class which contains one or more abstract methods is called an abstract class.

**Example:**
\`\`\`python
from abc import ABC, abstractmethod

class Polygon(ABC):
    @abstractmethod
    def sides(self):
        pass
\`\`\``,
    challenge: `**Mission:**  
1. Define a class \`Template(ABC)\`.  
2. Add an abstract method \`process\`.  
3. Create a subclass \`Worker\` that implements \`process\` to print **"Working"**.  
4. Run \`Worker().process()\`.`,
    starterCode: `from abc import ABC, abstractmethod

# Abstract Class mission
`,
    validationRegex: `class\\s+Template\\(ABC\\):[\\s\\S]*@abstractmethod[\\s\\S]*def\\s+process[\\s\\S]*class\\s+Worker\\(Template\\):[\\s\\S]*print\\(\\s*["']Working["']\\s*\\)[\\s\\S]*Worker\\(\\)\\.process\\(\\)`,
    expectedOutput: `Working`,
    hint: "Inherit from `ABC`. Decorate the base method with `@abstractmethod`. The child class MUST define `process` or it will error.",
    solutionCode: `class Template(ABC):\n    @abstractmethod\n    def process(self): pass\n\nclass Worker(Template):\n    def process(self):\n        print("Working")\n\nWorker().process()`
  },

  40: {
    theory: `## Genetic Mixing: Multiple Inheritance
Python supports inheriting from multiple parents.`,
    tutorial: `A class can be derived from more than one base class in Python. This is called multiple inheritance.
The child class has access to all the methods and attributes of all parent classes.
**MRO (Method Resolution Order)** determines which parent's method is called if names collide.

**Example:**
\`\`\`python
class A:
    pass
class B:
    pass
class C(A, B):
    pass
\`\`\``,
    challenge: `**Mission:**  
1. Create class \`Flyable\` with method \`fly\` (prints "Flying").  
2. Create class \`Swimmable\` with method \`swim\` (prints "Swimming").  
3. Create class \`Duck\` inheriting both.  
4. Make a duck fly.`,
    starterCode: `# Multiple Inheritance mission
`,
    validationRegex: `class\\s+Flyable:[\\s\\S]*def\\s+fly.*print.*["']Flying["'][\\s\\S]*class\\s+Swimmable:[\\s\\S]*class\\s+Duck\\(\\s*Flyable\\s*,\\s*Swimmable\\s*\\):[\\s\\S]*Duck\\(\\)\\.fly\\(\\)`,
    expectedOutput: `Flying`,
    hint: "`class Duck(Flyable, Swimmable):`. It inherits methods from both.",
    solutionCode: `class Flyable:\n    def fly(self):\n        print("Flying")\nclass Swimmable:\n    pass\nclass Duck(Flyable, Swimmable):\n    pass\nDuck().fly()`
  },

  41: {
    theory: `## Function Freezing: Partials
\`functools.partial\` allows you to create a new function with some arguments already fixed (frozen).`,
    tutorial: `Partial functions allow us to fix a certain number of arguments of a function and generate a new function.
This is useful when you have a function that takes many arguments, but you want to use it in a context where you can only provide some of them.

**Example:**
\`\`\`python
from functools import partial
def power(base, exponent):
    return base ** exponent

square = partial(power, exponent=2)
print(square(10)) # 100
\`\`\``,
    challenge: `**Mission:**  
1. Import \`partial\` from \`functools\`.  
2. Create a function \`multiply(x, y)\`.  
3. Create a partial \`double\` that fixes \`y=2\`.  
4. Print \`double(10)\`.`,
    starterCode: `# Partial mission
`,
    validationRegex: `from\\s+functools\\s+import\\s+partial[\\s\\S]*def\\s+multiply\\(x,\\s*y\\):[\\s\\S]*partial\\(\\s*multiply\\s*,\\s*y=2\\s*\\)[\\s\\S]*print\\(\\s*double\\(10\\)\\s*\\)`,
    expectedOutput: `20`,
    hint: "`double = partial(multiply, y=2)`. This creates a new function where y is always 2.",
    solutionCode: `from functools import partial\ndef multiply(x, y):\n    return x * y\ndouble = partial(multiply, y=2)\nprint(double(10))`
  },

  42: {
    theory: `## Cognitive Cache: Memoization
Memoization saves the results of expensive function calls.`,
    tutorial: `Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls.
Python's \`functools\` module provides the \`@lru_cache\` (Least Recently Used) decorator to do this automatically.

**Example:**
\`\`\`python
@lru_cache(maxsize=None)
def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)
\`\`\``,
    challenge: `**Mission:**  
1. Import \`lru_cache\`.  
2. Decorate a function \`calc(n)\` with \`@lru_cache\`.  
3. The function should return \`n * n\`.  
4. Call \`calc(5)\` and print the result.`,
    starterCode: `from functools import lru_cache
# Memoization mission
`,
    validationRegex: `from\\s+functools\\s+import\\s+lru_cache[\\s\\S]*@lru_cache[\\s\\S]*def\\s+calc\\(n\\):[\\s\\S]*return\\s+n\\s*\\*\\s*n[\\s\\S]*print\\(\\s*calc\\(5\\)\\s*\\)`,
    expectedOutput: `25`,
    hint: "Place `@lru_cache` above the function definition.",
    solutionCode: `from functools import lru_cache\n@lru_cache\ndef calc(n):\n    return n * n\nprint(calc(5))`
  },

  43: {
    theory: `## Custom Traversal: Iterators
To make an object iterable (usable in a for-loop), you must implement \`__iter__\` and \`__next__\`.`,
    tutorial: `An iterator is an object that contains a countable number of values.
Technically, in Python, an iterator is an object which implements the iterator protocol, which consists of the methods \`__iter__()\` and \`__next__()\`.

**Example:**
\`\`\`python
class MyNumbers:
  def __iter__(self):
    self.a = 1
    return self

  def __next__(self):
    x = self.a
    self.a += 1
    return x
\`\`\``,
    challenge: `**Mission:**  
1. Create a class \`Repeater\`.  
2. Define \`__iter__\` to return \`self\`.  
3. Define \`__next__\` to return **"Loop"** (just once, then raise StopIteration, or just return it for the test).  
4. Manually print \`next(Repeater())\`.`,
    starterCode: `# Iterator mission
`,
    validationRegex: `class\\s+Repeater\\s*:[\\s\\S]*def\\s+__iter__[\\s\\S]*def\\s+__next__[\\s\\S]*return\\s+["']Loop["'][\\s\\S]*print\\(\\s*next\\(\\s*Repeater\\(\\)\\s*\\)\\s*\\)`,
    expectedOutput: `Loop`,
    hint: "`__iter__` returns self. `__next__` returns the value.",
    solutionCode: `class Repeater:\n    def __iter__(self): return self\n    def __next__(self): return "Loop"\nprint(next(Repeater()))`
  },

  44: {
    theory: `## Meta-Decorators: Decorators with Args
Standard decorators take a function. But what if the decorator itself needs configuration?`,
    tutorial: `To pass arguments to your decorators, you need to add another layer of wrapping. 
1. The outer function accepts arguments.
2. The middle function accepts the function to be decorated.
3. The inner function accepts arguments passed to the decorated function.

**Structure:**
\`\`\`python
def repeat(num_times):
    def decorator_repeat(func):
        def wrapper(*args, **kwargs):
            for _ in range(num_times):
                value = func(*args, **kwargs)
            return value
        return wrapper
    return decorator_repeat
\`\`\``,
    challenge: `**Mission:**  
1. Create a decorator \`@add_tag(tag)\`.  
2. It should return a string result wrapped in the tag (e.g., "<tag>result</tag>").  
3. Decorate a function returning "Hello" with \`@add_tag("b")\`.  
4. Print the result.`,
    starterCode: `def add_tag(tag):
    def decorator(func):
        def wrapper():
            return f"<{tag}>{func()}</{tag}>"
        return wrapper
    return decorator

# Apply the decorator below
`,
    validationRegex: `def\\s+get_text\\(\\):[\\s\\S]*@add_tag\\(\\s*["']b["']\\s*\\)[\\s\\S]*print\\(\\s*get_text\\(\\)\\s*\\)`,
    expectedOutput: `<b>Hello</b>`,
    hint: "Use `@add_tag('b')` before the function definition.",
    solutionCode: `@add_tag("b")\ndef get_text():\n    return "Hello"\nprint(get_text())`
  },

  45: {
    theory: `## Syntax Singularity: The Walrus Operator
The Walrus Operator \`:=\` assigns values to variables as part of a larger expression.`,
    tutorial: `The walrus operator \`:=\` allows you to assign a value to a variable inside an expression. This is useful when you need to use a value twice in a condition (once to test it, once to use it).

**Example:**
\`\`\`python
# Old way
n = len(data)
if n > 10: ...

# Walrus way
if (n := len(data)) > 10:
    print(f"Length is {n}")
\`\`\``,
    challenge: `**Mission:**  
1. Write an \`if\` statement using \`:=\`.  
2. Assign \`x := 10\` inside the condition.  
3. Check if \`x > 5\`.  
4. Inside the block, print \`x\`.`,
    starterCode: `# Walrus operator mission
`,
    validationRegex: `if\\s*\\(?\\s*x\\s*:=\\s*10\\s*\\)?\\s*>\\s*5\\s*:[\\s\\S]*print\\(\\s*x\\s*\\)`,
    expectedOutput: `10`,
    hint: "Wrap the assignment in parentheses if needed: `if (x := 10) > 5:`.",
    solutionCode: `if (x := 10) > 5:\n    print(x)`
  },

  46: {
    theory: `## Reality Check: Asserts
\`assert\` is a debugging tool. It verifies a condition is True.`,
    tutorial: `The \`assert\` keyword is used when debugging code. It tests if a condition in your code returns True, if not, the program will raise an \`AssertionError\`.

**Syntax:** \`assert condition, message\`

**Example:**
\`\`\`python
x = "hello"
assert x == "hello"
assert x == "goodbye", "x should be hello"
\`\`\``,
    challenge: `**Mission:**  
1. Write \`assert 10 > 5\`.  
2. Write \`print("Checked")\`.  
(If the assertion fails, the code stops. If it passes, it prints).`,
    starterCode: `# Assert mission
`,
    validationRegex: `assert\\s+10\\s*>\\s*5[\\s\\S]*print\\(\\s*["']Checked["']\\s*\\)`,
    expectedOutput: `Checked`,
    hint: "Simply write `assert 10 > 5` on one line.",
    solutionCode: `assert 10 > 5\nprint("Checked")`
  },

  47: {
    theory: `## Strict Schematics: Generics
When type hinting lists or dicts, use Generics to specify *what* is inside them.`,
    tutorial: `In modern Python (3.9+), you can use built-in collection types like \`list\` and \`dict\` as generic types. This helps define exactly what kind of list it is.

**Example:**
\`\`\`python
# A list that contains only integers
def process(numbers: list[int]):
    pass
\`\`\``,
    challenge: `**Mission:**  
1. Define function \`process(items: list[str])\`.  
2. It should return the first item.  
3. Call it with \`["A", "B"]\` and print the result.`,
    starterCode: `# Generic Typing mission
`,
    validationRegex: `def\\s+process\\(\\s*items\\s*:\\s*list\\[str\\]\\s*\\)[\\s\\S]*return\\s+items\\[0\\][\\s\\S]*print\\(\\s*process\\(`,
    expectedOutput: `A`,
    hint: "Use square brackets for the generic type: `list[str]`.",
    solutionCode: `def process(items: list[str]):\n    return items[0]\nprint(process(["A", "B"]))`
  },

  48: {
    theory: `## Automated Construction: Dataclasses
Dataclasses automatically generate \`__init__\`, \`__repr__\`, and \`__eq__\` methods based on type hints.`,
    tutorial: `Data classes are a decorator and functions for automatically adding generated special methods such as \`__init__()\` and \`__repr__()\` to user-defined classes.

**Example:**
\`\`\`python
from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int

p = Point(10, 20)
print(p) # Point(x=10, y=20)
\`\`\``,
    challenge: `**Mission:**  
1. Import \`dataclass\`.  
2. Create \`@dataclass class User\`.  
3. Field: \`id: int\`.  
4. Print \`User(1)\`.`,
    starterCode: `# Dataclass mission
`,
    validationRegex: `from\\s+dataclasses\\s+import\\s+dataclass[\\s\\S]*@dataclass[\\s\\S]*class\\s+User\\s*:[\\s\\S]*id\\s*:\\s*int[\\s\\S]*print\\(\\s*User\\(1\\)\\s*\\)`,
    expectedOutput: `User(id=1)`,
    hint: "Decorate the class with `@dataclass`. Define fields like variables: `id: int`.",
    solutionCode: `from dataclasses import dataclass\n@dataclass\nclass User:\n    id: int\nprint(User(1))`
  },

  49: {
    theory: `## Async Airlocks: Async Context Managers
For managing resources that require asynchronous setup/teardown (like database connections).`,
    tutorial: `Just like standard context managers (\`with\`), async context managers (\`async with\`) allow you to allocate and release resources precisely, but they can suspend execution in their enter and exit methods.

**Example:**
\`\`\`python
async with aiohttp.ClientSession() as session:
    async with session.get(url) as resp:
        print(resp.status)
\`\`\``,
    challenge: `**Mission:**  
1. Define an \`async\` function \`run()\`.  
2. Inside, mimic an async context: \`print("Entering")\`, then \`print("Exiting")\`.  
3. Execute via \`asyncio.run(run())\`.`,
    starterCode: `import asyncio
# Async Context mission
`,
    validationRegex: `async\\s+def\\s+run\\(\\):[\\s\\S]*print\\(\\s*["']Entering["']\\s*\\)[\\s\\S]*print\\(\\s*["']Exiting["']\\s*\\)[\\s\\S]*asyncio\\.run\\(\\s*run\\(\\)\\s*\\)`,
    expectedOutput: `Entering\nExiting`,
    hint: "Just define the async function and print the messages sequentially for this simulation.",
    solutionCode: `import asyncio\nasync def run():\n    print("Entering")\n    print("Exiting")\nasyncio.run(run())`
  },

  50: {
    theory: `## The Ultimate Truth: Zen of Python
You have reached the summit of the PyVerse.
The final lesson is the philosophy itself.`,
    tutorial: `Long time Pythoneer Tim Peters wrote the "Zen of Python", which sums up the design principles of the language.
You can view it anytime by importing \`this\`.

> "Beautiful is better than ugly."
> "Explicit is better than implicit."
> "Simple is better than complex."`,
    challenge: `**Final Mission:**  
1. \`import this\`.  
2. This will automatically print the Zen of Python.  
3. Read it. Understanding it is the key to Mastery.`,
    starterCode: `# The Final Step
`,
    validationRegex: `import\\s+this`,
    expectedOutput: `The Zen of Python, by Tim Peters`,
    hint: "It is the simplest module in Python. Just two words.",
    solutionCode: `import this`
  }
};

// Fallback for empty levels
export const getLesson = (id: number): LessonContent => {
  return STATIC_LESSONS[id] || {
    theory: "## Data Corrupted\nLink to central archives not found for this sector.",
    tutorial: "No data available.",
    challenge: "Proceed to next node.",
    starterCode: "print('Bypassing...')",
    validationRegex: ".*",
    expectedOutput: "Bypassing...",
    hint: "No hint available.",
    solutionCode: "print('Bypassing...')"
  };
};