import { TAGS } from './tags';

export const PROJECTS = [
  {
    name: 'Sistema de Ventas Electroshop',
    description: 'Sistema de Ventas que automatiza el proceso de venta de Electroshop. Permite gestionar usuarios, productos y pedidos. Los administradores pueden gestionar entidades y actualizar el estado de pedidos, mientras que los clientes pueden crear y consultar sus pedidos.',
    tags: [TAGS.SPRINGBOOT, TAGS.JAVA, TAGS.ECLIPSE, TAGS.MYSQL],
    image: '/projects/electroshop.webp'
  },
  {
    name: 'Sistema de Matrículas Escolares',
    description: 'Permite registrar, editar y buscar usuarios, cursos y categorías, además de gestionar matrículas y generar reportes. Los usuarios pueden crear cuentas y acceder con su DNI.',
    tags: [TAGS.JAVA, TAGS.MYSQL, TAGS.JAVASCRIPT],
    image: '/projects/matriculas.jpg',
    href: 'https://github.com/andycvv/sistema-gestion-colegio'
  },
  {
    name: 'Asistente de Textos con IA',
    description: 'Permite generar textos con inteligencia artificial a partir de un texto de entrada, utilizando la API de OpenAI. Se pueden seleccionar la categoría y opción a partir de la cual se modificará el texto.',
    tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.OPENAI],
    image: '/projects/text-helper-ai.webp',
    href: 'https://github.com/andycvv/text-helper-ai'
  },
  {
    name: 'To-Do App',
    description: 'Permite gestionar sus tareas con características como la adición de tareas, marcado de tareas como completadas, eliminación de tareas, cambio entre temas claro y oscuro, y persistencia utilizando localStorage.',
    tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.HTML, TAGS.CSS],
    image: '/projects/todoapp.jpg',
    href: 'https://github.com/andycvv/to-do-app',
    preview: 'https://andycvv-to-do-app.netlify.app/'
  },
]

export const OTHER_PROJECTS = [

]