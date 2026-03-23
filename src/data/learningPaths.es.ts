import type { LearningPath } from '../types/content';

export const learningPathsEs: LearningPath[] = [
  {
    id: 'python-basics',
    title: 'Aprende los Fundamentos de Python',
    description:
      'Comienza tu camino en la programación con Python — uno de los lenguajes más amigables para principiantes y más versátiles. Esta ruta te lleva desde cero hasta escribir programas reales en Python.',
    steps: [
      'Instala Python y configura tu primer proyecto',
      'Aprende variables, tipos de datos y entrada/salida básica',
      'Domina los condicionales: if, elif y else',
      'Escribe bucles con for y while para automatizar la repetición',
      'Define y llama funciones para organizar tu código',
      'Trabaja con listas, tuplas y diccionarios',
      'Lee y escribe archivos',
      'Maneja errores de forma elegante con try/except',
    ],
    icon: '🐍',
  },
  {
    id: 'javascript-basics',
    title: 'Aprende los Fundamentos de JavaScript',
    description:
      'Sumérgete en JavaScript — el lenguaje que impulsa la web interactiva. Esta ruta cubre los conceptos fundamentales que necesitas para empezar a construir páginas web dinámicas y aplicaciones.',
    steps: [
      'Configura tu entorno y escribe tu primer script',
      'Entiende variables, tipos de datos y operadores',
      'Toma decisiones con if/else y switch',
      'Repite acciones con bucles for, while y for...of',
      'Crea código reutilizable con funciones y funciones flecha',
      'Almacena colecciones con arreglos y objetos',
      'Interactúa con páginas web usando el DOM',
      'Depura tu código con console.log y las DevTools del navegador',
    ],
    icon: '⚡',
  },
  {
    id: 'web-dev-basics',
    title: 'Aprende los Fundamentos del Desarrollo Web',
    description:
      '¡Construye tu primer sitio web desde cero! Esta ruta te enseña las tres tecnologías fundamentales de la web — HTML para la estructura, CSS para el estilo y JavaScript para la interactividad.',
    steps: [
      'Entiende cómo funciona la web: navegadores, servidores y URLs',
      'Construye la estructura de páginas con HTML: encabezados, párrafos, listas y enlaces',
      'Agrega imágenes, formularios y elementos HTML semánticos',
      'Dale estilo a tus páginas con CSS: colores, fuentes y espaciado',
      'Crea diseños con CSS Flexbox y Grid',
      'Haz tu sitio responsivo para dispositivos móviles',
      'Agrega interactividad con JavaScript y manipulación del DOM',
      'Publica tu primer sitio web en internet',
    ],
    icon: '🌐',
  },
];
