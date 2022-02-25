const numeros: number[] = Array(1, 2, 3, 4);
const personas: string[] = ["Adrián", "Hannah", "Mati", "melisa"];

personas[0] = "Ezequiel";
personas[4] = "Adrian";

// console.log(personas.length);

const last = personas.length;

personas[last] = "Agostina";

/**
 *
 */
const cargarNombre = () => {
  const continuar = confirm("Desea ingresar un nuevo nombre?");

  if (continuar) {
    const nom = prompt("Ingresar nombre:");

    misPersonas[misPersonas.length] = nom;

    cargarNombre();
  } else {
    console.log(misPersonas);
  }
};

const misPersonas: string[] = Array();

cargarNombre();
