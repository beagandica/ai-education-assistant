import type { Quiz } from '../types/content';

export const quizzesEn: Quiz[] = [
  {
    id: 'var-1',
    topic: 'variables',
    question: 'What does the following code output?\n\nlet x = 5;\nx = x + 3;\nconsole.log(x);',
    options: ['5', '3', '8', 'undefined'],
    correctIndex: 2,
    explanation:
      'x starts at 5, then x + 3 (which is 8) is assigned back to x. So console.log(x) prints 8.',
  },
  {
    id: 'var-2',
    topic: 'variables',
    question: 'Which keyword declares a variable that cannot be reassigned in JavaScript?',
    options: ['let', 'var', 'const', 'static'],
    correctIndex: 2,
    explanation:
      'const declares a constant - a variable whose value cannot be reassigned after initialization. let and var allow reassignment.',
  },
  {
    id: 'var-3',
    topic: 'variables',
    question: 'In Python, what is the value of y after this code?\n\nx = 10\ny = x\nx = 20',
    options: ['10', '20', '30', 'Error'],
    correctIndex: 0,
    explanation:
      'y = x copies the current value of x (10) into y. Changing x later to 20 does not affect y. So y remains 10.',
  },
  {
    id: 'var-4',
    topic: 'variables',
    question: 'What happens when you run this code?\n\nconst score = 100;\nscore = 200;\nconsole.log(score);',
    options: ['100', '200', 'undefined', 'Error - you cannot reassign a const'],
    correctIndex: 3,
    explanation:
      'Variables declared with const cannot be reassigned. Trying to change score from 100 to 200 throws a TypeError. Use let if you need to reassign.',
  },
  {
    id: 'loop-1',
    topic: 'loops',
    question: 'How many times does this loop run?\n\nfor (let i = 0; i < 3; i++) {\n  console.log(i);\n}',
    options: ['2', '3', '4', 'Infinite'],
    correctIndex: 1,
    explanation:
      'The loop starts at i = 0 and runs while i < 3. So i takes the values 0, 1, 2 - that\'s 3 iterations.',
  },
  {
    id: 'loop-2',
    topic: 'loops',
    question: 'What does this Python code print?\n\nfor i in range(1, 4):\n    print(i)',
    options: ['0 1 2 3', '1 2 3', '1 2 3 4', '0 1 2'],
    correctIndex: 1,
    explanation:
      'range(1, 4) produces the numbers 1, 2, 3. The end value (4) is not included.',
  },
  {
    id: 'loop-3',
    topic: 'loops',
    question: 'Which loop is best when you don\'t know how many times to repeat?',
    options: ['for loop', 'while loop', 'do loop', 'foreach loop'],
    correctIndex: 1,
    explanation:
      'A while loop runs as long as a condition is true, making it ideal when the number of iterations isn\'t known in advance.',
  },
  {
    id: 'loop-4',
    topic: 'loops',
    question: 'What will this code output?\n\nlet sum = 0;\nfor (let i = 1; i <= 4; i++) {\n  sum += i;\n}\nconsole.log(sum);',
    options: ['4', '10', '15', '6'],
    correctIndex: 1,
    explanation:
      'The loop adds 1 + 2 + 3 + 4 = 10. The variable sum accumulates the total as i goes from 1 to 4.',
  },
  {
    id: 'cond-1',
    topic: 'conditionals',
    question: 'What does this code print?\n\nlet age = 15;\nif (age >= 18) {\n  console.log("Adult");\n} else {\n  console.log("Minor");\n}',
    options: ['Adult', 'Minor', 'undefined', 'Error'],
    correctIndex: 1,
    explanation:
      'age is 15, which is less than 18. So the condition age >= 18 is false, and the else block runs, printing "Minor".',
  },
  {
    id: 'cond-2',
    topic: 'conditionals',
    question: 'In Python, what keyword is used for "else if"?',
    options: ['else if', 'elseif', 'elif', 'elsif'],
    correctIndex: 2,
    explanation:
      'Python uses "elif" as its keyword for else-if conditions. It\'s short for "else if".',
  },
  {
    id: 'cond-3',
    topic: 'conditionals',
    question: 'What is the difference between = and === in JavaScript?',
    options: [
      'No difference',
      '= assigns a value; === compares values and types',
      '= compares; === assigns',
      '=== is not valid JavaScript',
    ],
    correctIndex: 1,
    explanation:
      '= is the assignment operator (sets a value). === is the strict equality operator (checks if two values are equal in both value and type).',
  },
  {
    id: 'cond-4',
    topic: 'conditionals',
    question: 'What does this code print?\n\nlet x = 7;\nif (x > 10) {\n  console.log("big");\n} else if (x > 5) {\n  console.log("medium");\n} else {\n  console.log("small");\n}',
    options: ['big', 'medium', 'small', 'big medium'],
    correctIndex: 1,
    explanation:
      'x is 7. The first condition (x > 10) is false. The second condition (x > 5) is true, so "medium" is printed. Once a branch matches, the rest are skipped.',
  },
  {
    id: 'func-1',
    topic: 'functions',
    question: 'What does this function return?\n\nfunction add(a, b) {\n  a + b;\n}',
    options: ['The sum of a and b', 'undefined', '0', 'Error'],
    correctIndex: 1,
    explanation:
      'The function is missing the "return" keyword. Without return, JavaScript functions return undefined by default. It should be: return a + b;',
  },
  {
    id: 'func-2',
    topic: 'functions',
    question: 'In Python, how do you define a function that takes two parameters?',
    options: [
      'function add(a, b):',
      'def add(a, b):',
      'func add(a, b):',
      'define add(a, b):',
    ],
    correctIndex: 1,
    explanation:
      'In Python, functions are defined using the "def" keyword, followed by the function name, parameters in parentheses, and a colon.',
  },
  {
    id: 'func-3',
    topic: 'functions',
    question: 'What is the output?\n\nconst greet = (name) => `Hello, ${name}!`;\nconsole.log(greet("Sam"));',
    options: ['Hello, Sam!', 'Hello, name!', 'undefined', 'Error'],
    correctIndex: 0,
    explanation:
      'This is an arrow function that uses a template literal. It takes "Sam" as the name parameter and returns "Hello, Sam!".',
  },
  {
    id: 'func-4',
    topic: 'functions',
    question: 'What does this Python function return?\n\ndef multiply(a, b):\n    result = a * b\n\nprint(multiply(3, 4))',
    options: ['12', '7', 'None', 'Error'],
    correctIndex: 2,
    explanation:
      'The function calculates result = 12 but never returns it. Without a return statement, Python functions return None by default. It should be: return a * b',
  },
  {
  id: "var-5",
  topic: "variables",
  question: "What does the following Python code print?\n\nx = 10\ny = 3.5\nprint(type(x), type(y))",
  options: [
    "<class 'int'> <class 'float'>",
    "<class 'number'> <class 'decimal'>",
    "int float",
    "<type 'int'> <type 'float'>"
  ],
  correctIndex: 0,
  explanation: "In Python, type() returns the class of a value. Integers show as <class 'int'> and decimals as <class 'float'>. Python 2 used <type '...'> but Python 3 always uses <class '...'>. Knowing your variable types helps you avoid unexpected bugs in arithmetic and comparisons."
},
{
  id: "var-6",
  topic: "variables",
  question: "What is the output of the following JavaScript code?\n\nlet name = 'Alex';\nlet age = 25;\nconsole.log('Hello, ' + name + '! You are ' + age + ' years old.');",
  options: [
    "Hello, Alex! You are 25 years old.",
    "Hello, name! You are age years old.",
    "Hello, 'Alex'! You are 25 years old.",
    "TypeError: cannot concatenate string and number"
  ],
  correctIndex: 0,
  explanation: "JavaScript automatically converts the number 25 to a string when using + with a string. This is called implicit type coercion. The variables are replaced with their values at runtime, producing the final greeting. A modern alternative is template literals: console.log(`Hello, ${name}!`)."
},
{
  id: "var-7",
  topic: "variables",
  question: "In Python, what is the result of int('42') + float('3.5')?",
  options: [
    "45.5",
    "'423.5'",
    "45",
    "TypeError"
  ],
  correctIndex: 0,
  explanation: "int('42') converts the string '42' to the integer 42, and float('3.5') converts '3.5' to the float 3.5. Adding an int and a float in Python always produces a float, so the result is 45.5. Type conversion functions like int(), float(), and str() are essential when working with user input."
},
{
  id: "var-8",
  topic: "variables",
  question: "What will this JavaScript code print?\n\nlet x = 'global';\nfunction test() {\n  let x = 'local';\n  console.log(x);\n}\ntest();\nconsole.log(x);",
  options: [
    "local\nglobal",
    "global\nglobal",
    "local\nlocal",
    "ReferenceError: x is not defined"
  ],
  correctIndex: 0,
  explanation: "JavaScript uses block scoping with let. Inside the function, x refers to the locally declared 'local' variable. Outside, x still refers to the 'global' variable. The inner declaration does not overwrite the outer one - they are completely separate variables living in different scopes."
},
{
  id: "loop-5",
  topic: "loops",
  question: "What does the following JavaScript code log to the console?\n\nconst fruits = ['apple', 'banana', 'cherry'];\nfor (const fruit of fruits) {\n  console.log(fruit);\n}",
  options: [
    "apple\nbanana\ncherry",
    "0\n1\n2",
    "['apple', 'banana', 'cherry']",
    "fruit\nfruit\nfruit"
  ],
  correctIndex: 0,
  explanation: "The for...of loop iterates over the VALUES of an iterable like an array. Each iteration assigns the current element to the variable fruit. This is different from for...in, which gives you the keys (indices for arrays). Use for...of when you need the values directly - it is clean and avoids off-by-one index errors."
},
{
  id: "loop-6",
  topic: "loops",
  question: "How many times does 'x' get printed in this Python code?\n\nfor i in range(3):\n  for j in range(2):\n    print('x')",
  options: [
    "6",
    "5",
    "3",
    "2"
  ],
  correctIndex: 0,
  explanation: "The outer loop runs 3 times (i = 0, 1, 2) and for each of those iterations, the inner loop runs 2 times (j = 0, 1). Total prints = 3 x 2 = 6. Nested loops multiply their counts, which makes them powerful for working with grids, tables, or any two-dimensional data."
},
{
  id: "loop-7",
  topic: "loops",
  question: "What is the output of this JavaScript code?\n\nfor (let i = 0; i < 5; i++) {\n  if (i === 3) break;\n  if (i % 2 === 0) continue;\n  console.log(i);\n}",
  options: [
    "1",
    "1\n3",
    "0\n2\n4",
    "1\n2"
  ],
  correctIndex: 0,
  explanation: "The loop runs for i = 0, 1, 2, then exits at i = 3 due to break. When i = 0: 0 % 2 === 0, so continue skips it. When i = 1: not even, not 3, so it prints 1. When i = 2: 2 % 2 === 0, so continue skips it. When i = 3: break exits the loop immediately. Only 1 is printed."
},
{
  id: "loop-8",
  topic: "loops",
  question: "What does this Python list comprehension produce?\n\nsquares = [x ** 2 for x in range(1, 6)]\nprint(squares)",
  options: [
    "[1, 4, 9, 16, 25]",
    "[1, 2, 3, 4, 5]",
    "[0, 1, 4, 9, 16]",
    "[2, 4, 6, 8, 10]"
  ],
  correctIndex: 0,
  explanation: "List comprehensions build a new list by applying an expression to each item in a sequence. range(1, 6) produces [1, 2, 3, 4, 5], and x**2 squares each value. The result is [1, 4, 9, 16, 25]. List comprehensions are a concise and Pythonic alternative to a for loop that appends to a list."
},
{
  id: "cond-5",
  topic: "conditionals",
  question: "What is the value of result after this JavaScript code runs?\n\nconst score = 75;\nconst result = score >= 60 ? 'pass' : 'fail';",
  options: [
    "'pass'",
    "'fail'",
    "true",
    "undefined"
  ],
  correctIndex: 0,
  explanation: "The ternary operator is a shorthand for if/else: condition ? valueIfTrue : valueIfFalse. Since 75 >= 60 is true, result is assigned 'pass'. Ternary operators are great for simple one-line assignments but can hurt readability when nested - prefer a regular if/else for complex logic."
},
{
  id: "cond-6",
  topic: "conditionals",
  question: "Which of the following values is TRUTHY in JavaScript?",
  options: [
    "'0'",
    "0",
    "null",
    "undefined"
  ],
  correctIndex: 0,
  explanation: "In JavaScript, the string '0' is truthy because it is a non-empty string. The falsy values are: false, 0, '' (empty string), null, undefined, and NaN. Everything else is truthy - including '0', [] (empty array), and {} (empty object). This surprises many beginners who expect '0' to behave like the number 0."
},
{
  id: "cond-7",
  topic: "conditionals",
  question: "What does this Python code print?\n\ngrade = 85\nif grade >= 90:\n  print('A')\nelif grade >= 80:\n  print('B')\nelif grade >= 70:\n  print('C')\nelse:\n  print('F')",
  options: [
    "B",
    "A",
    "C",
    "B\nC"
  ],
  correctIndex: 0,
  explanation: "Python evaluates elif conditions in order and stops at the first one that is true. Since 85 is not >= 90, the first branch is skipped. Since 85 >= 80 is true, it prints 'B' and skips all remaining conditions. Only one branch executes in an if/elif/else chain - even if multiple conditions are true."
},
{
  id: "cond-8",
  topic: "conditionals",
  question: "What is the output of this JavaScript code?\n\nconst a = true;\nconst b = false;\nconsole.log(a && b);\nconsole.log(a || b);",
  options: [
    "false\ntrue",
    "true\ntrue",
    "false\nfalse",
    "true\nfalse"
  ],
  correctIndex: 0,
  explanation: "The && (AND) operator returns true only if BOTH operands are true. Since b is false, a && b is false. The || (OR) operator returns true if at least ONE operand is true. Since a is true, a || b is true. These operators also short-circuit: && stops at the first false, and || stops at the first true."
},
{
  id: "func-5",
  topic: "functions",
  question: "What does this JavaScript function return when called as greet()?\n\nfunction greet(name = 'World') {\n  return 'Hello, ' + name + '!';\n}",
  options: [
    "'Hello, World!'",
    "'Hello, undefined!'",
    "'Hello, !'",
    "TypeError: name is not defined"
  ],
  correctIndex: 0,
  explanation: "Default parameters provide a fallback value when an argument is not provided or is explicitly undefined. Here, name defaults to 'World' when greet() is called with no arguments, so the function returns 'Hello, World!'. Default parameters make functions more flexible and reduce the need for manual checks like if (name === undefined)."
},
{
  id: "func-6",
  topic: "functions",
  question: "What does this JavaScript code print?\n\nfunction makeCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nconst counter = makeCounter();\nconsole.log(counter());\nconsole.log(counter());",
  options: [
    "1\n2",
    "0\n1",
    "1\n1",
    "NaN\nNaN"
  ],
  correctIndex: 0,
  explanation: "This is a closure - the inner function retains access to the count variable from its outer function even after makeCounter() has finished executing. Each call to counter() increments and returns count, which persists between calls. Closures are a powerful way to create private, stateful values in JavaScript."
},
{
  id: "func-7",
  topic: "functions",
  question: "What is logged to the console in this JavaScript code?\n\nfunction applyDouble(value, callback) {\n  return callback(value * 2);\n}\nconst result = applyDouble(5, function(x) {\n  return x + 1;\n});\nconsole.log(result);",
  options: [
    "11",
    "10",
    "6",
    "undefined"
  ],
  correctIndex: 0,
  explanation: "A callback is a function passed as an argument to another function. Here, value * 2 = 10 is passed to the callback, which returns x + 1 = 11. Callbacks are fundamental to JavaScript and appear everywhere - in array methods like map() and filter(), event listeners, and asynchronous operations like setTimeout."
},
{
  id: "func-8",
  topic: "functions",
  question: "What does this Python recursive function return when called as factorial(4)?\n\ndef factorial(n):\n  if n <= 1:\n    return 1\n  return n * factorial(n - 1)",
  options: [
    "24",
    "12",
    "16",
    "4"
  ],
  correctIndex: 0,
  explanation: "Recursion is when a function calls itself with a simpler input. factorial(4) = 4 * factorial(3) = 4 * 3 * factorial(2) = 4 * 3 * 2 * factorial(1) = 4 * 3 * 2 * 1 = 24. The base case (n <= 1 returns 1) is what stops the recursion. Every recursive function must have a base case to avoid an infinite loop."
},
{
  id: "arr-1",
  topic: "arrays",
  question: "What is the output of this JavaScript code?\n\nconst colors = ['red', 'green', 'blue'];\nconsole.log(colors[1]);",
  options: [
    "'green'",
    "'red'",
    "'blue'",
    "undefined"
  ],
  correctIndex: 0,
  explanation: "Arrays use zero-based indexing - the first element is at index 0, not 1. So colors[0] is 'red', colors[1] is 'green', and colors[2] is 'blue'. Accessing an index that does not exist (like colors[5]) returns undefined rather than throwing an error, which can lead to subtle bugs if not checked."
},
{
  id: "arr-2",
  topic: "arrays",
  question: "What is the value of arr after this JavaScript code runs?\n\nconst arr = [1, 2, 3];\narr.push(4);\narr.pop();\nconsole.log(arr);",
  options: [
    "[1, 2, 3]",
    "[1, 2, 3, 4]",
    "[2, 3, 4]",
    "[1, 2]"
  ],
  correctIndex: 0,
  explanation: "push() adds an element to the END of an array, making it [1, 2, 3, 4]. Then pop() removes and returns the LAST element (4), leaving [1, 2, 3]. Both methods modify the array in place. Their counterparts, unshift() and shift(), do the same thing at the beginning of the array."
},
{
  id: "arr-3",
  topic: "arrays",
  question: "What does this Python code print?\n\nitems = ['a', 'b', 'c', 'd']\nprint(len(items))\nitems.append('e')\nprint(len(items))",
  options: [
    "4\n5",
    "3\n4",
    "4\n4",
    "5\n5"
  ],
  correctIndex: 0,
  explanation: "In Python, len() is a built-in function that returns the number of elements in a list, string, or other collection. After append(), the list gains one element, so len() returns 5. Unlike JavaScript's .length property, Python uses len() as a standalone function: len(items), not items.len()."
},
{
  id: "arr-4",
  topic: "arrays",
  question: "What does this Python code print?\n\nnumbers = [10, 20, 30, 40]\ntotal = 0\nfor num in numbers:\n  total += num\nprint(total)",
  options: [
    "100",
    "40",
    "10",
    "4"
  ],
  correctIndex: 0,
  explanation: "The loop iterates over each element and adds it to total: 0 + 10 = 10, 10 + 20 = 30, 30 + 30 = 60, 60 + 40 = 100. This accumulator pattern is very common in programming. Python also has the built-in sum() function that does the same thing in one line: sum(numbers)."
},
{
  id: "arr-5",
  topic: "arrays",
  question: "What does this JavaScript code log?\n\nconst nums = [3, 7, 2, 9, 5];\nconst result = nums.filter(n => n > 4);\nconsole.log(result);",
  options: [
    "[7, 9, 5]",
    "[3, 2]",
    "[7]",
    "[3, 7, 2, 9, 5]"
  ],
  correctIndex: 0,
  explanation: "filter() creates a NEW array containing only elements that pass the test function. The test n > 4 is true for 7, 9, and 5, so those are included. The original array is not modified. filter() is part of a powerful trio of array methods alongside map() (transform each element) and reduce() (combine all elements into one value)."
},
{
  id: "arr-6",
  topic: "arrays",
  question: "What is the value of sliced in this Python code?\n\nletters = ['a', 'b', 'c', 'd', 'e']\nsliced = letters[1:4]",
  options: [
    "['b', 'c', 'd']",
    "['a', 'b', 'c', 'd']",
    "['b', 'c', 'd', 'e']",
    "['c', 'd']"
  ],
  correctIndex: 0,
  explanation: "Python list slicing uses list[start:end], where start is inclusive and end is exclusive. letters[1:4] returns elements at indices 1, 2, and 3, which are 'b', 'c', 'd'. Omitting start defaults to 0, omitting end defaults to the end of the list. Slicing always creates a new list - the original is unchanged."
},
{
  id: "arr-7",
  topic: "arrays",
  question: "What does this JavaScript code produce?\n\nconst first = [1, 2, 3];\nconst second = [4, 5, 6];\nconst combined = [...first, ...second];\nconsole.log(combined);",
  options: [
    "[1, 2, 3, 4, 5, 6]",
    "[[1, 2, 3], [4, 5, 6]]",
    "[1, 2, 3]",
    "[4, 5, 6]"
  ],
  correctIndex: 0,
  explanation: "The spread operator (...) expands an array's elements in place. [...first, ...second] is equivalent to [1, 2, 3, 4, 5, 6] - the elements of both arrays are merged into one flat array. This is a clean way to combine arrays without mutating the originals. You can also use spread to copy an array: const copy = [...first]."
},
{
  id: "arr-8",
  topic: "arrays",
  question: "What does this Python code print?\n\nfruits = ['apple', 'banana', 'cherry']\nfruits.append('date')\nfruits.remove('banana')\nprint(fruits)",
  options: [
    "['apple', 'cherry', 'date']",
    "['apple', 'banana', 'cherry', 'date']",
    "['apple', 'cherry']",
    "['banana', 'cherry', 'date']"
  ],
  correctIndex: 0,
  explanation: "append() adds an element to the end of a Python list, making it ['apple', 'banana', 'cherry', 'date']. Then remove() finds the FIRST occurrence of 'banana' and removes it, resulting in ['apple', 'cherry', 'date']. Note that remove() raises a ValueError if the element is not in the list, so it is good practice to check first."
},
{
  id: "obj-1",
  topic: "objects",
  question: "What does this JavaScript code print?\n\nconst person = { name: 'Sam', age: 30 };\nconsole.log(person.name);\nconsole.log(person['age']);",
  options: [
    "Sam\n30",
    "name\nage",
    "undefined\nundefined",
    "'Sam'\n30"
  ],
  correctIndex: 0,
  explanation: "You can access object properties two ways: dot notation (person.name) and bracket notation (person['age']). Both are valid. Dot notation is cleaner for known, fixed property names. Bracket notation is essential when the property name is stored in a variable, contains spaces, or is computed at runtime."
},
{
  id: "obj-2",
  topic: "objects",
  question: "How do you correctly access the city value in this JavaScript object?\n\nconst user = {\n  name: 'Jordan',\n  address: {\n    city: 'Austin',\n    zip: '78701'\n  }\n};",
  options: [
    "user.address.city",
    "user.city",
    "user.address.city[0]",
    "user['address.city']"
  ],
  correctIndex: 0,
  explanation: "To access a property inside a nested object, chain your property accesses. user.address returns the inner object { city: 'Austin', zip: '78701' }, and .city then gets the string 'Austin'. You can also write user['address']['city'] using bracket notation. Accessing user.city directly returns undefined because city is not a top-level property."
},
{
  id: "obj-3",
  topic: "objects",
  question: "What does this Python code print?\n\ncar = {'make': 'Toyota', 'model': 'Corolla', 'year': 2022}\nprint(list(car.keys()))",
  options: [
    "['make', 'model', 'year']",
    "['Toyota', 'Corolla', 2022]",
    "{'make': 'Toyota', 'model': 'Corolla', 'year': 2022}",
    "3"
  ],
  correctIndex: 0,
  explanation: "In Python, dict.keys() returns a view object of the dictionary's keys. Wrapping it in list() converts it to a plain list. Similarly, dict.values() gives the values and dict.items() gives (key, value) pairs as tuples. These methods are very useful for iterating over dictionaries or checking which keys exist."
},
{
  id: "obj-4",
  topic: "objects",
  question: "What are the values of a and b after this JavaScript code runs?\n\nconst point = { x: 10, y: 20 };\nconst { x: a, y: b } = point;\nconsole.log(a, b);",
  options: [
    "10 20",
    "x y",
    "undefined undefined",
    "{ x: 10 } { y: 20 }"
  ],
  correctIndex: 0,
  explanation: "Destructuring with renaming uses the syntax { originalKey: newVariableName }. Here, { x: a } means 'extract the x property and store it in a variable named a'. So a gets 10 and b gets 20. This is handy when a property name conflicts with an existing variable or when you want a more descriptive local name."
},
{
  id: "obj-5",
  topic: "objects",
  question: "What does this Python code print?\n\nstudent = {'name': 'Maya', 'grade': 95}\nstudent['grade'] = 98\nprint(student.get('name'), student.get('score', 0))",
  options: [
    "Maya 0",
    "Maya 98",
    "Maya None",
    "KeyError: 'score'"
  ],
  correctIndex: 0,
  explanation: "dict.get(key, default) returns the value for a key if it exists, or the default if it does not. student.get('name') returns 'Maya', and student.get('score', 0) returns 0 because 'score' is not in the dictionary. Using get() is safer than bracket access (student['score']) when a key might be missing, since that would raise a KeyError."
},
{
  id: "obj-6",
  topic: "objects",
  question: "What does this JavaScript code log?\n\nconst calculator = {\n  value: 0,\n  add(n) {\n    this.value += n;\n    return this;\n  }\n};\ncalculator.add(5).add(3);\nconsole.log(calculator.value);",
  options: [
    "8",
    "5",
    "3",
    "0"
  ],
  correctIndex: 0,
  explanation: "This demonstrates method chaining. The add method updates this.value and then returns this (the object itself), which allows another method call to be chained immediately. add(5) sets value to 5 and returns the calculator object, then add(3) sets value to 8. Returning this from methods enables clean, readable fluent interfaces."
},
{
  id: "debug-1",
  topic: "debugging",
  question: "A JavaScript program shows: 'TypeError: Cannot read properties of undefined (reading \"name\")'. What is the most likely cause?",
  options: [
    "The code tried to access .name on a variable that is undefined",
    "The variable 'name' was spelled incorrectly",
    "The name property does not exist in JavaScript",
    "The code is missing a semicolon"
  ],
  correctIndex: 0,
  explanation: "This TypeError means you are trying to read a property on something that is undefined. For example, if user is undefined, then user.name throws this error. The fix is to verify the variable has a value before accessing its properties. Modern JavaScript offers optional chaining (user?.name) which returns undefined instead of throwing."
},
{
  id: "debug-2",
  topic: "debugging",
  question: "A function always returns 0 instead of the correct sum. Which console.log placement would BEST help find the bug?\n\nfunction sumArray(arr) {\n  let total = 0;\n  for (let i = 0; i < arr.length; i++) {\n    total + arr[i];\n  }\n  return total;\n}",
  options: [
    "Inside the loop: console.log(i, arr[i], total)",
    "Before the function call: console.log('starting')",
    "After the return statement: console.log(total)",
    "Before the for loop: console.log(arr.length)"
  ],
  correctIndex: 0,
  explanation: "Logging the loop index, current element, and running total inside the loop lets you trace the function step by step. You would immediately see that total never changes - the bug is total + arr[i], which computes the sum but discards it. The fix is total += arr[i]. Printing a static message or just the final return value would not reveal where the logic breaks down."
},
{
  id: "debug-3",
  topic: "debugging",
  question: "What is wrong with this Python code?\n\ndef greet(name):\n  message = 'Hello, ' + name\nprint(greet('Alice'))",
  options: [
    "The function does not return anything, so it prints None",
    "Python does not support string concatenation with +",
    "The function name 'greet' is a reserved keyword",
    "The print() call is outside the function and cannot see message"
  ],
  correctIndex: 0,
  explanation: "Functions in Python return None by default when there is no return statement. The function builds message but never returns it, so greet('Alice') evaluates to None, and print(None) prints 'None'. The fix is to add return message inside the function. Always double-check that your functions explicitly return the value you expect."
},
{
  id: "debug-4",
  topic: "debugging",
  question: "This JavaScript code should double all numbers in an array but produces [undefined, undefined, undefined] instead. What is the bug?\n\nconst numbers = [1, 2, 3];\nconst doubled = numbers.map(n => { n * 2 });\nconsole.log(doubled);",
  options: [
    "The arrow function uses curly braces but is missing a return statement",
    "map() cannot be used with arrow functions",
    "n * 2 is not a valid JavaScript expression",
    "The variable name 'doubled' conflicts with a built-in"
  ],
  correctIndex: 0,
  explanation: "When an arrow function uses curly braces {}, it requires an explicit return statement. n => { n * 2 } computes n * 2 but discards the result, returning undefined. The fix is either the concise form n => n * 2 (no braces, implicit return) or the block form n => { return n * 2; }. This is one of the most common arrow function mistakes."
}

];