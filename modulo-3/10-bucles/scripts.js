/*
- Bucles e iteraciones
- Bucles `for`
- Bucle `while`
- Bucle `do...while`
- Condiciones de salida
- `for...of` y `for...in`
*/
var vueltas = 5;
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
var i = 10;
// for (let i = 20; i > 0; i--) {
//   console.log(`Faltan ${i - 1} vueltas`);
// }
// console.log("Fin");
var personas = [
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
for (var _i = 0, personas_1 = personas; _i < personas_1.length; _i++) {
    var dato = personas_1[_i];
    //   console.log(`${dato} esta en la posición`);
    switch (dato) {
        case "Adrián":
            console.log(dato + " Vive en Mar del Plata");
            break;
        case "Hannah":
            console.log(dato + " Vive en Bs As");
            break;
        case "Mati":
            console.log(dato + " Vive en Bs As");
            break;
        default:
            console.log(dato + " No sabemos donde vive");
    }
}
/** For in */
// for (let i in personas) {
//   console.log(`${personas[i]} esta en la posición ${parseInt(i) + 1}`);
// }
