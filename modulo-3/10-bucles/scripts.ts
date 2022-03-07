/*
- Bucles e iteraciones
- Bucles `for`
- Bucle `while`
- Bucle `do...while`
- Condiciones de salida
- `for...of` y `for...in`
*/

let vueltas = 5;

/** While */
// while (vueltas > 0) {
//   console.log(`Estoy dentro del while, faltan ${vueltas - 1} vueltas`);
//   vueltas = vueltas - 1;
// }

// console.log("Fin");

vueltas = 5;

/** do While */
// do {
//   console.log(`Estoy dentro del do while, faltan ${vueltas - 1} vueltas`);
//   vueltas = vueltas - 1;
// } while (vueltas > 0);

// console.log("Fin");

/** For */

let i = 10;

// for (let i = 20; i > 0; i--) {
//   console.log(`Faltan ${i - 1} vueltas`);
// }

// console.log("Fin");

const personas: string[] = [
  "Adrián",
  "Hannah",
  "Mati",
  "Melisa",
  "Agostina",
  "Mailen",
];

// {persona} esta en la posición {posicion}

// for (let i = 0; i < personas.length; i++) {
//   console.log(`${personas[i]} esta en la posición ${i + 1}`);
// }

/** For of */
// Es una forma de recorrer arrays de una manera mas simple que el for
// for (let dato of personas) {
//   //   console.log(`${dato} esta en la posición`);

//   switch (dato) {
//     case "Adrián":
//       console.log(`${dato} Vive en Mar del Plata`);
//       break;
//     case "Hannah":
//       console.log(`${dato} Vive en Bs As`);
//       break;
//     case "Mati":
//       console.log(`${dato} Vive en Bs As`);
//       break;
//     default:
//       console.log(`${dato} No sabemos donde vive`);
//   }
// }

/** For in */
// for (let i in personas) {
//   console.log(`${personas[i]} esta en la posición ${parseInt(i) + 1}`);
// }

const producto = (valor: number, datos: number[]) => {
  for (const value of datos) {
    console.log(value * valor);
  }
};

const numeros2 = [3, 2, 6, 1];
const numeros3 = [3, 10, 2, 9, 8, 10, 5];
const numeros4 = [1, 2, 3, 4];
producto(4, numeros2);
producto(10, numeros3);
producto(5, numeros4);

// for (const index in personas2) {
//   console.log(index);
// }
