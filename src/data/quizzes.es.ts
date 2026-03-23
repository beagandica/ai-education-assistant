import type { Quiz } from '../types/content';

export const quizzesEs: Quiz[] = [
  {
    id: 'var-1',
    topic: 'variables',
    question: '¿Qué imprime el siguiente código?\n\nlet x = 5;\nx = x + 3;\nconsole.log(x);',
    options: ['5', '3', '8', 'undefined'],
    correctIndex: 2,
    explanation:
      'x empieza en 5, luego x + 3 (que es 8) se asigna de nuevo a x. Así que console.log(x) imprime 8.',
  },
  {
    id: 'var-2',
    topic: 'variables',
    question: '¿Qué palabra clave declara una variable que no se puede reasignar en JavaScript?',
    options: ['let', 'var', 'const', 'static'],
    correctIndex: 2,
    explanation:
      'const declara una constante - una variable cuyo valor no se puede reasignar después de la inicialización. let y var permiten la reasignación.',
  },
  {
    id: 'var-3',
    topic: 'variables',
    question: 'En Python, ¿cuál es el valor de y después de este código?\n\nx = 10\ny = x\nx = 20',
    options: ['10', '20', '30', 'Error'],
    correctIndex: 0,
    explanation:
      'y = x copia el valor actual de x (10) en y. Cambiar x después a 20 no afecta a y. Así que y sigue siendo 10.',
  },
  {
    id: 'var-4',
    topic: 'variables',
    question: '¿Qué pasa al ejecutar este código?\n\nconst score = 100;\nscore = 200;\nconsole.log(score);',
    options: ['100', '200', 'undefined', 'Error - no puedes reasignar un const'],
    correctIndex: 3,
    explanation:
      'Las variables declaradas con const no pueden ser reasignadas. Intentar cambiar score de 100 a 200 lanza un TypeError. Usa let si necesitas reasignar.',
  },
  {
    id: 'loop-1',
    topic: 'loops',
    question: '¿Cuántas veces se ejecuta este bucle?\n\nfor (let i = 0; i < 3; i++) {\n  console.log(i);\n}',
    options: ['2', '3', '4', 'Infinito'],
    correctIndex: 1,
    explanation:
      'El bucle empieza en i = 0 y se ejecuta mientras i < 3. Así que i toma los valores 0, 1, 2 - son 3 iteraciones.',
  },
  {
    id: 'loop-2',
    topic: 'loops',
    question: '¿Qué imprime este código Python?\n\nfor i in range(1, 4):\n    print(i)',
    options: ['0 1 2 3', '1 2 3', '1 2 3 4', '0 1 2'],
    correctIndex: 1,
    explanation:
      'range(1, 4) produce los números 1, 2, 3. El valor final (4) no está incluido.',
  },
  {
    id: 'loop-3',
    topic: 'loops',
    question: '¿Qué bucle es mejor cuando no sabes cuántas veces repetir?',
    options: ['Bucle for', 'Bucle while', 'Bucle do', 'Bucle foreach'],
    correctIndex: 1,
    explanation:
      'Un bucle while se ejecuta mientras una condición sea verdadera, lo que lo hace ideal cuando no se conoce de antemano el número de iteraciones.',
  },
  {
    id: 'loop-4',
    topic: 'loops',
    question: '¿Qué imprimirá este código?\n\nlet sum = 0;\nfor (let i = 1; i <= 4; i++) {\n  sum += i;\n}\nconsole.log(sum);',
    options: ['4', '10', '15', '6'],
    correctIndex: 1,
    explanation:
      'El bucle suma 1 + 2 + 3 + 4 = 10. La variable sum acumula el total mientras i va de 1 a 4.',
  },
  {
    id: 'cond-1',
    topic: 'conditionals',
    question: '¿Qué imprime este código?\n\nlet edad = 15;\nif (edad >= 18) {\n  console.log("Adulto");\n} else {\n  console.log("Menor");\n}',
    options: ['Adulto', 'Menor', 'undefined', 'Error'],
    correctIndex: 1,
    explanation:
      'edad es 15, que es menor que 18. La condición edad >= 18 es falsa, así que se ejecuta el bloque else, imprimiendo "Menor".',
  },
  {
    id: 'cond-2',
    topic: 'conditionals',
    question: 'En Python, ¿qué palabra clave se usa para "else if"?',
    options: ['else if', 'elseif', 'elif', 'elsif'],
    correctIndex: 2,
    explanation:
      'Python usa "elif" como palabra clave para las condiciones else-if. Es una abreviación de "else if".',
  },
  {
    id: 'cond-3',
    topic: 'conditionals',
    question: '¿Cuál es la diferencia entre = y === en JavaScript?',
    options: [
      'No hay diferencia',
      '= asigna un valor; === compara valores y tipos',
      '= compara; === asigna',
      '=== no es JavaScript válido',
    ],
    correctIndex: 1,
    explanation:
      '= es el operador de asignación (establece un valor). === es el operador de igualdad estricta (verifica si dos valores son iguales en valor y tipo).',
  },
  {
    id: 'cond-4',
    topic: 'conditionals',
    question: '¿Qué imprime este código?\n\nlet x = 7;\nif (x > 10) {\n  console.log("big");\n} else if (x > 5) {\n  console.log("medium");\n} else {\n  console.log("small");\n}',
    options: ['big', 'medium', 'small', 'big medium'],
    correctIndex: 1,
    explanation:
      'x es 7. La primera condición (x > 10) es falsa. La segunda condición (x > 5) es verdadera, así que se imprime "medium". Una vez que una rama coincide, las demás se saltan.',
  },
  {
    id: 'func-1',
    topic: 'functions',
    question: '¿Qué devuelve esta función?\n\nfunction sumar(a, b) {\n  a + b;\n}',
    options: ['La suma de a y b', 'undefined', '0', 'Error'],
    correctIndex: 1,
    explanation:
      'A la función le falta la palabra clave "return". Sin return, las funciones de JavaScript devuelven undefined por defecto. Debería ser: return a + b;',
  },
  {
    id: 'func-2',
    topic: 'functions',
    question: 'En Python, ¿cómo defines una función que recibe dos parámetros?',
    options: [
      'function sumar(a, b):',
      'def sumar(a, b):',
      'func sumar(a, b):',
      'define sumar(a, b):',
    ],
    correctIndex: 1,
    explanation:
      'En Python, las funciones se definen con la palabra clave "def", seguida del nombre de la función, los parámetros entre paréntesis y dos puntos.',
  },
  {
    id: 'func-3',
    topic: 'functions',
    question: '¿Cuál es la salida?\n\nconst saludar = (nombre) => `Hola, ${nombre}!`;\nconsole.log(saludar("Sam"));',
    options: ['Hola, Sam!', 'Hola, nombre!', 'undefined', 'Error'],
    correctIndex: 0,
    explanation:
      'Esta es una función flecha que usa un template literal. Toma "Sam" como parámetro nombre y devuelve "Hola, Sam!".',
  },
  {
    id: 'func-4',
    topic: 'functions',
    question: '¿Qué devuelve esta función Python?\n\ndef multiply(a, b):\n    result = a * b\n\nprint(multiply(3, 4))',
    options: ['12', '7', 'None', 'Error'],
    correctIndex: 2,
    explanation:
      'La función calcula result = 12 pero nunca lo devuelve. Sin una instrucción return, las funciones de Python devuelven None por defecto. Debería ser: return a * b',
  },
];
