import type { TopicResponse } from '../types/content';

export const topicsEn: TopicResponse[] = [
  {
    id: 'variables',
    topic: 'Variables',
    simpleExplanation:
      'A variable is like a labeled box where you store information. You give it a name, put something inside, and later you can look at what\'s in the box or swap it for something else. In programming, variables hold data - numbers, text, true/false values - so your program can remember and work with information.',
    whyItMatters:
      'Without variables your program has no memory. Every calculation, every user input, every piece of data needs somewhere to live. Variables are the very first building block of every program - once you understand them, everything else starts to click.',
    example: `// JavaScript
let userName = "Alice";
let score = 0;

score = score + 10;
console.log(userName + " has " + score + " points");
// Output: Alice has 10 points

# Python
user_name = "Alice"
score = 0

score = score + 10
print(user_name + " has " + str(score) + " points")
# Output: Alice has 10 points`,
    commonMistake:
      'Using a variable before you create it. If you write `console.log(age)` but never declared `age`, you\'ll get a "ReferenceError: age is not defined." Always declare your variables before you use them, and double-check for typos in the name - `userName` and `username` are two different variables!',
    tryThisNext:
      'Create a variable for your name, another for your favorite number, and a third that combines them into a sentence. Then try changing the values and printing the result again. Once you\'re comfortable, explore the difference between `let`, `const`, and `var` in JavaScript.',
  },
  {
    id: 'loops',
    topic: 'Loops',
    simpleExplanation:
      'A loop lets you repeat a block of code multiple times without writing it out over and over. Think of it like a recipe that says "stir 10 times" - instead of writing "stir" ten separate times, you just say how many times to repeat. Loops are one of the most powerful ideas in programming.',
    whyItMatters:
      'Almost every real program needs repetition - processing a list of users, animating frames on screen, retrying a network request. Loops save you from writing thousands of lines and make your code flexible enough to handle any amount of data.',
    example: `// JavaScript - for loop
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}
// Output: Count: 1, Count: 2, ... Count: 5

// JavaScript - while loop
let tries = 3;
while (tries > 0) {
  console.log("Tries left: " + tries);
  tries--;
}

# Python - for loop
for i in range(1, 6):
    print("Count:", i)

# Python - while loop
tries = 3
while tries > 0:
    print("Tries left:", tries)
    tries -= 1`,
    commonMistake:
      'Infinite loops! If the condition never becomes false, the loop runs forever and your program freezes. For example: `while (true) { ... }` without a `break` statement, or forgetting to update the counter (`i++`). Always make sure something inside the loop moves you closer to the exit condition.',
    tryThisNext:
      'Write a loop that prints the numbers 1 to 20, but only the even ones. Then try looping through an array of your favorite foods and printing each one. When you\'re ready, look into `for...of` loops in JavaScript or list comprehensions in Python.',
  },
  {
    id: 'conditionals',
    topic: 'Conditionals',
    simpleExplanation:
      'Conditionals let your program make decisions. They work just like everyday choices: "If it\'s raining, take an umbrella; otherwise, wear sunglasses." In code, you write a condition that\'s either true or false, and the program runs different blocks of code depending on the answer.',
    whyItMatters:
      'Programs need to respond differently to different situations - showing an error message when input is invalid, unlocking a level when the score is high enough, or greeting users by name. Conditionals are how you give your code the ability to think and react.',
    example: `// JavaScript
let temperature = 30;

if (temperature > 25) {
  console.log("It's hot outside! ☀️");
} else if (temperature > 15) {
  console.log("Nice weather! 🌤️");
} else {
  console.log("It's cold, grab a jacket! 🧥");
}

# Python
temperature = 30

if temperature > 25:
    print("It's hot outside! ☀️")
elif temperature > 15:
    print("Nice weather! 🌤️")
else:
    print("It's cold, grab a jacket! 🧥")`,
    commonMistake:
      'Confusing the assignment operator (`=`) with the comparison operator (`==`). Writing `if (x = 5)` assigns 5 to x instead of checking whether x equals 5. In JavaScript, use `===` for strict equality. Also watch out for the order of your conditions - put the most specific checks first.',
    tryThisNext:
      'Build a simple grading system: take a score and print "A" for 90+, "B" for 80+, "C" for 70+, and "F" below 70. Then try combining conditions with `&&` (and) and `||` (or) to make more complex decisions.',
  },
  {
    id: 'functions',
    topic: 'Functions',
    simpleExplanation:
      'A function is a reusable block of code that performs a specific task. Think of it like a recipe with a name - instead of writing out all the steps every time you want to bake cookies, you just say "follow the cookie recipe." You can also pass ingredients in (parameters) and get a result back (return value).',
    whyItMatters:
      'Functions keep your code organized, readable, and DRY (Don\'t Repeat Yourself). When you spot the same code appearing in multiple places, that\'s a sign it should be a function. They also make debugging easier - if something breaks, you only need to fix it in one place.',
    example: `// JavaScript
function greet(name) {
  return "Hello, " + name + "! Welcome! 👋";
}

console.log(greet("Alice"));  // Hello, Alice! Welcome! 👋
console.log(greet("Bob"));    // Hello, Bob! Welcome! 👋

// Arrow function
const double = (num) => num * 2;
console.log(double(5));  // 10

# Python
def greet(name):
    return "Hello, " + name + "! Welcome! 👋"

print(greet("Alice"))  # Hello, Alice! Welcome! 👋
print(greet("Bob"))    # Hello, Bob! Welcome! 👋`,
    commonMistake:
      'Forgetting the `return` statement. If your function does a calculation but doesn\'t return the result, you\'ll get `undefined` (JavaScript) or `None` (Python). Another common mistake is calling the function without parentheses: `greet` is a reference to the function, but `greet()` actually runs it.',
    tryThisNext:
      'Write a function called `calculateTip` that takes a bill amount and a tip percentage, and returns the tip amount. Then try writing a function that calls another function - for example, a `formatBill` function that uses `calculateTip` inside it.',
  },
  {
    id: 'arrays',
    topic: 'Arrays',
    simpleExplanation:
      'An array is an ordered list of items stored in a single variable. Think of it like a numbered shopping list - each item has a position (called an index), starting from 0. You can add items, remove them, look them up by position, or loop through the whole list.',
    whyItMatters:
      'Most real programs deal with collections of things - a list of users, a set of scores, a series of messages. Arrays let you store and work with any number of related items without creating a separate variable for each one.',
    example: `// JavaScript
let fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]);     // "apple" (first item)
console.log(fruits.length); // 3

fruits.push("date");        // Add to the end
console.log(fruits);        // ["apple", "banana", "cherry", "date"]

// Loop through the array
for (let fruit of fruits) {
  console.log("I like " + fruit);
}

# Python
fruits = ["apple", "banana", "cherry"]

print(fruits[0])     # "apple"
print(len(fruits))   # 3

fruits.append("date")
print(fruits)        # ["apple", "banana", "cherry", "date"]

for fruit in fruits:
    print("I like " + fruit)`,
    commonMistake:
      'Off-by-one errors! Arrays start at index 0, not 1. So in a 3-item array, the valid indices are 0, 1, and 2 - trying to access index 3 will give you `undefined` (JavaScript) or an `IndexError` (Python). Always remember: last index = length - 1.',
    tryThisNext:
      'Create an array of 5 numbers and write code to find the largest one. Then try array methods like `.filter()`, `.map()`, and `.find()` in JavaScript, or list comprehensions in Python.',
  },
  {
    id: 'objects',
    topic: 'Objects',
    simpleExplanation:
      'An object (called a dictionary in Python) groups related data together using key-value pairs. Instead of numbering items like an array, you label them with descriptive names. Think of it like a contact card - it has a "name" field, a "phone" field, an "email" field, each holding a specific piece of information.',
    whyItMatters:
      'Objects let you model real-world things in code. A user has a name, email, and age. A product has a title, price, and description. Grouping related data into objects keeps your code organized and makes it much easier to pass complex information around your program.',
    example: `// JavaScript
let user = {
  name: "Alice",
  age: 25,
  isStudent: true
};

console.log(user.name);     // "Alice"
console.log(user["age"]);   // 25

user.email = "alice@example.com"; // Add a new property
console.log(user);

# Python (dictionary)
user = {
    "name": "Alice",
    "age": 25,
    "is_student": True
}

print(user["name"])       # "Alice"
print(user.get("age"))    # 25

user["email"] = "alice@example.com"  # Add a new key
print(user)`,
    commonMistake:
      'Trying to access a property that doesn\'t exist. In JavaScript, `user.address` returns `undefined` silently, and then `user.address.city` throws "Cannot read properties of undefined." In Python, `user["address"]` throws a `KeyError`. Use optional chaining (`user?.address?.city`) in JavaScript or `.get()` in Python to handle missing keys safely.',
    tryThisNext:
      'Create an object representing your favorite book with title, author, year, and rating. Then create an array of 3 book objects and loop through them to print each title. This combination of arrays and objects is how most real apps store data!',
  },
  {
    id: 'html-basics',
    topic: 'HTML Basics',
    simpleExplanation:
      'HTML (HyperText Markup Language) is the skeleton of every web page. It uses tags - special labels wrapped in angle brackets - to define the structure and content of a page. Tags usually come in pairs: an opening tag like `<p>` and a closing tag like `</p>`. Everything between them is content that the browser displays.',
    whyItMatters:
      'Every website you\'ve ever visited is built on HTML. It\'s the foundation of web development. Even if you use fancy frameworks later, they all generate HTML under the hood. Understanding HTML is the essential first step to building anything on the web.',
    example: `<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first web page. 🎉</p>

  <h2>My Favorite Things</h2>
  <ul>
    <li>Coding</li>
    <li>Music</li>
    <li>Pizza</li>
  </ul>

  <a href="https://example.com">Click here to visit Example</a>
  <img src="cat.jpg" alt="A cute cat" />
</body>
</html>`,
    commonMistake:
      'Forgetting to close tags. If you open a `<div>` but never close it with `</div>`, the browser tries to guess where it ends, and your layout will look wrong. Another common issue is nesting tags incorrectly - `<b><i>text</b></i>` is wrong; it should be `<b><i>text</i></b>` (close inner tags first).',
    tryThisNext:
      'Create a personal profile page with your name in an `<h1>`, a short bio in `<p>` tags, a list of your hobbies using `<ul>` and `<li>`, and a link to your favorite website. Open it in your browser to see it come alive!',
  },
  {
    id: 'css-basics',
    topic: 'CSS Basics',
    simpleExplanation:
      'CSS (Cascading Style Sheets) is what makes web pages look good. While HTML defines the structure (what\'s on the page), CSS controls the appearance - colors, fonts, sizes, spacing, and layout. You write rules that say "make all headings blue" or "give this box a shadow and rounded corners."',
    whyItMatters:
      'A web page without CSS is like a document with no formatting - it works, but nobody wants to look at it. CSS gives you creative control over your website\'s design. Learning CSS lets you turn a plain HTML skeleton into something beautiful and professional.',
    example: `/* Style a heading */
h1 {
  color: #2563eb;
  font-size: 2rem;
  text-align: center;
}

/* Style a class */
.card {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
}

/* Style a button */
.button {
  background-color: #2563eb;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.button:hover {
  background-color: #1d4ed8;
}`,
    commonMistake:
      'Specificity confusion - when two CSS rules conflict, the more specific one wins. An ID selector (`#header`) beats a class selector (`.header`), which beats a tag selector (`h1`). Beginners often add `!important` everywhere to force styles, but that creates a bigger mess. Instead, learn how specificity works and keep your selectors simple.',
    tryThisNext:
      'Take the HTML profile page from the HTML lesson and add CSS to make it look great. Try changing colors, adding padding and margins, and making a nice card layout. Then experiment with Flexbox by centering items on the page using `display: flex` and `justify-content: center`.',
  },
  {
    id: 'debugging-basics',
    topic: 'Debugging Basics',
    simpleExplanation:
      'Debugging is the process of finding and fixing errors (bugs) in your code. Every programmer - even experts - spends a huge amount of time debugging. It\'s like being a detective: you look at clues (error messages, unexpected behavior), form a theory about what\'s wrong, test it, and repeat until you find the culprit.',
    whyItMatters:
      'Writing code that works perfectly on the first try is extremely rare. Debugging is a skill you\'ll use every single day as a programmer. Getting good at it makes you faster, less frustrated, and more confident. The best debuggers aren\'t the ones who write perfect code - they\'re the ones who find mistakes quickly.',
    example: `// Step 1: Read the error message carefully
// "TypeError: Cannot read properties of undefined (reading 'name')"
// This tells you: something is undefined, and you tried to access .name on it.

// Step 2: Use console.log to inspect values
function getUser(id) {
  let users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
  let user = users.find(u => u.id === id);

  console.log("Looking for id:", id);
  console.log("Found user:", user);    // Is this undefined?

  return user.name; // 💥 Crashes if user is undefined!
}

// Step 3: Fix with a safety check
function getUserSafe(id) {
  let users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
  let user = users.find(u => u.id === id);

  if (!user) {
    return "User not found";
  }
  return user.name;
}`,
    commonMistake:
      'Not reading the error message! It sounds simple, but many beginners see a wall of red text and panic. Error messages are actually your best friend - they tell you exactly what went wrong and on which line. Start from the first line of the error, find the file name and line number, and read the description carefully.',
    tryThisNext:
      'Intentionally break some of your existing code in different ways and practice reading the error messages. Try accessing a missing variable, calling a non-existent function, and passing the wrong type. Use `console.log()` or `print()` to trace what your code is actually doing step by step.',
  },
  {
    id: 'data-structures',
    topic: 'Data Structures',
    simpleExplanation:
      'Data structures are ways of organizing and storing data so you can access and modify it efficiently. Think of them like different types of containers: an array is like a numbered list, a stack is like a pile of plates (last in, first out), a queue is like a line at a store (first in, first out), and a set is like a bag of unique items with no duplicates. Choosing the right data structure makes your code faster and easier to understand.',
    whyItMatters:
      'Every real program needs to store and manage collections of data. Using the right data structure can be the difference between code that runs instantly and code that takes forever. Understanding data structures helps you think like a programmer and solve problems more effectively - it\'s one of the most important topics in computer science.',
    example: `// JavaScript - Common Data Structures

// Array - ordered list, access by index
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]); // "banana"

// Stack - Last In, First Out (LIFO)
let stack = [];
stack.push("A");    // add to top
stack.push("B");
stack.push("C");
console.log(stack.pop()); // "C" - last one added comes out first

// Queue - First In, First Out (FIFO)
let queue = [];
queue.push("first");    // add to back
queue.push("second");
console.log(queue.shift()); // "first" - first one added comes out first

// Set - unique values only, no duplicates
let uniqueColors = new Set(["red", "blue", "red", "green"]);
console.log(uniqueColors); // Set { "red", "blue", "green" }

// Map - key-value pairs (like an object but more flexible)
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
console.log(scores.get("Alice")); // 95

# Python - Common Data Structures

# List - ordered, mutable
fruits = ["apple", "banana", "cherry"]

# Stack using a list
stack = []
stack.append("A")
stack.append("B")
stack.append("C")
print(stack.pop())  # "C"

# Queue using collections.deque
from collections import deque
queue = deque(["first", "second"])
print(queue.popleft())  # "first"

# Set - unique values
unique_colors = {"red", "blue", "red", "green"}
print(unique_colors)  # {"red", "blue", "green"}

# Dictionary - key-value pairs
scores = {"Alice": 95, "Bob": 87}
print(scores["Alice"])  # 95`,
    commonMistake:
      'Using an array for everything! Arrays are great for ordered lists, but if you need to check whether something exists, a Set is much faster. If you need to look up values by a key, use a Map or dictionary instead of searching through an array. Also, beginners often confuse stacks and queues - remember: stack = last in first out (like undo), queue = first in first out (like a waiting line).',
    tryThisNext:
      'Try implementing a simple to-do list using different data structures. Use an array to store tasks in order, a Set to track unique tags, and a Map/dictionary to store task priorities. Then try implementing a basic undo feature using a stack - push actions onto the stack and pop them to undo!',
  },
];