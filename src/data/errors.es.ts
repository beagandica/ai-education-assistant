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
      'Revisa la escritura exacta - los nombres de variables distinguen mayúsculas y minúsculas',
      'Asegúrate de que la variable esté declarada antes de la línea que la usa',
      'Verifica que la variable esté en el alcance correcto (no atrapada dentro de una función o bloque)',
      'Si es de una librería, asegúrate de importarla al inicio del archivo',
    ],
    exampleFix: `// ❌ Error
console.log(mesage); // ReferenceError: mesage is not defined

// ✅ Corregido - escritura correcta y declaración
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

// ✅ Corregido - no llames un número como función
let count = 5;
console.log(count); // 5

// ❌ Error - método incorrecto en string
let name = "Alice";
name.push(" Smith"); // TypeError: name.push is not a function

// ✅ Corregido - usa concatenación de strings
let name = "Alice";
name = name + " Smith";`,
  },
  {
    id: 'js-cannot-read-properties',
    pattern: '((?:TypeError:\\s*)?Cannot read propert(?:y|ies) of (?:undefined|null))',
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

// ✅ Corregido - verificar antes de acceder
let user = undefined;
if (user) {
  console.log(user.name);
} else {
  console.log("No user found");
}

// ✅ Aún mejor - usar encadenamiento opcional
console.log(user?.name ?? "No user found");`,
  },
  {
    id: 'js-unexpected-token',
    pattern: '(SyntaxError: Unexpected token|Unexpected token)',
    title: 'SyntaxError: Token inesperado',
    whatItMeans:
      'JavaScript encontró un carácter o símbolo donde no lo esperaba. La estructura de tu código tiene un error de sintaxis - como un corchete faltante, una coma de más o una palabra clave mal ubicada.',
    commonCauses: [
      'Faltan o sobran llaves `{}`, paréntesis `()` o corchetes `[]`',
      'Comas de más o faltantes en arreglos/objetos',
      'Usar una palabra reservada como nombre de variable',
      'Mezclar comillas simples y dobles incorrectamente',
      'Olvidar cerrar las comillas en un string',
    ],
    stepsToFix: [
      'Mira el número de línea en el error - el problema suele estar en esa línea o la anterior',
      'Verifica que los pares coincidan: cada `{` necesita un `}`, cada `(` necesita un `)`',
      'Usa la función de coincidencia de corchetes de tu editor para encontrar desajustes',
      'Busca comas al final en objetos/arreglos y comas faltantes entre elementos',
    ],
    exampleFix: `// ❌ Error - falta llave de cierre
function greet(name) {
  console.log("Hello " + name);
// SyntaxError: Unexpected end of input

// ✅ Corregido - se agregó llave de cierre
function greet(name) {
  console.log("Hello " + name);
}

// ❌ Error - coma extra
let colors = ["red", "blue",, "green"];

// ✅ Corregido
let colors = ["red", "blue", "green"];`,
  },
  {
    id: 'js-unexpected-end',
    pattern: '(SyntaxError: Unexpected end of input)',
    title: 'SyntaxError: Fin de entrada inesperado',
    whatItMeans:
      'JavaScript llegó al final de tu código pero todavía esperaba más - generalmente un corchete, llave o paréntesis de cierre. Algo se abrió pero nunca se cerró.',
    commonCauses: [
      'Falta la llave de cierre `}` de una función, if o bucle',
      'Falta el paréntesis de cierre `)` en una llamada a función o condición',
      'String sin cerrar (falta la comilla de cierre)',
      'Código incompleto - puede que hayas borrado una línea accidentalmente',
    ],
    stepsToFix: [
      'Cuenta tus llaves de apertura y cierre - deben coincidir',
      'Empieza desde el final del archivo y trabaja hacia atrás para encontrar lo que falta',
      'Usa la función de plegado de código de tu editor para ver qué bloques están sin cerrar',
      'Usa un formateador automático (como Prettier) - a menudo señala dónde está el desajuste',
    ],
    exampleFix: `// ❌ Error - faltan llaves de cierre
function calculateTotal(items) {
  let total = 0;
  for (let item of items) {
    total += item.price;

// ✅ Corregido - cerrar el bucle for y la función
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
    exampleFix: `# ❌ Error - falta indentación
def greet(name):
print("Hello " + name)  # IndentationError!

# ✅ Corregido - indentado con 4 espacios
def greet(name):
    print("Hello " + name)

# ❌ Error - indentación inconsistente
if True:
    print("yes")
  print("also yes")  # IndentationError!

# ✅ Corregido - indentación consistente de 4 espacios
if True:
    print("yes")
    print("also yes")`,
  },
  {
    id: 'py-nonetype',
    pattern: "(TypeError:.*'NoneType'|NoneType)",
    title: "TypeError: 'NoneType' (Python)",
    whatItMeans:
      'Intentaste hacer algo con `None` que solo funciona con valores reales. `None` en Python significa "nada" o "sin valor" - es lo que las funciones devuelven por defecto si no tienen una instrucción `return`.',
    commonCauses: [
      'Una función no tiene instrucción `return`, por lo que devuelve `None`',
      'Llamar un método de lista como `.sort()` o `.append()` y asignar el resultado (estos devuelven `None`)',
      'Una variable debía recibir datos pero la operación falló silenciosamente',
      'Usar el resultado de `print()` - siempre devuelve `None`',
    ],
    stepsToFix: [
      'Verifica si la función tiene una instrucción `return` que realmente devuelve un valor',
      'Recuerda que `.sort()`, `.append()`, `.reverse()` modifican la lista en su lugar y devuelven `None`',
      'Agrega una verificación: `if result is not None:` antes de usar el valor',
      'Usa `print()` para mostrar y una variable separada para almacenar',
    ],
    exampleFix: `# ❌ Error - .sort() devuelve None
numbers = [3, 1, 2]
sorted_numbers = numbers.sort()
print(sorted_numbers[0])  # TypeError: 'NoneType' object is not subscriptable

# ✅ Corregido - ordenar en su lugar, luego usar la lista
numbers = [3, 1, 2]
numbers.sort()
print(numbers[0])  # 1

# ✅ Alternativa - usar sorted() que devuelve una nueva lista
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
      'Revisa bien la escritura - Python distingue entre mayúsculas y minúsculas (`name` ≠ `Name`)',
      'Asegúrate de que la variable esté asignada antes de la línea que la usa',
      'Si es de un módulo, agrega la instrucción `import` al inicio de tu archivo',
      'Verifica que la variable no esté atrapada en un alcance diferente (dentro de una función)',
    ],
    exampleFix: `# ❌ Error - error de escritura
user_name = "Alice"
print(user_Name)  # NameError: name 'user_Name' is not defined

# ✅ Corregido - capitalización correcta
user_name = "Alice"
print(user_name)  # "Alice"

# ❌ Error - olvidó importar
result = math.sqrt(16)  # NameError: name 'math' is not defined

# ✅ Corregido - agregar import
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
      'Usar `len(lista)` como índice - el último índice válido es `len(lista) - 1`',
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
    exampleFix: `# ❌ Error - índice fuera de rango
colors = ["red", "green", "blue"]
print(colors[3])  # IndexError! Los índices válidos son 0, 1, 2

# ✅ Corregido - usar un índice válido
colors = ["red", "green", "blue"]
print(colors[2])  # "blue" (último elemento)
print(colors[-1]) # "blue" (último elemento, la forma Pythónica)

# ✅ Corregido - verificar antes de acceder
colors = []
if len(colors) > 0:
    print(colors[0])
else:
    print("The list is empty")`,
  },
  {
  id: 'js-max-call-stack',
  pattern: '(?:RangeError:?\s*)?Maximum call\s*stack size exceeded',
  title: 'Maximum call stack size exceeded',
  whatItMeans: 'JavaScript trató de seguir llamando funciones hasta que se quedó sin espacio para más llamadas. Casi siempre significa que hay una cadena de llamadas que nunca termina.',
  commonCauses: [
    'Una función que se llama a sí misma sin una condición clara de salida',
    'Dos funciones que se llaman una a la otra en un ciclo',
    'Actualizar el estado en React dentro del render para que el componente se vuelva a renderizar sin parar',
    'Recorrer datos muy anidados con recursión sin límite'
  ],
  stepsToFix: [
    'Busca en el mensaje el nombre de la función y revisa dónde se llama a sí misma o entra en un ciclo',
    'Si usas recursión, agrega un caso base que detenga la función cuando ya terminó su trabajo',
    'En React, mueve las actualizaciones de estado a manejadores de eventos o efectos en lugar de hacerlas en render',
    'Prueba primero con entradas pequeñas y luego aumenta el tamaño para confirmar que la función siempre termina'
  ],
  exampleFix: '```js\n// Recursión incorrecta - nunca termina\nfunction countdown(n) {\n  return countdown(n - 1);\n}\n\n// Versión corregida con caso base\nfunction countdownFixed(n) {\n  if (n <= 0) {\n    console.log("Listo");\n    return;\n  }\n  console.log(n);\n  countdownFixed(n - 1);\n}\n\ncountdownFixed(3); // 3, 2, 1, Listo\n```'
},
{
  id: 'py-syntax-error',
  pattern: 'SyntaxError:?.*',
  title: 'SyntaxError',
  whatItMeans: 'Python no pudo empezar a ejecutar tu programa porque la estructura del código es inválida.',
  commonCauses: [
    'Falta de dos puntos después de if, for, while, def o class',
    'Líneas que deberían estar indentadas pero no lo están, o indentación extra donde no corresponde',
    'Paréntesis, corchetes o comillas que no cierran en pareja',
    'Escribir dos instrucciones en una sola línea sin separarlas bien'
  ],
  stepsToFix: [
    'Mira el número de línea del error y también la línea anterior',
    'Verifica que cada if, for, while, def y class termine con dos puntos',
    'Asegúrate de que todos los paréntesis, corchetes y comillas abren y cierran en pares',
    'Ajusta la indentación para que los bloques formen una escalera limpia'
  ],
  exampleFix: '```python\n# Código incorrecto\nif x > 10\n    print("Grande")\n\n# Código corregido\nif x > 10:\n    print("Grande")\n```'
},
{
  id: 'py-type-error',
  pattern: 'TypeError(?!:.*NoneType).*',
  title: 'TypeError - tipo incorrecto',
  whatItMeans: 'Python encontró un valor del tipo equivocado para una operación, por ejemplo sumar un texto con un número.',
  commonCauses: [
    'Intentar sumar o concatenar un string con un entero directamente',
    'Pasar un tipo de dato diferente al que espera una función',
    'Usar una lista o un diccionario donde se esperaba un número, o al revés',
    'Olvidar convertir la entrada de texto a int o float antes de hacer operaciones'
  ],
  stepsToFix: [
    'Lee el mensaje para ver qué tipos está comparando Python',
    'Usa int, float o str para convertir los valores antes de combinarlos',
    'Imprime type(valor) para confirmar de qué tipo es realmente',
    'Ajusta la función para que reciba el tipo correcto o corrige la llamada a la función'
  ],
  exampleFix: '```python\nage = "12"\n# Incorrecto - string más int\n# total = age + 5\n\n# Corregido - convertir a int primero\ntotal = int(age) + 5\nprint(total)  # 17\n```'
},
{
  id: 'py-value-error',
  pattern: 'ValueError:?.*',
  title: 'ValueError',
  whatItMeans: 'Python aceptó el tipo de dato, pero el valor concreto no es válido para esa operación.',
  commonCauses: [
    'Llamar a int con un texto que no es un número',
    'Usar un número negativo donde solo tienen sentido valores positivos',
    'Pasar una cadena que no está entre las opciones válidas de una función',
    'Datos incorrectos en un archivo o entrada de usuario que no respetan el formato esperado'
  ],
  stepsToFix: [
    'Lee el mensaje completo para ver qué valor causó el problema',
    'Valida la entrada de usuario antes de convertirla o procesarla',
    'Agrega un bloque try y except ValueError para mostrar un mensaje amigable en lugar de fallar',
    'Si los datos vienen de un archivo o API, revisa algunas filas para confirmar el formato'
  ],
  exampleFix: '```python\ntext = "hola"\n\ntry:\n    number = int(text)\nexcept ValueError:\n    print("Por favor escribe solo dígitos")\n```'
},
{
  id: 'py-key-error',
  pattern: 'KeyError:?.*',
  title: 'KeyError',
  whatItMeans: 'Le pediste a un diccionario una clave que no existe.',
  commonCauses: [
    'Escribir el nombre de la clave con una ortografía distinta a la guardada',
    'Asumir que todos los elementos tienen las mismas claves cuando algunos no las tienen',
    'Leer datos de JSON o archivos donde ciertos campos son opcionales',
    'Usar un valor dinámico como clave que no está en el diccionario'
  ],
  stepsToFix: [
    'Imprime las claves con dict_var.keys() para ver qué hay realmente',
    'Usa el método get con un valor por defecto en lugar de indexar directamente',
    'Verifica si la clave está presente con in antes de accederla',
    'Limpia o valida los datos para manejar claves faltantes de forma intencional'
  ],
  exampleFix: '```python\nuser = {"name": "Sam"}\n\n# Acceso más seguro\nemail = user.get("email", "sin correo")\nprint(email)\n```'
},
{
  id: 'py-attribute-error',
  pattern: 'AttributeError:?.*',
  title: 'AttributeError',
  whatItMeans: 'Tu código intentó usar un atributo o método que ese objeto no tiene.',
  commonCauses: [
    'Llamar un método que pertenece a otro tipo de objeto',
    'Asumir que una variable tiene valor cuando en realidad es None',
    'Escribir mal el nombre de un atributo o método',
    'Confundir métodos de lista, diccionario y cadena de texto'
  ],
  stepsToFix: [
    'Mira el mensaje para ver qué nombre de atributo falta',
    'Imprime type(valor) para saber de qué tipo es el objeto',
    'Revisa la documentación o el autocompletado para usar el nombre correcto del método',
    'Agrega comprobaciones de None antes de llamar métodos si el valor puede faltar'
  ],
  exampleFix: '```python\nname = "Ada"\n# Incorrecto - método de lista en un string\n# name.append("!")\n\n# Corregido - usar operación de string\nname = name + "!"\nprint(name)  # Ada!\n```'
},
{
  id: 'py-import-error',
  pattern: '(?:ModuleNotFoundError|ImportError):?.*',
  title: 'ImportError o ModuleNotFoundError',
  whatItMeans: 'Python no pudo encontrar o cargar un módulo que intentaste importar.',
  commonCauses: [
    'Escribir mal el nombre del módulo en la instrucción import',
    'No tener instalado el paquete en el entorno actual',
    'Ejecutar el script desde una carpeta donde los imports locales no coinciden',
    'Usar un entorno virtual que no tiene aún esa dependencia instalada'
  ],
  stepsToFix: [
    'Revisa la línea de import y corrige el nombre del módulo si es necesario',
    'Ejecuta pip install nombre_del_paquete en el entorno correcto',
    'Imprime sys.path para entender dónde busca Python los módulos',
    'En proyectos grandes, ejecuta el script desde la carpeta raíz o usa python -m paquete.modulo'
  ],
  exampleFix: '```python\n# Terminal\n# pip install requests\n\nimport requests\nresponse = requests.get("https://example.com")\nprint(response.status_code)\n```'
},
{
  id: 'py-zero-division',
  pattern: 'ZeroDivisionError:?.*',
  title: 'ZeroDivisionError',
  whatItMeans: 'Tu código intentó dividir entre cero, algo que no está permitido en matemáticas.',
  commonCauses: [
    'La persona usuaria ingresó 0 como divisor',
    'Los datos de un archivo o API contienen ceros que no esperabas',
    'Contadores que nunca se actualizan pero se usan como divisores',
    'Calcular promedios sin revisar si hay elementos suficientes'
  ],
  stepsToFix: [
    'Revisa el valor por el que estás dividiendo antes de hacer la operación',
    'Agrega un if para manejar el caso en que el divisor sea cero',
    'En promedios, verifica primero que count > 0',
    'Imprime las entradas cuando ocurra el error para entender los datos reales'
  ],
  exampleFix: '```python\ntotal = 10\ncount = 0\n\nif count == 0:\n    print("No hay elementos, no se puede calcular el promedio")\nelse:\n    average = total / count\n    print(average)\n```'
},
{
  id: 'py-file-not-found',
  pattern: 'FileNotFoundError:?.*',
  title: 'FileNotFoundError',
  whatItMeans: 'Python intentó abrir un archivo, pero la ruta que diste no existe.',
  commonCauses: [
    'Usar un nombre de archivo o extensión incorrectos',
    'Ejecutar el script desde otra carpeta distinta a la que imaginabas',
    'Olvidar incluir el archivo de datos en el proyecto o subirlo al entorno',
    'Usar una ruta relativa que no coincide con el directorio de trabajo actual'
  ],
  stepsToFix: [
    'Imprime el directorio de trabajo con import os y os.getcwd()',
    'Confirma que el nombre de archivo y la extensión sean exactamente correctos',
    'Mientras depuras, prueba con una ruta absoluta para ver si el archivo existe',
    'Coloca el archivo en una carpeta conocida y arma la ruta con os.path.join'
  ],
  exampleFix: '```python\nimport os\n\nprint(os.getcwd())\nfile_path = os.path.join("data", "scores.csv")\n\nwith open(file_path) as f:\n    print(f.readline())\n```'
},
{
  id: 'py-recursion-error',
  pattern: 'RecursionError:?.*',
  title: 'RecursionError - máximo nivel de recursión excedido',
  whatItMeans: 'Tu función recursiva se llamó a sí misma demasiadas veces sin detenerse.',
  commonCauses: [
    'Falta de caso base o caso base incorrecto en una función recursiva',
    'Llamadas recursivas que avanzan en la dirección equivocada y nunca llegan al caso base',
    'Uso de recursión sobre estructuras de datos muy profundas o con ciclos',
    'Recursión mutua accidental donde dos funciones se llaman entre sí'
  ],
  stepsToFix: [
    'Ubica la función recursiva que aparece en el traceback',
    'Agrega un caso base que devuelva un resultado sin hacer otra llamada recursiva',
    'Verifica que cada llamada recursiva acerque el valor al caso base',
    'Para datos muy profundos, considera reescribir el algoritmo con un ciclo y una pila explícita'
  ],
  exampleFix: '```python\n# Incorrecto - el caso base está mal\n# def factorial(n):\n#     return n * factorial(n)\n\n# Versión corregida\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))  # 120\n```'
}

];