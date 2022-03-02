const arrayVacio = Array();
const arrayVacio2 = [];

const numeros: number[] = Array(1, 2, 3, 4);
const personas: string[] = [
  "Adrián",
  "Hannah",
  "Mati",
  "melisa",
  "asasd",
  "asas",
];

personas[0] = "Ezequiel";
personas[4] = "Adrian";

// console.log(personas.length);

// con .length podemos contar la cantidad de datos
// del array y agregar un dato al final.
const last = personas.length;
personas[last] = "Agostina";

/**
 *
 */
const cargarNombre = () => {
  const continuar = confirm("Desea ingresar un nuevo nombre?");

  if (continuar) {
    const nom = prompt("Ingresar nombre:");

    const cant = misPersonas.length;

    misPersonas[cant] = nom;

    cargarNombre();
  } else {
    console.log(misPersonas);
  }
};

const misPersonas: string[] = Array();

// cargarNombre();

/**
 * Funciones nativas de arrays
 */
const personaExiste = personas.includes("Hannah");
console.log(
  personaExiste ? "Hannah existe en el array" : "Hannah no existe en el array"
);
personas.push("Valentina");
console.log(personas);
personas.pop();
console.log(personas);
