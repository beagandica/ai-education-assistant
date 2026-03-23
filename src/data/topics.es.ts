import type { TopicResponse } from '../types/content';

export const topicsEs: TopicResponse[] = [
  {
    id: 'variables',
    topic: 'Variables',
    simpleExplanation:
      'Una variable es como una caja con etiqueta donde guardas información. Le pones un nombre, metes algo dentro y después puedes ver qué hay o cambiarlo por otra cosa. En programación, las variables almacenan datos — números, texto, valores verdadero/falso — para que tu programa pueda recordar y trabajar con información.',
    whyItMatters:
      'Sin variables, tu programa no tiene memoria. Cada cálculo, cada dato que el usuario ingresa, cada pieza de información necesita un lugar donde vivir. Las variables son el primer bloque fundamental de cualquier programa — una vez que las entiendes, todo lo demás empieza a tener sentido.',
    example: `// JavaScript
let userName = "Alice";
let score = 0;

score = score + 10;
console.log(userName + " has " + score + " points");
// Salida: Alice has 10 points

# Python
user_name = "Alice"
score = 0

score = score + 10
print(user_name + " has " + str(score) + " points")
# Salida: Alice has 10 points`,
    commonMistake:
      'Usar una variable antes de crearla. Si escribes `console.log(age)` pero nunca declaraste `age`, obtendrás un "ReferenceError: age is not defined." Siempre declara tus variables antes de usarlas, y revisa bien que no haya errores de escritura — `userName` y `username` son dos variables completamente diferentes.',
    tryThisNext:
      'Crea una variable con tu nombre, otra con tu número favorito y una tercera que las combine en una oración. Luego cambia los valores e imprime el resultado de nuevo. Cuando te sientas cómodo, explora la diferencia entre `let`, `const` y `var` en JavaScript.',
  },
  {
    id: 'loops',
    topic: 'Bucles',
    simpleExplanation:
      'Un bucle te permite repetir un bloque de código varias veces sin tener que escribirlo una y otra vez. Es como una receta que dice "revuelve 10 veces" — en lugar de escribir "revuelve" diez veces por separado, simplemente dices cuántas veces repetir. Los bucles son una de las ideas más poderosas en programación.',
    whyItMatters:
      'Casi todo programa real necesita repetición — procesar una lista de usuarios, animar cuadros en pantalla, reintentar una petición de red. Los bucles te ahorran escribir miles de líneas y hacen que tu código sea lo suficientemente flexible para manejar cualquier cantidad de datos.',
    example: `// JavaScript — bucle for
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}
// Salida: Count: 1, Count: 2, ... Count: 5

// JavaScript — bucle while
let tries = 3;
while (tries > 0) {
  console.log("Tries left: " + tries);
  tries--;
}

# Python — bucle for
for i in range(1, 6):
    print("Count:", i)

# Python — bucle while
tries = 3
while tries > 0:
    print("Tries left:", tries)
    tries -= 1`,
    commonMistake:
      '¡Bucles infinitos! Si la condición nunca se vuelve falsa, el bucle se ejecuta para siempre y tu programa se congela. Por ejemplo: `while (true) { ... }` sin un `break`, u olvidar actualizar el contador (`i++`). Siempre asegúrate de que algo dentro del bucle te acerque a la condición de salida.',
    tryThisNext:
      'Escribe un bucle que imprima los números del 1 al 20, pero solo los pares. Luego intenta recorrer un arreglo con tus comidas favoritas e imprime cada una. Cuando estés listo, investiga los bucles `for...of` en JavaScript o las comprensiones de lista en Python.',
  },
  {
    id: 'conditionals',
    topic: 'Condicionales',
    simpleExplanation:
      'Los condicionales permiten que tu programa tome decisiones. Funcionan igual que las elecciones cotidianas: "Si está lloviendo, lleva un paraguas; si no, ponte lentes de sol." En código, escribes una condición que es verdadera o falsa, y el programa ejecuta diferentes bloques de código según la respuesta.',
    whyItMatters:
      'Los programas necesitan reaccionar de formas distintas ante distintas situaciones — mostrar un mensaje de error cuando la entrada no es válida, desbloquear un nivel cuando la puntuación es suficiente, o saludar a los usuarios por su nombre. Los condicionales son la forma en que le das a tu código la capacidad de pensar y reaccionar.',
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
      'Confundir el operador de asignación (`=`) con el de comparación (`==`). Escribir `if (x = 5)` asigna 5 a x en lugar de comprobar si x es igual a 5. En JavaScript, usa `===` para igualdad estricta. También presta atención al orden de tus condiciones — pon las comprobaciones más específicas primero.',
    tryThisNext:
      'Construye un sistema de calificaciones simple: toma una puntuación e imprime "A" para 90+, "B" para 80+, "C" para 70+ y "F" por debajo de 70. Luego intenta combinar condiciones con `&&` (y) y `||` (o) para tomar decisiones más complejas.',
  },
  {
    id: 'functions',
    topic: 'Funciones',
    simpleExplanation:
      'Una función es un bloque de código reutilizable que realiza una tarea específica. Piénsalo como una receta con nombre — en lugar de escribir todos los pasos cada vez que quieres hacer galletas, simplemente dices "sigue la receta de galletas." También puedes pasarle ingredientes (parámetros) y obtener un resultado de vuelta (valor de retorno).',
    whyItMatters:
      'Las funciones mantienen tu código organizado, legible y DRY (Don\'t Repeat Yourself — No Te Repitas). Cuando ves el mismo código apareciendo en varios lugares, es señal de que debería ser una función. También facilitan la depuración — si algo falla, solo tienes que arreglarlo en un lugar.',
    example: `// JavaScript
function greet(name) {
  return "Hello, " + name + "! Welcome! 👋";
}

console.log(greet("Alice"));  // Hello, Alice! Welcome! 👋
console.log(greet("Bob"));    // Hello, Bob! Welcome! 👋

// Función flecha
const double = (num) => num * 2;
console.log(double(5));  // 10

# Python
def greet(name):
    return "Hello, " + name + "! Welcome! 👋"

print(greet("Alice"))  # Hello, Alice! Welcome! 👋
print(greet("Bob"))    # Hello, Bob! Welcome! 👋`,
    commonMistake:
      'Olvidar la instrucción `return`. Si tu función hace un cálculo pero no retorna el resultado, obtendrás `undefined` (JavaScript) o `None` (Python). Otro error frecuente es llamar a la función sin paréntesis: `greet` es una referencia a la función, pero `greet()` es lo que realmente la ejecuta.',
    tryThisNext:
      'Escribe una función llamada `calculateTip` que reciba el monto de una cuenta y un porcentaje de propina, y devuelva el monto de la propina. Luego intenta escribir una función que llame a otra función — por ejemplo, una función `formatBill` que use `calculateTip` internamente.',
  },
  {
    id: 'arrays',
    topic: 'Arreglos',
    simpleExplanation:
      'Un arreglo es una lista ordenada de elementos almacenada en una sola variable. Piénsalo como una lista de compras numerada — cada elemento tiene una posición (llamada índice), comenzando desde 0. Puedes agregar elementos, eliminarlos, buscarlos por posición o recorrer toda la lista.',
    whyItMatters:
      'La mayoría de los programas reales trabajan con colecciones de cosas — una lista de usuarios, un conjunto de puntuaciones, una serie de mensajes. Los arreglos te permiten almacenar y trabajar con cualquier cantidad de elementos relacionados sin crear una variable separada para cada uno.',
    example: `// JavaScript
let fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]);     // "apple" (primer elemento)
console.log(fruits.length); // 3

fruits.push("date");        // Agregar al final
console.log(fruits);        // ["apple", "banana", "cherry", "date"]

// Recorrer el arreglo
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
      '¡Errores de uno! Los arreglos empiezan en el índice 0, no en el 1. Así que en un arreglo de 3 elementos, los índices válidos son 0, 1 y 2 — intentar acceder al índice 3 te dará `undefined` (JavaScript) o un `IndexError` (Python). Recuerda siempre: último índice = longitud - 1.',
    tryThisNext:
      'Crea un arreglo con 5 números y escribe código para encontrar el más grande. Luego prueba métodos de arreglos como `.filter()`, `.map()` y `.find()` en JavaScript, o las comprensiones de lista en Python.',
  },
  {
    id: 'objects',
    topic: 'Objetos',
    simpleExplanation:
      'Un objeto (llamado diccionario en Python) agrupa datos relacionados usando pares de clave-valor. En lugar de numerar elementos como en un arreglo, los etiquetas con nombres descriptivos. Piénsalo como una tarjeta de contacto — tiene un campo "nombre", un campo "teléfono", un campo "email", cada uno con una información específica.',
    whyItMatters:
      'Los objetos te permiten modelar cosas del mundo real en código. Un usuario tiene nombre, email y edad. Un producto tiene título, precio y descripción. Agrupar datos relacionados en objetos mantiene tu código organizado y hace mucho más fácil pasar información compleja por tu programa.',
    example: `// JavaScript
let user = {
  name: "Alice",
  age: 25,
  isStudent: true
};

console.log(user.name);     // "Alice"
console.log(user["age"]);   // 25

user.email = "alice@example.com"; // Agregar nueva propiedad
console.log(user);

# Python (diccionario)
user = {
    "name": "Alice",
    "age": 25,
    "is_student": True
}

print(user["name"])       # "Alice"
print(user.get("age"))    # 25

user["email"] = "alice@example.com"  # Agregar nueva clave
print(user)`,
    commonMistake:
      'Intentar acceder a una propiedad que no existe. En JavaScript, `user.address` devuelve `undefined` silenciosamente, y luego `user.address.city` lanza "Cannot read properties of undefined." En Python, `user["address"]` lanza un `KeyError`. Usa encadenamiento opcional (`user?.address?.city`) en JavaScript o `.get()` en Python para manejar claves faltantes de forma segura.',
    tryThisNext:
      'Crea un objeto que represente tu libro favorito con título, autor, año y calificación. Luego crea un arreglo con 3 objetos de libros y recórrelos para imprimir cada título. ¡Esta combinación de arreglos y objetos es como la mayoría de las apps reales almacenan datos!',
  },
  {
    id: 'html-basics',
    topic: 'Fundamentos de HTML',
    simpleExplanation:
      'HTML (HyperText Markup Language) es el esqueleto de toda página web. Usa etiquetas — marcas especiales entre corchetes angulares — para definir la estructura y contenido de una página. Las etiquetas suelen venir en pares: una de apertura como `<p>` y una de cierre como `</p>`. Todo lo que hay entre ellas es contenido que el navegador muestra.',
    whyItMatters:
      'Cada sitio web que has visitado está construido sobre HTML. Es la base del desarrollo web. Incluso si después usas frameworks sofisticados, todos generan HTML por debajo. Entender HTML es el primer paso esencial para construir cualquier cosa en la web.',
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
      'Olvidar cerrar las etiquetas. Si abres un `<div>` pero nunca lo cierras con `</div>`, el navegador intenta adivinar dónde termina, y tu diseño se verá mal. Otro problema común es anidar etiquetas incorrectamente — `<b><i>texto</b></i>` está mal; debería ser `<b><i>texto</i></b>` (cierra las etiquetas internas primero).',
    tryThisNext:
      'Crea una página de perfil personal con tu nombre en un `<h1>`, una breve biografía en etiquetas `<p>`, una lista de tus pasatiempos usando `<ul>` y `<li>`, y un enlace a tu sitio web favorito. ¡Ábrela en tu navegador para verla cobrar vida!',
  },
  {
    id: 'css-basics',
    topic: 'Fundamentos de CSS',
    simpleExplanation:
      'CSS (Cascading Style Sheets — Hojas de Estilo en Cascada) es lo que hace que las páginas web se vean bien. Mientras que HTML define la estructura (qué hay en la página), CSS controla la apariencia — colores, fuentes, tamaños, espaciado y diseño. Escribes reglas que dicen "haz todos los títulos azules" o "dale a esta caja una sombra y esquinas redondeadas."',
    whyItMatters:
      'Una página web sin CSS es como un documento sin formato — funciona, pero nadie quiere mirarlo. CSS te da control creativo sobre el diseño de tu sitio web. Aprender CSS te permite transformar un esqueleto HTML simple en algo hermoso y profesional.',
    example: `/* Estilo para un encabezado */
h1 {
  color: #2563eb;
  font-size: 2rem;
  text-align: center;
}

/* Estilo para una clase */
.card {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
}

/* Estilo para un botón */
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
      'Confusión con la especificidad — cuando dos reglas CSS entran en conflicto, gana la más específica. Un selector de ID (`#header`) le gana a un selector de clase (`.header`), que le gana a un selector de etiqueta (`h1`). Los principiantes suelen agregar `!important` por todas partes para forzar estilos, pero eso crea un desorden mayor. En su lugar, aprende cómo funciona la especificidad y mantén tus selectores simples.',
    tryThisNext:
      'Toma la página de perfil HTML de la lección de HTML y agrégale CSS para que se vea genial. Prueba cambiar colores, agregar padding y márgenes, y crear un diseño de tarjeta bonito. Luego experimenta con Flexbox centrando elementos en la página usando `display: flex` y `justify-content: center`.',
  },
  {
    id: 'debugging-basics',
    topic: 'Fundamentos de Depuración',
    simpleExplanation:
      'La depuración es el proceso de encontrar y corregir errores (bugs) en tu código. Todo programador — incluso los expertos — pasa una gran cantidad de tiempo depurando. Es como ser un detective: miras las pistas (mensajes de error, comportamiento inesperado), formas una teoría sobre qué está mal, la pruebas y repites hasta encontrar al culpable.',
    whyItMatters:
      'Escribir código que funcione perfectamente al primer intento es extremadamente raro. La depuración es una habilidad que usarás todos los días como programador. Ser bueno en ella te hace más rápido, menos frustrado y más seguro. Los mejores depuradores no son los que escriben código perfecto — son los que encuentran errores rápidamente.',
    example: `// Paso 1: Lee el mensaje de error con cuidado
// "TypeError: Cannot read properties of undefined (reading 'name')"
// Esto te dice: algo es undefined, e intentaste acceder a .name en ello.

// Paso 2: Usa console.log para inspeccionar valores
function getUser(id) {
  let users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
  let user = users.find(u => u.id === id);

  console.log("Looking for id:", id);
  console.log("Found user:", user);    // ¿Es undefined?

  return user.name; // 💥 ¡Falla si user es undefined!
}

// Paso 3: Corrige con una verificación de seguridad
function getUserSafe(id) {
  let users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
  let user = users.find(u => u.id === id);

  if (!user) {
    return "User not found";
  }
  return user.name;
}`,
    commonMistake:
      '¡No leer el mensaje de error! Suena simple, pero muchos principiantes ven un muro de texto rojo y entran en pánico. Los mensajes de error en realidad son tu mejor amigo — te dicen exactamente qué salió mal y en qué línea. Empieza por la primera línea del error, encuentra el nombre del archivo y el número de línea, y lee la descripción con cuidado.',
    tryThisNext:
      'Rompe intencionalmente algo de tu código existente de diferentes maneras y practica leyendo los mensajes de error. Intenta acceder a una variable que no existe, llamar a una función inexistente y pasar un tipo incorrecto. Usa `console.log()` o `print()` para rastrear lo que tu código realmente está haciendo paso a paso.',
  },
  {
    id: 'data-structures',
    topic: 'Estructuras de Datos',
    simpleExplanation:
      'Las estructuras de datos son formas de organizar y almacenar datos para que puedas acceder a ellos y modificarlos eficientemente. Piensa en ellas como diferentes tipos de contenedores: un arreglo es como una lista numerada, una pila (stack) es como un montón de platos (último en entrar, primero en salir), una cola (queue) es como una fila en una tienda (primero en entrar, primero en salir), y un conjunto (set) es como una bolsa de elementos únicos sin duplicados. Elegir la estructura de datos correcta hace tu código más rápido y fácil de entender.',
    whyItMatters:
      'Todo programa real necesita almacenar y gestionar colecciones de datos. Usar la estructura de datos correcta puede ser la diferencia entre código que se ejecuta al instante y código que tarda una eternidad. Entender las estructuras de datos te ayuda a pensar como programador y resolver problemas de manera más efectiva — es uno de los temas más importantes en la ciencia de la computación.',
    example: `// JavaScript — Estructuras de datos comunes

// Array — lista ordenada, acceso por índice
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]); // "banana"

// Stack — Último en Entrar, Primero en Salir (LIFO)
let stack = [];
stack.push("A");    // agregar arriba
stack.push("B");
stack.push("C");
console.log(stack.pop()); // "C" — el último agregado sale primero

// Queue — Primero en Entrar, Primero en Salir (FIFO)
let queue = [];
queue.push("first");    // agregar al final
queue.push("second");
console.log(queue.shift()); // "first" — el primero agregado sale primero

// Set — solo valores únicos, sin duplicados
let uniqueColors = new Set(["red", "blue", "red", "green"]);
console.log(uniqueColors); // Set { "red", "blue", "green" }

// Map — pares clave-valor (como un objeto pero más flexible)
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
console.log(scores.get("Alice")); // 95

# Python — Estructuras de datos comunes

# Lista — ordenada, mutable
fruits = ["apple", "banana", "cherry"]

# Pila usando una lista
stack = []
stack.append("A")
stack.append("B")
stack.append("C")
print(stack.pop())  # "C"

# Cola usando collections.deque
from collections import deque
queue = deque(["first", "second"])
print(queue.popleft())  # "first"

# Set — valores únicos
unique_colors = {"red", "blue", "red", "green"}
print(unique_colors)  # {"red", "blue", "green"}

# Diccionario — pares clave-valor
scores = {"Alice": 95, "Bob": 87}
print(scores["Alice"])  # 95`,
    commonMistake:
      '¡Usar un arreglo para todo! Los arreglos son geniales para listas ordenadas, pero si necesitas verificar si algo existe, un Set es mucho más rápido. Si necesitas buscar valores por una clave, usa un Map o diccionario en lugar de buscar en un arreglo. Además, los principiantes a menudo confunden pilas y colas — recuerda: pila = último en entrar, primero en salir (como deshacer), cola = primero en entrar, primero en salir (como una fila de espera).',
    tryThisNext:
      'Intenta implementar una lista de tareas simple usando diferentes estructuras de datos. Usa un arreglo para almacenar tareas en orden, un Set para rastrear etiquetas únicas, y un Map/diccionario para almacenar prioridades de tareas. ¡Luego intenta implementar una función básica de deshacer usando una pila — agrega acciones a la pila y sácalas para deshacer!',
  },
];