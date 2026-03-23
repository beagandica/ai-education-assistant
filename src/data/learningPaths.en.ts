import type { LearningPath } from '../types/content';

export const learningPathsEn: LearningPath[] = [
  {
    id: 'python-basics',
    title: 'Learn Python Basics',
    description:
      'Start your coding journey with Python — one of the most beginner-friendly and versatile programming languages. This path takes you from zero to writing real Python programs.',
    steps: [
      'Install Python and set up your first project',
      'Learn variables, data types, and basic input/output',
      'Master conditionals: if, elif, and else',
      'Write loops with for and while to automate repetition',
      'Define and call functions to organize your code',
      'Work with lists, tuples, and dictionaries',
      'Read from and write to files',
      'Handle errors gracefully with try/except',
    ],
    icon: '🐍',
  },
  {
    id: 'javascript-basics',
    title: 'Learn JavaScript Basics',
    description:
      'Dive into JavaScript — the language that powers the interactive web. This path covers the core concepts you need to start building dynamic web pages and applications.',
    steps: [
      'Set up your environment and write your first script',
      'Understand variables, data types, and operators',
      'Make decisions with if/else and switch statements',
      'Repeat actions with for, while, and for...of loops',
      'Create reusable code with functions and arrow functions',
      'Store collections with arrays and objects',
      'Interact with web pages using the DOM',
      'Debug your code with console.log and browser DevTools',
    ],
    icon: '⚡',
  },
  {
    id: 'web-dev-basics',
    title: 'Learn Web Development Basics',
    description:
      'Build your first website from scratch! This path teaches you the three core technologies of the web — HTML for structure, CSS for style, and JavaScript for interactivity.',
    steps: [
      'Understand how the web works: browsers, servers, and URLs',
      'Build page structure with HTML: headings, paragraphs, lists, and links',
      'Add images, forms, and semantic HTML elements',
      'Style your pages with CSS: colors, fonts, and spacing',
      'Create layouts with CSS Flexbox and Grid',
      'Make your site responsive for mobile devices',
      'Add interactivity with JavaScript and DOM manipulation',
      'Deploy your first website to the internet',
    ],
    icon: '🌐',
  },
];
