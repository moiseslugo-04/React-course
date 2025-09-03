Descripción General
Desarrolla una aplicación de gestión de tareas (Todo App) utilizando React y los hooks que has aprendido. Deberás consumir una API JSON pública para obtener datos iniciales y demostrar tu comprensión de los hooks de React.

Tiempo estimado: 3-4 horas

API a consumir
Utiliza JSONPlaceholder, una API REST falsa para testing:

Obtener tareas: https://jsonplaceholder.typicode.com/todos

Límite: Obtén solo las primeras 10 tareas: https://jsonplaceholder.typicode.com/todos?_limit=10

Requisitos Técnicos

1. Estructura del proyecto
   Crea una aplicación React con Vite o Create React App

Organiza los componentes en una estructura clara

2. Funcionalidades requeridas
   Mostrar lista de tareas obtenidas de la API

Marcar/desmarcar tareas como completadas

Agregar nuevas tareas

Filtrar tareas (todas, completadas, pendientes)

Eliminar tareas

Persistencia local (guardar en localStorage)

3. Hooks a utilizar (todos deben aparecer en tu solución)
   useState: Para el estado local de componentes

useEffect: Para cargar datos iniciales y persistir cambios

useContext: Para compartir el estado de la aplicación (opcional pero valorado)

useReducer: Para manejar el estado complejo de las tareas (opcional pero valorado)

useCallback: Para memorizar funciones y evitar renders innecesarios

useMemo: Para memorizar valores calculados (como tareas filtradas)

useRef: Para manejar focos en inputs o acceder a elementos DOM

useId: Para generar IDs únicos en formularios (accesibilidad)

Criterios de evaluación
Correcta implementación de los hooks de React

Estructura de componentes clara y organizada

Manejo adecuado del estado de la aplicación

Uso apropiado de efectos secundarios

Optimizaciones de rendimiento con useCallback y useMemo

Código limpio y bien comentado

Funcionalidad completa de la aplicación

Entrega
Crea un repositorio en GitHub con tu solución

Incluye un README con instrucciones para ejecutar el proyecto

Prepara la aplicación para ser desplegada (puedes usar Vercel, Netlify o GitHub Pages)

Bonus (opcional pero valorado)
Implementar temas claro/oscuro usando useContext

Añadir animaciones o transiciones

Implementar tests básicos

Hacer la aplicación responsive

Agregar validaciones a los formularios
