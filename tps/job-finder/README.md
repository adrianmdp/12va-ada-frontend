# Tercer Trabajo Practico ADA - Asincronismo / APIs

## Fecha de pre-entrega: 
## Fecha de entrega: 
## Pautas y requirimientos

- Ejemplo: https://youtu.be/kbw9MZhuuS0
- Tecnologias:
    - Utilizar HTML, SASS (opcional) y Javascript.
    - Si esta permitido utilizar librerias de fonts e iconos (tales como fontawesome y google fonts).
- Disenio:
    - La eleccion de paleta de colores y tipografia es libre.
    - Deben respetar la estructura dada por el ejemplo, en tamanio y dimensiones.
    - DEBE ser responsive. Se revisara mobile y tablets tanto en portrait como en landscape.
    - DEBE respetar el flow propuesto, es decir, donde y como aparecen los elementos segun los clicks del usuario.
- API (elegir una de las opciones):
    - Mock API
    - Firebase

## Flow del proyecto

- Al cargarse la pagina se visualiza el navbar, el formulario de busqueda y el footer.
- Hay un componente que simula una carga, este durara 2 segundos, y al finalizar se cargaran los todos jobs disponibles (metodo GET).
- El formulario permite filtrar la busqueda de jobs mediante los fields location, seniority o category. La busqueda realizada mostrara todos los resultados coincidentes con lo que elige el usuario. (metodo GET con filtros, recuerden que mockAPI muestra todos los resultados que coincidan con cualquiera de los filtros puestos).
- Si el usuario da click en "Clear" se deben limpiar los filtros del formulario y reiniciarse la busqueda (es decir, volveran a aparecer todos los jobs, metodo GET).
- Si el usuario da click en "Create a job" debe desaparecer la homepage dejando ver un formulario para crear jobs (metodo POST). Al volver a la home, se vera el nuevo job creado igual que los preexistentes.
- Si el usuario da click en "Details" se debera ver en pantalla unicamente el detalle del job seleccionado, tras 2 segundos de visualizar el componente de carga.
- En el detalle del job se vera informacion adicional del mismo y los botones de "Edit" y "Delete".
- Si el usuario da click en "Edit", debera aparecer debajo del detalle un formulario con los datos del job ya precargados. Al enviar el fomulario se debe actualizar este job con las modificaciones hechas (metodo PUT).
- Si el usuario da click en "Delete", debe desaparecer el detalle y en su lugar aparecer un componente de alerta preguntando si estas seguro de realizar esta accion, en conjunto con el respectivo boton de "Delete" que efectiviza la solicitud (metodo DELETE) y el de "Cancel" que devolvera al usuario a la pagina principal.
- Se les da la posibilidad de agregar datos adicionales al objeto job, pero como MINIMO debe contener lo que les damos y seran 20 objetos de minima.
- Los datos de la API seran un array de objetos que cumplan con la siguiente estructura:
```js
const jobs = [
  {
    "name": "FrontEnd Developer",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus turpis in eu mi bibendum neque. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Sagittis purus sit amet volutpat consequat mauris nunc congue. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
    "location": "United States",
    "category": "Development",
    "seniority": "Junior",
    "id": "1"
  }
];
```

## Aprobacion del TP

- Debe cumplir lo mencionado en el punto anterior
- Debe cumplir con los estandares de organizacion de proyecto que venimos trabajando:
    - index.html
    - Carpeta js
    - Carpeta css
    - Carpeta sass en donde habran subcarpetas respetando la arquitectura 7-1
    - Carpeta assets (si aplicase)
- GIT
    - Tendran su branch master en donde no puede haber mas commits manuales que el first commit.
    - Cada funcionalidad de su proyecto debe realizarse en una o mas branches de desarrollo, que al finalizarse haran merge de la misma a master.
    - Por lo tanto al finalizar su proyecto, en master se revisara el historial de commits y no debe existir mas que el first commit y los merge.
- HTML
    - Estructura semantica que pasa el validador de HTML (se revisara que no tengan errores)
    - Deben estar las etiquetas de HTML5 (header, nav, main, footer)
    - Buena nomenclatura de clases.
- CSS
    - Todo debe provenir de lo que se procesa de sass
- SASS
    - Respeta la arquitectura 7-1
    - Utiliza variables
    - Utiliza mixins
    - Utiliza anidacion
    - Utiliza mediaqueries
- JAVASCRIPT
    - Utiliza arrow functions
    - Utiliza let y const
    - Utiliza los 4 metodos de API solicitados
    - Utiliza funciones con parametros a conciencia y las reutiliza
    - Es legible (buenas practicas y estandares)
    - Aprovecha las ventajas del sugar syntax
    - Utiliza un unico idioma (o codean en espanol o codean en ingles, no pueden mezclarse)
    - No se visualizan errores en la consola
    - No hay console.logs() codeados
    - Respeta el flow
- COMENTARIOS
    - Los comentarios han de ser usados a conciencia, no en exceso. Si algo debe ser explicado, es que hay una mejor solucion.
