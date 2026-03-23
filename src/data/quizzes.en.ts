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
      'const declares a constant — a variable whose value cannot be reassigned after initialization. let and var allow reassignment.',
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
    options: ['100', '200', 'undefined', 'Error — you cannot reassign a const'],
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
      'The loop starts at i = 0 and runs while i < 3. So i takes the values 0, 1, 2 — that\'s 3 iterations.',
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
];
