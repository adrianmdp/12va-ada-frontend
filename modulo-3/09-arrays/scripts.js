var arrayVacio = Array();
var arrayVacio2 = [];
var numeros = Array(1, 2, 3, 4);
var personas = [
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
var last = personas.length;
personas[last] = "Agostina";
/**
 *
 */
var cargarNombre = function () {
    var continuar = confirm("Desea ingresar un nuevo nombre?");
    if (continuar) {
        var nom = prompt("Ingresar nombre:");
        var cant = misPersonas.length;
        misPersonas[cant] = nom;
        cargarNombre();
    }
    else {
        console.log(misPersonas);
    }
};
var misPersonas = Array();
// cargarNombre();
/**
 * Funciones nativas de arrays
 */
var personaExiste = personas.includes("Hannah");
console.log(personaExiste ? "Hannah existe en el array" : "Hannah no existe en el array");
personas.push("Valentina");
console.log(personas);
personas.pop();
console.log(personas);
