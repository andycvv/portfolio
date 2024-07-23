import { TAGS } from './tags';

export const PROJECTS = [
  {
    name: 'Sistema de Matrículas Escolares',
    description: 'Sistema de Matrículas que permite a los administradores registrar, editar y buscar usuarios, cursos y categorías, además de gestionar matrículas y generar reportes. Los usuarios pueden crear cuentas y acceder con su DNI.',
    tags: [TAGS.JAVA, TAGS.MYSQL, TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    image: '../../public/projects/matriculas.jpg',
    href: 'https://github.com/andycvv/sistema-gestion-colegio'
  },
  {
    name: 'To-Do App',
    description: 'Permite gestionar sus tareas con características como la adición de tareas, marcado de tareas como completadas, eliminación de tareas, cambio entre temas claro y oscuro, y persistencia utilizando localStorage.',
    tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.HTML, TAGS.CSS],
    image: '../../public/projects/todoapp.jpg',
    href: 'https://github.com/andycvv/to-do-app',
    preview: 'https://andycvv-to-do-app.netlify.app/'
  },
  {
    name: 'La Lucha Sanguchería Criolla',
    description: 'Página web para una empresa de sándwiches, con secciones de Inicio, Tienda y Nosotros. Permite explorar la historia de la empresa, navegar por el menú, agregar productos al carrito de compras y conocer al equipo.',
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    image: '../../public/projects/lalucha.jpg',
    href: 'https://github.com/andycvv/ProyectoLaLucha',
    preview: 'https://andycvv.github.io/ProyectoLaLucha/'
  }
]