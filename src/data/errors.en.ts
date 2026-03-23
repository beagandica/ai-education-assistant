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
    pattern: '(TypeError: Cannot read propert(y|ies) of (undefined|null))',
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
];
