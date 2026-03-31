import type { ErrorResponse } from '../types/content';

export const errorsEn: ErrorResponse[] = [
  {
    id: 'js-not-defined',
    pattern: '(ReferenceError:.*is not defined|is not defined)',
    title: 'ReferenceError: Variable is not defined',
    whatItMeans:
      'You tried to use a variable or function name that doesn\'t exist in the current scope. JavaScript looked for it but couldn\'t find it anywhere.',
    commonCauses: [
      'Typo in the variable name (e.g., `userName` vs `username`)',
      'Using a variable before declaring it with `let`, `const`, or `var`',
      'The variable was declared inside a function or block and you\'re trying to use it outside',
      'Forgot to import a module or library',
    ],
    stepsToFix: [
      'Check the exact spelling - variable names are case-sensitive',
      'Make sure the variable is declared before the line that uses it',
      'Verify the variable is in the correct scope (not trapped inside a function or block)',
      'If it\'s from a library, make sure you imported it at the top of the file',
    ],
    exampleFix: `// ❌ Broken
console.log(mesage); // ReferenceError: mesage is not defined

// ✅ Fixed - correct spelling and declaration
let message = "Hello!";
console.log(message); // "Hello!"`,
  },
  {
    id: 'js-not-a-function',
    pattern: '(TypeError:.*is not a function)',
    title: 'TypeError: Something is not a function',
    whatItMeans:
      'You tried to call something as a function (using parentheses), but it\'s not actually a function. It might be a number, string, undefined, or an object.',
    commonCauses: [
      'Typo in the function name',
      'Calling a method on the wrong data type (e.g., calling `.push()` on a string)',
      'Overwriting a function name with a non-function value',
      'Missing or incorrect import',
      'Calling a callback before it\'s assigned',
    ],
    stepsToFix: [
      'Check the spelling of the function name',
      'Use `console.log(typeof yourVariable)` to see what type it actually is',
      'Make sure you haven\'t accidentally reassigned the function name to something else',
      'Verify the method exists on the type you\'re using (e.g., arrays have `.push()`, strings don\'t)',
    ],
    exampleFix: `// ❌ Broken
let count = 5;
count(); // TypeError: count is not a function

// ✅ Fixed - don't call a number as a function
let count = 5;
console.log(count); // 5

// ❌ Broken - wrong method on string
let name = "Alice";
name.push(" Smith"); // TypeError: name.push is not a function

// ✅ Fixed - use string concatenation
let name = "Alice";
name = name + " Smith";`,
  },
  {
    id: 'js-cannot-read-properties',
    pattern: '((?:TypeError:\\s*)?Cannot read propert(?:y|ies) of (?:undefined|null))',
    title: 'TypeError: Cannot read properties of undefined',
    whatItMeans:
      'You tried to access a property (like `.name` or `.length`) on something that is `undefined` or `null`. The object you expected to be there doesn\'t exist.',
    commonCauses: [
      'Accessing a nested property when a parent object is missing',
      'An API call or database query returned nothing and you didn\'t check',
      'Array `.find()` returned `undefined` because no match was found',
      'A DOM query like `document.querySelector()` returned `null`',
      'Wrong variable name or accessing properties before data is loaded',
    ],
    stepsToFix: [
      'Add `console.log()` before the error line to check what the variable actually contains',
      'Add a null/undefined check before accessing properties',
      'Use optional chaining (`?.`) to safely access nested properties',
      'If it\'s async data, make sure it\'s loaded before you try to use it',
    ],
    exampleFix: `// ❌ Broken
let user = undefined;
console.log(user.name); // TypeError: Cannot read properties of undefined

// ✅ Fixed - check before accessing
let user = undefined;
if (user) {
  console.log(user.name);
} else {
  console.log("No user found");
}

// ✅ Even better - use optional chaining
console.log(user?.name ?? "No user found");`,
  },
  {
    id: 'js-unexpected-token',
    pattern: '(SyntaxError: Unexpected token|Unexpected token)',
    title: 'SyntaxError: Unexpected token',
    whatItMeans:
      'JavaScript encountered a character or symbol where it didn\'t expect one. Your code structure has a syntax mistake - like a missing bracket, extra comma, or misplaced keyword.',
    commonCauses: [
      'Missing or extra curly braces `{}`, parentheses `()`, or brackets `[]`',
      'Extra or missing commas in arrays/objects',
      'Using a reserved keyword as a variable name',
      'Mixing up single and double quotes incorrectly',
      'Forgetting a closing quote in a string',
    ],
    stepsToFix: [
      'Look at the line number in the error - the problem is often on that line or the line before it',
      'Check for matching pairs: every `{` needs a `}`, every `(` needs a `)`',
      'Use your editor\'s bracket-matching feature to find mismatches',
      'Look for trailing commas in objects/arrays and missing commas between items',
    ],
    exampleFix: `// ❌ Broken - missing closing brace
function greet(name) {
  console.log("Hello " + name);
// SyntaxError: Unexpected end of input

// ✅ Fixed - added closing brace
function greet(name) {
  console.log("Hello " + name);
}

// ❌ Broken - extra comma
let colors = ["red", "blue",, "green"];

// ✅ Fixed
let colors = ["red", "blue", "green"];`,
  },
  {
    id: 'js-unexpected-end',
    pattern: '(SyntaxError: Unexpected end of input)',
    title: 'SyntaxError: Unexpected end of input',
    whatItMeans:
      'JavaScript reached the end of your code but was still expecting more - usually a closing bracket, brace, or parenthesis. Something was opened but never closed.',
    commonCauses: [
      'Missing closing curly brace `}` for a function, if-statement, or loop',
      'Missing closing parenthesis `)` in a function call or condition',
      'Unclosed string (missing closing quote)',
      'Incomplete code - you might have accidentally deleted a line',
    ],
    stepsToFix: [
      'Count your opening and closing braces - they should match',
      'Start from the end of the file and work backwards to find the missing closer',
      'Use your editor\'s code folding feature to see which blocks are unclosed',
      'Use an auto-formatter (like Prettier) - it will often pinpoint where the mismatch is',
    ],
    exampleFix: `// ❌ Broken - missing closing braces
function calculateTotal(items) {
  let total = 0;
  for (let item of items) {
    total += item.price;

// ✅ Fixed - close the for loop and function
function calculateTotal(items) {
  let total = 0;
  for (let item of items) {
    total += item.price;
  }
  return total;
}`,
  },
  {
    id: 'py-indentation-error',
    pattern: '(IndentationError)',
    title: 'IndentationError (Python)',
    whatItMeans:
      'Python uses indentation (spaces at the start of a line) to define code blocks. This error means your indentation is inconsistent or missing where Python expects it.',
    commonCauses: [
      'Mixing tabs and spaces in the same file',
      'Forgetting to indent the body of a function, loop, or if-statement',
      'Inconsistent indentation levels (e.g., 2 spaces in one place, 4 in another)',
      'Copy-pasting code from the internet that uses different indentation',
    ],
    stepsToFix: [
      'Configure your editor to use spaces instead of tabs (4 spaces is the Python standard)',
      'Make sure every block after a colon (`:`) is indented one level deeper',
      'Use your editor\'s "convert indentation to spaces" feature',
      'Check that all lines in the same block have the exact same indentation',
    ],
    exampleFix: `# ❌ Broken - missing indentation
def greet(name):
print("Hello " + name)  # IndentationError!

# ✅ Fixed - indented with 4 spaces
def greet(name):
    print("Hello " + name)

# ❌ Broken - inconsistent indentation
if True:
    print("yes")
  print("also yes")  # IndentationError!

# ✅ Fixed - consistent 4-space indentation
if True:
    print("yes")
    print("also yes")`,
  },
  {
    id: 'py-nonetype',
    pattern: "(TypeError:.*'NoneType'|NoneType)",
    title: "TypeError: 'NoneType' (Python)",
    whatItMeans:
      'You tried to do something with `None` that only works on actual values. `None` in Python means "nothing" or "no value" - it\'s what functions return by default if they don\'t have a `return` statement.',
    commonCauses: [
      'A function doesn\'t have a `return` statement, so it returns `None`',
      'Calling a list method like `.sort()` or `.append()` and assigning the result (these return `None`)',
      'A variable was supposed to receive data but the operation failed silently',
      'Using the result of `print()` - it always returns `None`',
    ],
    stepsToFix: [
      'Check if the function has a `return` statement that actually returns a value',
      'Remember that `.sort()`, `.append()`, `.reverse()` modify the list in place and return `None`',
      'Add a check: `if result is not None:` before using the value',
      'Use `print()` for displaying and a separate variable for storing',
    ],
    exampleFix: `# ❌ Broken - .sort() returns None
numbers = [3, 1, 2]
sorted_numbers = numbers.sort()
print(sorted_numbers[0])  # TypeError: 'NoneType' object is not subscriptable

# ✅ Fixed - sort in place, then use the list
numbers = [3, 1, 2]
numbers.sort()
print(numbers[0])  # 1

# ✅ Alternative - use sorted() which returns a new list
numbers = [3, 1, 2]
sorted_numbers = sorted(numbers)
print(sorted_numbers[0])  # 1`,
  },
  {
    id: 'py-name-error',
    pattern: '(NameError:.*is not defined|NameError)',
    title: 'NameError (Python)',
    whatItMeans:
      'Python can\'t find a variable or function with the name you used. It\'s not defined anywhere Python can see it.',
    commonCauses: [
      'Typo in the variable or function name',
      'Using a variable before assigning a value to it',
      'Forgetting to import a module (e.g., using `math.sqrt()` without `import math`)',
      'The variable was defined inside a function and you\'re trying to use it outside',
    ],
    stepsToFix: [
      'Double-check the spelling - Python is case-sensitive (`name` ≠ `Name`)',
      'Make sure the variable is assigned before the line that uses it',
      'If it\'s from a module, add the `import` statement at the top of your file',
      'Check that the variable isn\'t trapped in a different scope (inside a function)',
    ],
    exampleFix: `# ❌ Broken - typo
user_name = "Alice"
print(user_Name)  # NameError: name 'user_Name' is not defined

# ✅ Fixed - correct capitalization
user_name = "Alice"
print(user_name)  # "Alice"

# ❌ Broken - forgot to import
result = math.sqrt(16)  # NameError: name 'math' is not defined

# ✅ Fixed - add import
import math
result = math.sqrt(16)  # 4.0`,
  },
  {
    id: 'py-index-error',
    pattern: '(IndexError: list index out of range|IndexError)',
    title: 'IndexError: list index out of range (Python)',
    whatItMeans:
      'You tried to access a list item at a position that doesn\'t exist. For example, if your list has 3 items (indices 0, 1, 2) and you try to access index 3 or higher.',
    commonCauses: [
      'Forgetting that list indices start at 0, not 1',
      'Using `len(list)` as an index - the last valid index is `len(list) - 1`',
      'Looping with a range that goes one step too far',
      'The list is empty but you try to access the first element',
      'Hardcoding an index for a list whose length can change',
    ],
    stepsToFix: [
      'Print the list and its length to see what\'s actually there',
      'Remember: for a list of length N, valid indices are 0 to N-1',
      'Check if the list is empty before accessing elements: `if len(my_list) > 0:`',
      'Use `my_list[-1]` to safely get the last element regardless of length',
      'Use `for item in my_list:` instead of manual index tracking when possible',
    ],
    exampleFix: `# ❌ Broken - index out of range
colors = ["red", "green", "blue"]
print(colors[3])  # IndexError! Valid indices are 0, 1, 2

# ✅ Fixed - use a valid index
colors = ["red", "green", "blue"]
print(colors[2])  # "blue" (last item)
print(colors[-1]) # "blue" (last item, the Pythonic way)

# ✅ Fixed - check before accessing
colors = []
if len(colors) > 0:
    print(colors[0])
else:
    print("The list is empty")`,
  },
  {
  id: 'js-max-call-stack',
  pattern: '(?:RangeError:?\s*)?Maximum call\s*stack size exceeded',
  title: 'Maximum call stack size exceeded',
  whatItMeans: 'JavaScript tried to keep calling functions until it ran out of space for more calls. This usually means there is a loop of function calls that never ends.',
  commonCauses: [
    'A function that calls itself without a proper base case',
    'Two functions calling each other in a cycle',
    'Accidentally updating state in a React render path so the component keeps re rendering',
    'Very deep nested data without limits when recursing over it'
  ],
  stepsToFix: [
    'Find the function mentioned near the error and look for where it calls itself or other functions in a loop',
    'If it is recursion, add a clear base case that stops calling the function when work is done',
    'For React, move state updates into event handlers or effects so they do not run on every render',
    'Test with small input first, then gradually increase the size to be sure it stops correctly'
  ],
  exampleFix: '```js\n// Bad recursion - never stops\nfunction countdown(n) {\n  return countdown(n - 1);\n}\n\n// Fixed version with a base case\nfunction countdownFixed(n) {\n  if (n <= 0) {\n    console.log("Done");\n    return;\n  }\n  console.log(n);\n  countdownFixed(n - 1);\n}\n\ncountdownFixed(3); // 3, 2, 1, Done\n```'
},
{
  id: 'py-syntax-error',
  pattern: 'SyntaxError:?.*',
  title: 'SyntaxError',
  whatItMeans: 'Python could not even start running your code because something is wrong with the structure of the program.',
  commonCauses: [
    'Missing colon after if, for, while, def, or class',
    'Lines that should be indented are not, or extra indent where it is not allowed',
    'Mismatched brackets, parentheses, or quotes',
    'Accidentally writing two statements on one line without proper separators'
  ],
  stepsToFix: [
    'Look at the line number in the error and also the line just above it',
    'Check that every if, for, while, def, and class line ends with a colon',
    'Make sure parentheses, brackets, and quotes all open and close in pairs',
    'Fix indentation so blocks line up in a clean staircase shape'
  ],
  exampleFix: '```python\n# Bad code\nif x > 10\n    print("Big")\n\n# Fixed code\nif x > 10:\n    print("Big")\n```'
},
{
  id: 'py-type-error',
  pattern: 'TypeError(?!:.*NoneType).*',
  title: 'TypeError - wrong type',
  whatItMeans: 'Python found a value of the wrong type for an operation, such as adding a string to a number.',
  commonCauses: [
    'Trying to add or join string and integer directly',
    'Passing the wrong type of argument into a function',
    'Using list or dict where a number is expected, or the reverse',
    'Forgetting to convert input text to int or float before doing math'
  ],
  stepsToFix: [
    'Read the error message to see which types Python is complaining about',
    'Use int, float, or str to convert values before using them together',
    'Print out type(value) to confirm what type you actually have',
    'Update the function so it receives the type it expects, or change the call site'
  ],
  exampleFix: '```python\nage = "12"\n# Bad - string plus int\n# total = age + 5\n\n# Fixed - convert to int first\ntotal = int(age) + 5\nprint(total)  # 17\n```'
},
{
  id: 'py-value-error',
  pattern: 'ValueError:?.*',
  title: 'ValueError',
  whatItMeans: 'Python understood the type you used but the specific value was not allowed.',
  commonCauses: [
    'Calling int on text that is not a number',
    'Using a negative number where only positive numbers make sense',
    'Passing an invalid choice into a function that only accepts certain strings',
    'Bad data in a file or user input that does not match the expected format'
  ],
  stepsToFix: [
    'Read the full message to see which value caused the problem',
    'Validate user input before converting or processing it',
    'Add try and except ValueError so you can show a friendly message instead of crashing',
    'If data comes from a file or API, inspect a few rows to make sure the format is right'
  ],
  exampleFix: '```python\ntext = "hello"\n\ntry:\n    number = int(text)\nexcept ValueError:\n    print("Please enter digits only")\n```'
},
{
  id: 'py-key-error',
  pattern: 'KeyError:?.*',
  title: 'KeyError',
  whatItMeans: 'You asked a dictionary for a key that does not exist.',
  commonCauses: [
    'Spelling the key name differently than how it was stored',
    'Assuming every item has the same keys when some do not',
    'Reading data from JSON or a file where some fields are optional',
    'Using a dynamic key value that is not in the dictionary'
  ],
  stepsToFix: [
    'Print the dictionary keys with dict_var.keys() to see what is actually there',
    'Use the get method with a default value instead of direct indexing',
    'Check for the key with in before accessing it',
    'Clean or validate your data so missing keys are handled on purpose'
  ],
  exampleFix: '```python\nuser = {"name": "Sam"}\n\n# Safer access\nemail = user.get("email", "no email provided")\nprint(email)\n```'
},
{
  id: 'py-attribute-error',
  pattern: 'AttributeError:?.*',
  title: 'AttributeError',
  whatItMeans: 'Your code tried to use an attribute or method that the object does not have.',
  commonCauses: [
    'Calling a method from the wrong type of object',
    'Assuming a variable has a value but it is None',
    'Spelling the attribute or method name differently from how it is defined',
    'Mixing up list, dict, and string methods'
  ],
  stepsToFix: [
    'Look at the message to see which attribute name is missing',
    'Use print(type(value)) to confirm what kind of object you really have',
    'Check the documentation or autocomplete to use the correct method name',
    'Add checks for None before calling methods if a value might be missing'
  ],
  exampleFix: '```python\nname = "Ada"\n# Bad - list method on string\n# name.append("!")\n\n# Fixed - string method\nname = name + "!"\nprint(name)  # Ada!\n```'
},
{
  id: 'py-import-error',
  pattern: '(?:ModuleNotFoundError|ImportError):?.*',
  title: 'ImportError or ModuleNotFoundError',
  whatItMeans: 'Python could not find or load a module that you tried to import.',
  commonCauses: [
    'Misspelling the module name in the import statement',
    'The package is not installed in your environment',
    'Running the script from a folder where local imports do not line up',
    'Using a virtual environment that does not have the dependency installed yet'
  ],
  stepsToFix: [
    'Check the import line and correct the module name if needed',
    'Run pip install package name in the correct environment',
    'Print sys.path to understand where Python is looking for modules',
    'If using a project layout, run the script from the project root or use python -m package.module'
  ],
  exampleFix: '```python\n# Terminal\n# pip install requests\n\nimport requests\nresponse = requests.get("https://example.com")\nprint(response.status_code)\n```'
},
{
  id: 'py-zero-division',
  pattern: 'ZeroDivisionError:?.*',
  title: 'ZeroDivisionError',
  whatItMeans: 'Your code tried to divide by zero, which is not allowed in math.',
  commonCauses: [
    'User entered 0 for a divisor',
    'Data from a file or API contained zeros that you did not expect',
    'Counters that were never updated but still used as divisors',
    'Using averages without checking if there are any items first'
  ],
  stepsToFix: [
    'Check the value that you are dividing by before the division happens',
    'Add an if statement to handle the zero case in a special way',
    'Guard averages by checking count > 0 first',
    'Log or print the inputs when the error happens to understand real data'
  ],
  exampleFix: '```python\ntotal = 10\ncount = 0\n\nif count == 0:\n    print("No items yet, cannot compute average")\nelse:\n    average = total / count\n    print(average)\n```'
},
{
  id: 'py-file-not-found',
  pattern: 'FileNotFoundError:?.*',
  title: 'FileNotFoundError',
  whatItMeans: 'Python tried to open a file, but that file path doesn not exist.',
  commonCauses: [
    'Using the wrong file name or file extension',
    'Running the script from a different folder than you expect',
    'Forgetting to include the data file in the project or upload it',
    'Using a relative path that does not match the current working directory'
  ],
  stepsToFix: [
    'Print the current working directory with import os and os.getcwd()',
    'Check that the file name and extension are exactly correct',
    'Try using an absolute path while you debug the problem',
    'Place the file in a known folder and build the path with os.path.join'
  ],
  exampleFix: '```python\nimport os\n\nprint(os.getcwd())\nfile_path = os.path.join("data", "scores.csv")\n\nwith open(file_path) as f:\n    print(f.readline())\n```'
},
{
  id: 'py-recursion-error',
  pattern: 'RecursionError:?.*',
  title: 'RecursionError - maximum recursion depth exceeded',
  whatItMeans: 'Your recursive function called itself too many times without stopping.',
  commonCauses: [
    'Missing or incorrect base case in a recursive function',
    'Recursive call that moves in the wrong direction so it never reaches the base case',
    'Processing very deep or cyclic data structures with recursion only',
    'Accidental mutual recursion where two functions call each other'
  ],
  stepsToFix: [
    'Find the recursive function named in the traceback',
    'Add a base case that returns without making another recursive call',
    'Make sure each recursive call moves closer to the base case',
    'For very deep data, consider rewriting the algorithm to use a loop and an explicit stack'
  ],
  exampleFix: '```python\n# Bad - base case is wrong\n# def factorial(n):\n#     return n * factorial(n)\n\n# Fixed version\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))  # 120\n```'
}

];