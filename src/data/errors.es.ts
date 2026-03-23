import type { ErrorResponse } from '../types/content';

export const errorsEs: ErrorResponse[] = [
  {
    id: 'js-not-defined',
    pattern: '(ReferenceError:.*is not defined|is not defined)',
    title: 'ReferenceError: La variable no está definida',
    whatItMeans:
      'Intentaste usar un nombre de variable o función que no existe en el alcance actual. JavaScript lo buscó pero no lo encontró en ningún lugar.',
    commonCauses: [
      'Error de escritura en el nombre de la variable (por ejemplo, `userName` vs `username`)',
      'Usar una variable antes de declararla con `let`, `const` o `var`',
      'La variable fue declarada dentro de una función o bloque y estás intentando usarla fuera',
      'Olvidaste importar un módulo o librería',
    ],
    stepsToFix: [
      'Revisa la escritura exacta — los nombres de variables distinguen mayúsculas y minúsculas',
      'Asegúrate de que la variable esté declarada antes de la línea que la usa',
      'Verifica que la variable esté en el alcance correcto (no atrapada dentro de una función o bloque)',
      'Si es de una librería, asegúrate de importarla al inicio del archivo',
    ],
    exampleFix: `// ❌ Error
console.log(mesage); // ReferenceError: mesage is not defined

// ✅ Corregido — escritura correcta y declaración
let message = "Hello!";
console.log(message); // "Hello!"`,
  },
  {
    id: 'js-not-a-function',
    pattern: '(TypeError:.*is not a function)',
    title: 'TypeError: No es una función',
    whatItMeans:
      'Intentaste llamar algo como función (usando paréntesis), pero en realidad no es una función. Podría ser un número, texto, undefined o un objeto.',
    commonCauses: [
      'Error de escritura en el nombre de la función',
      'Llamar un método en el tipo de dato incorrecto (por ejemplo, llamar `.push()` en un string)',
      'Sobrescribir el nombre de una función con un valor que no es función',
      'Importación faltante o incorrecta',
      'Llamar un callback antes de que esté asignado',
    ],
    stepsToFix: [
      'Revisa la escritura del nombre de la función',
      'Usa `console.log(typeof tuVariable)` para ver qué tipo es realmente',
      'Asegúrate de no haber reasignado accidentalmente el nombre de la función a otra cosa',
      'Verifica que el método exista en el tipo que estás usando (por ejemplo, los arreglos tienen `.push()`, los strings no)',
    ],
    exampleFix: `// ❌ Error
let count = 5;
count(); // TypeError: count is not a function

// ✅ Corregido — no llames un número como función
let count = 5;
console.log(count); // 5

// ❌ Error — método incorrecto en string
let name = "Alice";
name.push(" Smith"); // TypeError: name.push is not a function

// ✅ Corregido — usa concatenación de strings
let name = "Alice";
name = name + " Smith";`,
  },
  {
    id: 'js-cannot-read-properties',
    pattern: '(TypeError: Cannot read propert(y|ies) of (undefined|null))',
    title: 'TypeError: No se pueden leer propiedades de undefined',
    whatItMeans:
      'Intentaste acceder a una propiedad (como `.name` o `.length`) de algo que es `undefined` o `null`. El objeto que esperabas encontrar no existe.',
    commonCauses: [
      'Acceder a una propiedad anidada cuando un objeto padre no existe',
      'Una llamada a API o consulta a base de datos no devolvió nada y no lo verificaste',
      'Array `.find()` devolvió `undefined` porque no encontró coincidencia',
      'Una consulta al DOM como `document.querySelector()` devolvió `null`',
      'Nombre de variable incorrecto o acceder a propiedades antes de que los datos se carguen',
    ],
    stepsToFix: [
      'Agrega `console.log()` antes de la línea del error para ver qué contiene realmente la variable',
      'Agrega una verificación de null/undefined antes de acceder a propiedades',
      'Usa encadenamiento opcional (`?.`) para acceder de forma segura a propiedades anidadas',
      'Si son datos asíncronos, asegúrate de que estén cargados antes de intentar usarlos',
    ],
    exampleFix: `// ❌ Error
let user = undefined;
console.log(user.name); // TypeError: Cannot read properties of undefined

// ✅ Corregido — verificar antes de acceder
let user = undefined;
if (user) {
  console.log(user.name);
} else {
  console.log("No user found");
}

// ✅ Aún mejor — usar encadenamiento opcional
console.log(user?.name ?? "No user found");`,
  },
  {
    id: 'js-unexpected-token',
    pattern: '(SyntaxError: Unexpected token|Unexpected token)',
    title: 'SyntaxError: Token inesperado',
    whatItMeans:
      'JavaScript encontró un carácter o símbolo donde no lo esperaba. La estructura de tu código tiene un error de sintaxis — como un corchete faltante, una coma de más o una palabra clave mal ubicada.',
    commonCauses: [
      'Faltan o sobran llaves `{}`, paréntesis `()` o corchetes `[]`',
      'Comas de más o faltantes en arreglos/objetos',
      'Usar una palabra reservada como nombre de variable',
      'Mezclar comillas simples y dobles incorrectamente',
      'Olvidar cerrar las comillas en un string',
    ],
    stepsToFix: [
      'Mira el número de línea en el error — el problema suele estar en esa línea o la anterior',
      'Verifica que los pares coincidan: cada `{` necesita un `}`, cada `(` necesita un `)`',
      'Usa la función de coincidencia de corchetes de tu editor para encontrar desajustes',
      'Busca comas al final en objetos/arreglos y comas faltantes entre elementos',
    ],
    exampleFix: `// ❌ Error — falta llave de cierre
function greet(name) {
  console.log("Hello " + name);
// SyntaxError: Unexpected end of input

// ✅ Corregido — se agregó llave de cierre
function greet(name) {
  console.log("Hello " + name);
}

// ❌ Error — coma extra
let colors = ["red", "blue",, "green"];

// ✅ Corregido
let colors = ["red", "blue", "green"];`,
  },
  {
    id: 'js-unexpected-end',
    pattern: '(SyntaxError: Unexpected end of input)',
    title: 'SyntaxError: Fin de entrada inesperado',
    whatItMeans:
      'JavaScript llegó al final de tu código pero todavía esperaba más — generalmente un corchete, llave o paréntesis de cierre. Algo se abrió pero nunca se cerró.',
    commonCauses: [
      'Falta la llave de cierre `}` de una función, if o bucle',
      'Falta el paréntesis de cierre `)` en una llamada a función o condición',
      'String sin cerrar (falta la comilla de cierre)',
      'Código incompleto — puede que hayas borrado una línea accidentalmente',
    ],
    stepsToFix: [
      'Cuenta tus llaves de apertura y cierre — deben coincidir',
      'Empieza desde el final del archivo y trabaja hacia atrás para encontrar lo que falta',
      'Usa la función de plegado de código de tu editor para ver qué bloques están sin cerrar',
      'Usa un formateador automático (como Prettier) — a menudo señala dónde está el desajuste',
    ],
    exampleFix: `// ❌ Error — faltan llaves de cierre
function calculateTotal(items) {
  let total = 0;
  for (let item of items) {
    total += item.price;

// ✅ Corregido — cerrar el bucle for y la función
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
      'Python usa la indentación (espacios al inicio de una línea) para definir bloques de código. Este error significa que tu indentación es inconsistente o falta donde Python la espera.',
    commonCauses: [
      'Mezclar tabulaciones y espacios en el mismo archivo',
      'Olvidar indentar el cuerpo de una función, bucle o if',
      'Niveles de indentación inconsistentes (por ejemplo, 2 espacios en un lugar, 4 en otro)',
      'Copiar y pegar código de internet que usa diferente indentación',
    ],
    stepsToFix: [
      'Configura tu editor para usar espacios en lugar de tabulaciones (4 espacios es el estándar de Python)',
      'Asegúrate de que cada bloque después de dos puntos (`:`) esté indentado un nivel más',
      'Usa la función "convertir indentación a espacios" de tu editor',
      'Verifica que todas las líneas del mismo bloque tengan exactamente la misma indentación',
    ],
    exampleFix: `# ❌ Error — falta indentación
def greet(name):
print("Hello " + name)  # IndentationError!

# ✅ Corregido — indentado con 4 espacios
def greet(name):
    print("Hello " + name)

# ❌ Error — indentación inconsistente
if True:
    print("yes")
  print("also yes")  # IndentationError!

# ✅ Corregido — indentación consistente de 4 espacios
if True:
    print("yes")
    print("also yes")`,
  },
  {
    id: 'py-nonetype',
    pattern: "(TypeError:.*'NoneType'|NoneType)",
    title: "TypeError: 'NoneType' (Python)",
    whatItMeans:
      'Intentaste hacer algo con `None` que solo funciona con valores reales. `None` en Python significa "nada" o "sin valor" — es lo que las funciones devuelven por defecto si no tienen una instrucción `return`.',
    commonCauses: [
      'Una función no tiene instrucción `return`, por lo que devuelve `None`',
      'Llamar un método de lista como `.sort()` o `.append()` y asignar el resultado (estos devuelven `None`)',
      'Una variable debía recibir datos pero la operación falló silenciosamente',
      'Usar el resultado de `print()` — siempre devuelve `None`',
    ],
    stepsToFix: [
      'Verifica si la función tiene una instrucción `return` que realmente devuelve un valor',
      'Recuerda que `.sort()`, `.append()`, `.reverse()` modifican la lista en su lugar y devuelven `None`',
      'Agrega una verificación: `if result is not None:` antes de usar el valor',
      'Usa `print()` para mostrar y una variable separada para almacenar',
    ],
    exampleFix: `# ❌ Error — .sort() devuelve None
numbers = [3, 1, 2]
sorted_numbers = numbers.sort()
print(sorted_numbers[0])  # TypeError: 'NoneType' object is not subscriptable

# ✅ Corregido — ordenar en su lugar, luego usar la lista
numbers = [3, 1, 2]
numbers.sort()
print(numbers[0])  # 1

# ✅ Alternativa — usar sorted() que devuelve una nueva lista
numbers = [3, 1, 2]
sorted_numbers = sorted(numbers)
print(sorted_numbers[0])  # 1`,
  },
  {
    id: 'py-name-error',
    pattern: '(NameError:.*is not defined|NameError)',
    title: 'NameError (Python)',
    whatItMeans:
      'Python no puede encontrar una variable o función con el nombre que usaste. No está definida en ningún lugar visible para Python.',
    commonCauses: [
      'Error de escritura en el nombre de la variable o función',
      'Usar una variable antes de asignarle un valor',
      'Olvidar importar un módulo (por ejemplo, usar `math.sqrt()` sin `import math`)',
      'La variable fue definida dentro de una función y estás intentando usarla fuera',
    ],
    stepsToFix: [
      'Revisa bien la escritura — Python distingue entre mayúsculas y minúsculas (`name` ≠ `Name`)',
      'Asegúrate de que la variable esté asignada antes de la línea que la usa',
      'Si es de un módulo, agrega la instrucción `import` al inicio de tu archivo',
      'Verifica que la variable no esté atrapada en un alcance diferente (dentro de una función)',
    ],
    exampleFix: `# ❌ Error — error de escritura
user_name = "Alice"
print(user_Name)  # NameError: name 'user_Name' is not defined

# ✅ Corregido — capitalización correcta
user_name = "Alice"
print(user_name)  # "Alice"

# ❌ Error — olvidó importar
result = math.sqrt(16)  # NameError: name 'math' is not defined

# ✅ Corregido — agregar import
import math
result = math.sqrt(16)  # 4.0`,
  },
  {
    id: 'py-index-error',
    pattern: '(IndexError: list index out of range|IndexError)',
    title: 'IndexError: índice de lista fuera de rango (Python)',
    whatItMeans:
      'Intentaste acceder a un elemento de una lista en una posición que no existe. Por ejemplo, si tu lista tiene 3 elementos (índices 0, 1, 2) e intentas acceder al índice 3 o mayor.',
    commonCauses: [
      'Olvidar que los índices de listas empiezan en 0, no en 1',
      'Usar `len(lista)` como índice — el último índice válido es `len(lista) - 1`',
      'Hacer un bucle con un rango que va un paso de más',
      'La lista está vacía pero intentas acceder al primer elemento',
      'Usar un índice fijo para una lista cuya longitud puede cambiar',
    ],
    stepsToFix: [
      'Imprime la lista y su longitud para ver qué hay realmente ahí',
      'Recuerda: para una lista de longitud N, los índices válidos son de 0 a N-1',
      'Verifica si la lista está vacía antes de acceder a elementos: `if len(mi_lista) > 0:`',
      'Usa `mi_lista[-1]` para obtener el último elemento sin importar la longitud',
      'Usa `for item in mi_lista:` en lugar de rastreo manual de índices cuando sea posible',
    ],
    exampleFix: `# ❌ Error — índice fuera de rango
colors = ["red", "green", "blue"]
print(colors[3])  # IndexError! Los índices válidos son 0, 1, 2

# ✅ Corregido — usar un índice válido
colors = ["red", "green", "blue"]
print(colors[2])  # "blue" (último elemento)
print(colors[-1]) # "blue" (último elemento, la forma Pythónica)

# ✅ Corregido — verificar antes de acceder
colors = []
if len(colors) > 0:
    print(colors[0])
else:
    print("The list is empty")`,
  },
];
