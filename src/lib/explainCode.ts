import type { CodeExplanation } from '../types/content';

export type { CodeExplanation };

// ── Language detection ──────────────────────────────────────────────

const JS_MARKERS = [
  /\b(let|const|var)\s+\w+/,
  /\bfunction\s+\w+/,
  /=>/,
  /console\.\w+/,
  /document\.\w+/,
  /===|!==|typeof /,
  /\bwindow\b/,
  /\bnew\s+(Array|Object|Map|Set|Promise)\b/,
];

const PY_MARKERS = [
  /\bdef\s+\w+\s*\(/,
  /\bprint\s*\(/,
  /\bimport\s+\w+/,
  /\bfrom\s+\w+\s+import\b/,
  /\bclass\s+\w+.*:/,
  /\belif\b/,
  /:\s*$/m,
  /\bself\b/,
  /\bTrue\b|\bFalse\b|\bNone\b/,
];

function detectLanguage(code: string): string {
  let jsScore = 0;
  let pyScore = 0;
  for (const re of JS_MARKERS) if (re.test(code)) jsScore++;
  for (const re of PY_MARKERS) if (re.test(code)) pyScore++;
  if (jsScore === 0 && pyScore === 0) return 'Unknown';
  return pyScore > jsScore ? 'Python' : 'JavaScript';
}

// ── Concept detection ───────────────────────────────────────────────

interface ConceptRule {
  name: string;
  pattern: RegExp;
}

const CONCEPT_RULES: ConceptRule[] = [
  { name: 'variables',            pattern: /\b(let|const|var)\s+\w+|^\s*\w+\s*=/m },
  { name: 'functions',            pattern: /\bfunction\s+\w+|\bdef\s+\w+/ },
  { name: 'arrow functions',      pattern: /=>/ },
  { name: 'conditionals',         pattern: /\bif\s*[\s(]|\belif\b|\belse\b/ },
  { name: 'for loops',            pattern: /\bfor\s*[\s(]/ },
  { name: 'while loops',          pattern: /\bwhile\s*[\s(]/ },
  { name: 'arrays / lists',       pattern: /\[.*,.*\]|\.(push|pop|shift|map|filter|forEach|find|reduce)\s*\(|\.append\s*\(/ },
  { name: 'objects / dicts',      pattern: /\{[^}]*:\s*[^}]+\}/ },
  { name: 'console output',       pattern: /console\.(log|warn|error|info)\s*\(/ },
  { name: 'print output',         pattern: /\bprint\s*\(/ },
  { name: 'string templates',     pattern: /`[^`]*\$\{|f"[^"]*\{|f'[^']*\{/ },
  { name: 'classes',              pattern: /\bclass\s+\w+/ },
  { name: 'imports',              pattern: /\bimport\s+|\bfrom\s+\w+\s+import\b|\brequire\s*\(/ },
  { name: 'return statements',    pattern: /\breturn\s/ },
  { name: 'error handling',       pattern: /\btry\s*[{:]|\bcatch\s*\(|\bexcept\s/ },
  { name: 'list comprehensions',  pattern: /\[\s*\w+.*\bfor\s+\w+\s+in\b.*\]/ },
  { name: 'DOM manipulation',     pattern: /document\.(getElementById|querySelector|createElement)/ },
  { name: 'array methods',        pattern: /\.(map|filter|reduce|forEach|find|some|every)\s*\(/ },
  { name: 'spread / rest',        pattern: /\.{3}\w+/ },
  { name: 'destructuring',        pattern: /(?:const|let|var)\s*[\[{]/ },
];

function detectConcepts(code: string): string[] {
  const found: string[] = [];
  for (const rule of CONCEPT_RULES) {
    if (rule.pattern.test(code) && !found.includes(rule.name)) {
      found.push(rule.name);
    }
  }
  return found;
}

// ── Line-by-line explanation ────────────────────────────────────────

interface LinePattern {
  pattern: RegExp;
  explain: (match: RegExpMatchArray, line: string) => string;
}

const LINE_PATTERNS: LinePattern[] = [
  // Variable declarations (JS)
  {
    pattern: /^\s*(let|const|var)\s+(\w+)\s*=\s*(.+?)\s*;?\s*$/,
    explain: (m) => `Declares a ${m[1] === 'const' ? 'constant' : 'variable'} "${m[2]}" and assigns it the value ${m[3].trim()}.`,
  },
  // Python assignment
  {
    pattern: /^\s*(\w+)\s*=\s*(.+?)\s*$/,
    explain: (m) => `Assigns the value ${m[2].trim()} to the variable "${m[1]}".`,
  },
  // Function declaration (JS)
  {
    pattern: /^\s*function\s+(\w+)\s*\(([^)]*)\)\s*\{?\s*$/,
    explain: (m) => `Defines a function named "${m[1]}"${m[2].trim() ? ` that takes parameters: ${m[2].trim()}` : ' with no parameters'}.`,
  },
  // Arrow function
  {
    pattern: /^\s*(?:const|let|var)\s+(\w+)\s*=\s*\(?([^)]*)\)?\s*=>/,
    explain: (m) => `Defines an arrow function named "${m[1]}"${m[2].trim() ? ` with parameters: ${m[2].trim()}` : ''}.`,
  },
  // Python def
  {
    pattern: /^\s*def\s+(\w+)\s*\(([^)]*)\)\s*:/,
    explain: (m) => `Defines a function named "${m[1]}"${m[2].trim() ? ` that takes parameters: ${m[2].trim()}` : ' with no parameters'}.`,
  },
  // Python class
  {
    pattern: /^\s*class\s+(\w+)(?:\(([^)]*)\))?\s*:/,
    explain: (m) => `Defines a class named "${m[1]}"${m[2] ? ` that inherits from ${m[2]}` : ''}.`,
  },
  // JS class
  {
    pattern: /^\s*class\s+(\w+)(?:\s+extends\s+(\w+))?\s*\{?\s*$/,
    explain: (m) => `Defines a class named "${m[1]}"${m[2] ? ` that extends ${m[2]}` : ''}.`,
  },
  // console.log
  {
    pattern: /^\s*console\.(log|warn|error|info)\s*\((.+)\)\s*;?\s*$/,
    explain: (m) => `Outputs ${m[2].trim()} to the console${m[1] !== 'log' ? ` as a ${m[1]} message` : ''}.`,
  },
  // print
  {
    pattern: /^\s*print\s*\((.+)\)\s*$/,
    explain: (m) => `Prints ${m[1].trim()} to the output.`,
  },
  // return
  {
    pattern: /^\s*return\s+(.+?)\s*;?\s*$/,
    explain: (m) => `Returns the value ${m[1].trim()} from the function.`,
  },
  // if (JS)
  {
    pattern: /^\s*if\s*\((.+)\)\s*\{?\s*$/,
    explain: (m) => `Checks if the condition ${m[1].trim()} is true.`,
  },
  // if (Python)
  {
    pattern: /^\s*if\s+(.+)\s*:\s*$/,
    explain: (m) => `Checks if the condition ${m[1].trim()} is true.`,
  },
  // else if / elif
  {
    pattern: /^\s*(?:}\s*)?else\s+if\s*\((.+)\)\s*\{?\s*$|^\s*elif\s+(.+)\s*:\s*$/,
    explain: (m) => `Otherwise, checks if ${(m[1] || m[2]).trim()} is true.`,
  },
  // else
  {
    pattern: /^\s*(?:}\s*)?else\s*[:{]?\s*$/,
    explain: () => `Runs this block if none of the previous conditions were true.`,
  },
  // for (JS)
  {
    pattern: /^\s*for\s*\((.+)\)\s*\{?\s*$/,
    explain: (m) => `Starts a for loop with: ${m[1].trim()}.`,
  },
  // for...of / for...in (JS)
  {
    pattern: /^\s*for\s*\(\s*(?:let|const|var)\s+(\w+)\s+(of|in)\s+(.+?)\s*\)\s*\{?\s*$/,
    explain: (m) => `Loops through each item "${m[1]}" ${m[2]} ${m[3].trim()}.`,
  },
  // for (Python)
  {
    pattern: /^\s*for\s+(\w+)\s+in\s+(.+)\s*:\s*$/,
    explain: (m) => `Loops through each "${m[1]}" in ${m[2].trim()}.`,
  },
  // while (JS)
  {
    pattern: /^\s*while\s*\((.+)\)\s*\{?\s*$/,
    explain: (m) => `Repeats the following block while ${m[1].trim()} is true.`,
  },
  // while (Python)
  {
    pattern: /^\s*while\s+(.+)\s*:\s*$/,
    explain: (m) => `Repeats the following block while ${m[1].trim()} is true.`,
  },
  // import (JS)
  {
    pattern: /^\s*import\s+(.+)/,
    explain: (m) => `Imports ${m[1].replace(/;?\s*$/, '').trim()}.`,
  },
  // import (Python)
  {
    pattern: /^\s*from\s+(\w+)\s+import\s+(.+)\s*$/,
    explain: (m) => `Imports ${m[2].trim()} from the ${m[1]} module.`,
  },
  // try/catch
  {
    pattern: /^\s*try\s*[:{]\s*$/,
    explain: () => `Begins a try block — the code inside will be tested for errors.`,
  },
  {
    pattern: /^\s*(?:}\s*)?catch\s*\((\w+)\)\s*\{?\s*$/,
    explain: (m) => `Catches any error (stored in "${m[1]}") thrown by the try block.`,
  },
  {
    pattern: /^\s*except\s*(?:(\w+))?.*:\s*$/,
    explain: (m) => `Catches${m[1] ? ` ${m[1]}` : ''} errors from the try block.`,
  },
  // closing brace
  {
    pattern: /^\s*\}\s*;?\s*$/,
    explain: () => `End of code block.`,
  },
];

function explainLine(line: string): string {
  const trimmed = line.trim();

  if (!trimmed) return '';
  if (/^\s*(\/\/|#)\s*/.test(trimmed)) return `This is a comment: ${trimmed.replace(/^\s*(\/\/|#)\s*/, '').trim()}`;
  if (/^\s*\/\*/.test(trimmed)) return 'Start of a multi-line comment.';
  if (/^\s*\*\//.test(trimmed)) return 'End of a multi-line comment.';

  for (const lp of LINE_PATTERNS) {
    const match = line.match(lp.pattern);
    if (match) return lp.explain(match, line);
  }

  return `Executes: ${trimmed}`;
}

// ── Summary generation ──────────────────────────────────────────────

function generateSummary(concepts: string[], lang: string, lineCount: number): string {
  const parts: string[] = [];

  parts.push(`This is a ${lang} snippet with ${lineCount} line${lineCount !== 1 ? 's' : ''}`);

  if (concepts.length > 0) {
    const listed = concepts.length <= 3
      ? concepts.join(' and ')
      : concepts.slice(0, 3).join(', ') + ', and more';
    parts[0] += ` that uses ${listed}.`;
  } else {
    parts[0] += '.';
  }

  if (concepts.includes('functions') || concepts.includes('arrow functions')) {
    parts.push('It defines reusable function(s).');
  }
  if (concepts.includes('for loops') || concepts.includes('while loops')) {
    parts.push('It includes loop(s) for repetition.');
  }
  if (concepts.includes('conditionals')) {
    parts.push('It makes decisions using conditional logic.');
  }
  if (concepts.includes('classes')) {
    parts.push('It defines a class for object-oriented programming.');
  }

  return parts.join(' ');
}

// ── Main export ─────────────────────────────────────────────────────

export function explainCode(code: string): CodeExplanation {
  if (!code || !code.trim()) {
    return {
      language: 'Unknown',
      summary: 'No code provided. Paste a code snippet to get an explanation.',
      concepts: [],
      lines: [],
    };
  }

  const language = detectLanguage(code);
  const concepts = detectConcepts(code);
  const rawLines = code.split('\n');

  const lines = rawLines.map((rawLine) => ({
    line: rawLine,
    explanation: explainLine(rawLine),
  }));

  const nonEmptyCount = rawLines.filter(l => l.trim()).length;
  const summary = generateSummary(concepts, language, nonEmptyCount);

  return { language, summary, concepts, lines };
}
