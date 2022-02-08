/**
 * Funciones js
 */

// function [nombreFuncion] () {
    // sentencias de código
// }

// function mostrarImpuesto() {
//     console.log(1.21);
// }




// function obtenerImpuesto() {
//     return 1.17;
// }

// var impuesto = obtenerImpuesto();

// console.log(impuesto);

// var impuesto = obtenerImpuesto()

// console.log(impuesto)

function obtenerComision() {
    return 1.5;
}


function calcularSueldo(empleado, datoDias, datoValor) {
    return `El empleado ${empleado} tiene un sueldo de ${datoDias * datoValor * obtenerComision()}`;
}

// calcularSueldo(4, 5);
// calcularSueldo(20, 6);
// calcularSueldo(2, 4);

var empleado1 = calcularSueldo("Adrián", 4, 5);
var empleado2 = calcularSueldo("Hannah", 20, 6);
var empleado3 = calcularSueldo("Matias", 2, 4);

console.log(empleado1)
console.log(empleado2)
console.log(empleado3)

// var a = 4; // dias trabajados
// var b = 5; // valor por dia

// var res1 = a * b * 1.2;


// var c = 20;
// var d = 6;

// var res2 = c * d * 1.1;


// var e = 2;
// var f = 4;

// var res3 = e * f * 1.2;

// console.log(res1);
// console.log(res2);
// console.log(res3);
