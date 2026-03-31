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
  {
    id: 'for-loop',
    topic: 'For Loop',
    simpleExplanation:
      'A for loop repeats a block of code a specific number of times. You tell it where to start, when to stop, and how to count. Think of it like a coach saying "do 10 push-ups" - the loop keeps track of which push-up you\'re on and stops when you reach 10. For loops are perfect when you know in advance how many times you need to repeat something.',
    whyItMatters:
      'For loops are the most common type of loop in programming. You\'ll use them to go through lists, process data, draw things on screen, and repeat calculations. Once you understand the for loop pattern, you can automate any repetitive task in seconds instead of writing the same code over and over.',
    example: `// JavaScript - counting from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("Step " + i);
}
// Output: Step 1, Step 2, Step 3, Step 4, Step 5

// JavaScript - looping through an array
let colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// JavaScript - for...of (simpler way to loop arrays)
for (let color of colors) {
  console.log(color);
}

# Python - counting from 1 to 5
for i in range(1, 6):
    print("Step", i)

# Python - looping through a list
colors = ["red", "green", "blue"]
for color in colors:
    print(color)

# Python - using range with step
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8`,
    commonMistake:
      'Off-by-one errors are the most common for loop mistake. In JavaScript, `for (let i = 0; i <= 5; i++)` runs 6 times (0 through 5), not 5. In Python, `range(1, 5)` gives you 1, 2, 3, 4 - it stops before 5. Always double-check your start and end values. Another mistake is modifying the array you\'re looping through while inside the loop, which can cause skipped items or infinite loops.',
    tryThisNext:
      'Write a for loop that prints only the odd numbers from 1 to 20. Then try a nested for loop - a loop inside a loop - to print a multiplication table. Once comfortable, try using `for...of` in JavaScript or `enumerate()` in Python when you need both the index and the value.',
  },
  {
    id: 'while-loop',
    topic: 'While Loop',
    simpleExplanation:
      'A while loop keeps repeating a block of code as long as a condition is true. Unlike a for loop where you know the count upfront, a while loop is like saying "keep stirring until the sauce thickens" - you don\'t know exactly how many stirs it will take, but you know when to stop. The loop checks its condition before each repetition.',
    whyItMatters:
      'While loops are essential when you don\'t know in advance how many times you need to repeat. Think of reading user input until they type "quit", waiting for a download to finish, or playing a game until the player loses. Any time the number of repetitions depends on something that changes during the loop, a while loop is the right choice.',
    example: `// JavaScript - basic while loop
let count = 1;
while (count <= 5) {
  console.log("Count: " + count);
  count++;
}

// JavaScript - user input simulation
let password = "";
let attempts = 0;
while (password !== "secret" && attempts < 3) {
  password = prompt("Enter password:");
  attempts++;
}

# Python - basic while loop
count = 1
while count <= 5:
    print("Count:", count)
    count += 1

# Python - input loop
password = ""
attempts = 0
while password != "secret" and attempts < 3:
    password = input("Enter password: ")
    attempts += 1

if password == "secret":
    print("Access granted!")
else:
    print("Too many attempts.")`,
    commonMistake:
      'The biggest danger with while loops is forgetting to update the condition variable, creating an infinite loop. If you write `while (count <= 5)` but never increase `count`, the loop runs forever. Always make sure something inside the loop changes the condition so it eventually becomes false. Another common mistake is checking the wrong condition - using `>` when you mean `<`, or using `&&` when you need `||`.',
    tryThisNext:
      'Write a number guessing game: pick a random number between 1 and 100, then use a while loop to let the user guess until they get it right, giving "too high" or "too low" hints. Then try adding a maximum number of guesses. This is a classic while loop exercise because you genuinely don\'t know how many guesses it will take!',
  },
  {
    id: 'infinite-loop',
    topic: 'Infinite Loop',
    simpleExplanation:
      'An infinite loop is a loop that never stops running because its exit condition is never met. It\'s like walking on a treadmill - no matter how many steps you take, you never arrive. Sometimes infinite loops are bugs (you forgot to update a counter), but sometimes they\'re intentional, like a game loop or a server that listens for requests forever.',
    whyItMatters:
      'Infinite loops are one of the most common bugs beginners encounter, and they can freeze your program or even your computer. Understanding why they happen helps you avoid them. At the same time, controlled infinite loops (with proper break conditions) are a legitimate pattern used in games, servers, and interactive programs. Knowing the difference between accidental and intentional is key.',
    example: `// JavaScript - ACCIDENTAL infinite loop (DON'T run this!)
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   // Oops! Forgot i++ so i is always 0
// }

// JavaScript - Fixed version
let i = 0;
while (i < 10) {
  console.log(i);
  i++;  // This makes i grow, so the loop eventually ends
}

// JavaScript - INTENTIONAL infinite loop with break
while (true) {
  let input = prompt("Type 'quit' to exit:");
  if (input === "quit") {
    break;  // This exits the loop
  }
  console.log("You typed: " + input);
}

# Python - ACCIDENTAL infinite loop (DON'T run this!)
# count = 1
# while count > 0:
#     print(count)
#     count += 1  # count goes UP, so count > 0 is always True

# Python - Fixed version
count = 10
while count > 0:
    print(count)
    count -= 1  # count goes DOWN toward 0

# Python - INTENTIONAL infinite loop with break
while True:
    command = input("Enter command (quit to exit): ")
    if command == "quit":
        break
    print("Running:", command)`,
    commonMistake:
      'The three most common causes of accidental infinite loops: (1) Forgetting to increment the counter - `while (i < 10)` but no `i++`. (2) Updating the counter in the wrong direction - counting up when you should count down, or vice versa. (3) A condition that can never become false - like `while (x != 10)` when x jumps from 9 to 11, skipping 10 entirely. If your program freezes, an infinite loop is usually the culprit.',
    tryThisNext:
      'Practice debugging infinite loops: intentionally write a loop that freezes, then fix it. Try all three common causes listed above. Then write an intentional infinite loop for a simple chatbot that keeps asking for messages until the user types "bye". Use `break` to exit cleanly. Learning to spot and fix infinite loops will save you hours of debugging!',
  },
  {
    id: 'top-data-structures',
    topic: 'Top 5 Data Structures',
    simpleExplanation:
      'The five data structures every programmer should know are: (1) Arrays/Lists - ordered collections accessed by index, (2) Linked Lists - chains of nodes where each points to the next, (3) Stacks - last-in-first-out like a pile of plates, (4) Queues - first-in-first-out like a line at a store, and (5) Hash Tables/Dictionaries - key-value pairs for instant lookups. Each one solves different problems, and picking the right one makes your code faster and cleaner.',
    whyItMatters:
      'Data structures are the building blocks of every program. Using the right one can mean the difference between code that runs in milliseconds and code that takes minutes. Arrays are great for ordered data, stacks power your browser\'s back button and undo features, queues manage print jobs and task scheduling, and hash tables make databases and caches fast. Understanding these five covers about 90% of real-world programming needs.',
    example: `// JavaScript - All 5 data structures in action

// 1. Array - ordered list, fast access by index
let tasks = ["email", "code", "meeting"];
tasks.push("lunch");         // add to end
console.log(tasks[0]);       // "email" - instant access

// 2. Linked List - built with objects (no built-in type)
let node3 = { value: "C", next: null };
let node2 = { value: "B", next: node3 };
let node1 = { value: "A", next: node2 };
// Follow the chain: A -> B -> C

// 3. Stack - LIFO (Last In, First Out)
let history = [];
history.push("page1");
history.push("page2");
history.push("page3");
let lastPage = history.pop(); // "page3" - most recent

// 4. Queue - FIFO (First In, First Out)
let printQueue = [];
printQueue.push("doc1");
printQueue.push("doc2");
let nextJob = printQueue.shift(); // "doc1" - first added

// 5. Hash Table (Object/Map) - key-value lookup
let phonebook = { "Alice": "555-0101", "Bob": "555-0202" };
console.log(phonebook["Alice"]); // instant lookup

# Python - All 5 data structures in action

# 1. List - ordered, fast access by index
tasks = ["email", "code", "meeting"]
tasks.append("lunch")
print(tasks[0])              # "email"

# 2. Linked List - using a class
class Node:
    def __init__(self, value, next_node=None):
        self.value = value
        self.next = next_node

head = Node("A", Node("B", Node("C")))

# 3. Stack - LIFO using a list
history = []
history.append("page1")
history.append("page2")
last_page = history.pop()    # "page2"

# 4. Queue - FIFO using deque
from collections import deque
print_queue = deque(["doc1", "doc2"])
next_job = print_queue.popleft()  # "doc1"

# 5. Dictionary - key-value lookup
phonebook = {"Alice": "555-0101", "Bob": "555-0202"}
print(phonebook["Alice"])    # instant lookup`,
    commonMistake:
      'The biggest mistake is using arrays for everything. Arrays are great for ordered data and fast index access, but searching for an item requires checking every element (slow for large lists). If you need fast lookups, use a hash table/dictionary. If you need to process items in order of arrival, use a queue, not an array with manual index tracking. Another mistake is confusing stacks and queues - remember: stack = undo button (last action first), queue = waiting in line (first person first).',
    tryThisNext:
      'Build a mini project that uses all five: Create a to-do app where tasks are stored in an array, undo/redo uses a stack, a print queue uses a queue, tags are stored in a dictionary, and a simple linked list tracks task dependencies. This exercise will cement when and why to use each data structure!',
  },
  {
    id: 'foreach',
    topic: 'forEach',
    simpleExplanation:
      'forEach is a method that runs a function once for every item in an array. Instead of writing a for loop with a counter, you just say "for each item, do this." It reads almost like English: fruits.forEach(fruit => console.log(fruit)). In Python, the equivalent is a regular for...in loop, which works the same way.',
    whyItMatters:
      'forEach is one of the most used array methods in JavaScript. It makes your code shorter and easier to read because you don\'t have to manage a counter variable or worry about off-by-one errors. It\'s also your gateway to other powerful methods like .map(), .filter(), and .reduce() that follow the same pattern of "do something to each item."',
    example: `// JavaScript - forEach basics
let fruits = ["apple", "banana", "cherry"];

fruits.forEach(function(fruit) {
  console.log("I like " + fruit);
});
// Output: I like apple, I like banana, I like cherry

// Arrow function version (shorter)
fruits.forEach(fruit => console.log(fruit));

// With index - forEach gives you the position too
fruits.forEach((fruit, index) => {
  console.log(index + ": " + fruit);
});
// Output: 0: apple, 1: banana, 2: cherry

// Real-world example: update a list of prices
let prices = [10, 20, 30];
let total = 0;
prices.forEach(price => {
  total += price;
});
console.log("Total: $" + total); // Total: $30

# Python - the for...in loop works like forEach
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print("I like " + fruit)

# With index using enumerate
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")`,
    commonMistake:
      'Trying to use "return" inside forEach to break out of the loop. Unlike a regular for loop, return inside forEach only skips the current item - it does not stop the entire loop. If you need to stop early, use a regular for loop with break, or use .find() or .some() instead. Another mistake is trying to use forEach on something that is not an array, like a string or an object.',
    tryThisNext:
      'Start with forEach, then try .map() which is similar but returns a new array. For example: let doubled = numbers.map(n => n * 2). Then try .filter() to keep only items that match a condition. These three methods - forEach, map, filter - are the foundation of modern JavaScript programming.',
  },
  {
    id: 'int',
    topic: 'int (Integers)',
    simpleExplanation:
      'An integer (int) is a whole number with no decimal point - like 1, 42, -7, or 0. In Python, int is a built-in type and you can convert other values to integers using int(). In JavaScript, all numbers are the same type (number), but you can round to whole numbers using Math.floor(), Math.ceil(), or Math.round(). Integers are the most basic number type and you\'ll use them everywhere.',
    whyItMatters:
      'Integers are used for counting, indexing, looping, and almost every calculation in programming. Understanding how they work - especially the difference between integers and decimals, and how to convert between types - prevents bugs like getting 2.9999 instead of 3, or crashing because you tried to do math on a string. In Python, knowing int() is essential because input() always returns a string.',
    example: `// JavaScript - working with whole numbers
let count = 10;          // This is a whole number
let price = 9.99;        // This is a decimal

// Convert decimal to integer
console.log(Math.floor(9.7));  // 9 (rounds down)
console.log(Math.ceil(9.2));   // 10 (rounds up)
console.log(Math.round(9.5));  // 10 (rounds to nearest)

// Convert string to integer
let input = "42";
let num = parseInt(input);
console.log(num + 8);   // 50

// Check if a number is an integer
console.log(Number.isInteger(10));    // true
console.log(Number.isInteger(10.5));  // false

# Python - int is a built-in type
count = 10              # int
price = 9.99            # float

# Convert to int
print(int(9.7))         # 9 (truncates, does not round)
print(int("42"))        # 42 (string to int)
print(round(9.5))       # 10 (rounds to nearest)

# Get user input as a number
age = int(input("Enter your age: "))
print("Next year you will be", age + 1)

# Check type
print(type(10))         # <class 'int'>
print(type(10.5))       # <class 'float'>

# Integer division
print(7 // 2)           # 3 (floor division)
print(7 / 2)            # 3.5 (regular division)`,
    commonMistake:
      'In Python, forgetting to convert input() to int before doing math. input() always returns a string, so age = input("Age: ") gives you "25" (a string), not 25 (a number). Writing age + 1 will crash with a TypeError. Always wrap it: age = int(input("Age: ")). In JavaScript, parseInt("10abc") returns 10 (it stops at the first non-digit), which can hide bugs - use Number() for stricter conversion.',
    tryThisNext:
      'Write a small calculator that takes two numbers from the user and prints the sum, difference, product, and quotient. In Python, use int(input()) to get the numbers. Then try handling the case where the user types something that is not a number - wrap it in try/except (Python) or use isNaN() (JavaScript) to show a friendly error message.',
  },
];