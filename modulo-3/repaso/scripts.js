var a = 0;
var b = 5;
var edad = 20;
// Code...
edad = 21;
// console.log(edad == 21); // es igual a 21?
// console.log(edad > 20); // es mayor que 22?
// console.log(edad < 22); // es menor que 21?
// console.log(edad <= 20); // es menor o igual a 22?
// console.log(edad >= 20); // es mayor o igual a 22?
// console.log(edad != 21); // es distinto a 22?
// console.log(edad === '21'); // es igual y del mismo tipo?
// console.log(edad !== '22'); // es distitno y del mismo tipo?
var num;
var cadena;
var bool; // fasle o true
var num2 = 123;
var cadena2 = "Hola Mundo!";
var bool2 = false; // o true
// coleccion de autos, no deberia poder meter dentro, personas
/**
 * Funciones
 */
function myFunction() { }
var getIngresos = function (cta) {
    // Va a la base de datos y trae los movimientos positivos.
    return 20000;
};
var getEgresos = function (cta) {
    // Va a la base de datos y trae los movimientos negativos.
    return 2563;
};
var calcularSaldo = function (cta) {
    var ingresos = getIngresos(cta);
    var egresos = getEgresos(cta);
    var saldo = ingresos - egresos;
    return saldo;
    // implementacion
};
/**
 *
 */
var value1 = 10;
var value2 = 20;
var value3 = 30;
var value4 = 40;
var suma = function (value1, value2) {
    console.log(value1, value2); // 20 y 10
    return value1 + value2;
};
// const resp = suma(value2, value1);
// console.log(resp); // 30
// const resp1 = suma(value1, value3);
// const resp2 = suma(value2, value4);
// console.log(resp1);
// console.log(resp2);
// console.log(value1)
calcularSaldo("ASR123");
calcularSaldo("ARR341");
// calcularSaldo('ETR351');
var saldo = 2000;
/**
 *
 */
// if(/* Condición */) { // Las condiciones devuelven boolean
//   // código que debe ejecutarse en caso de que la condición se cumpla
// }
var date = new Date();
var texto = "Hola mundo";
// if (date.getDay() === 3) {
//   console.log("Hoy es día miercoles");
// }
// if (date.getDay() === 4) {
//   console.log("Hoy es día jueves");
// }
var nota = 5;
// if (nota < 6) {
//   console.log("Desaprobado");
// } else if (nota < 8) {
//   console.log("aprobado");
// } else {
//   console.log("Promocionado");
// }
// if(nota < 6) {
//   console.log("desaprobado");
// }
// if(nota >= 6 && nota <= 7) {
//   console.log("Aprobado");
// }
// if(nota >= 8) {
//   console.log("Promocionado");
// }
// console.log(4 == "4"); // No tiene en cuenta el tipo de dato
// console.log(4 === "4");
// console.log(4 === parseInt("4"));
// nota == 4;
// nota === 4;
// nota != 4;
// nota !== 4;
// nota > 4;
// nota < 4;
// nota >= 4;
// nota <= 4;
// nota <= 4 && nota >= 8;
// nota >= 8 || nota <= 4;
var fecha = "14/04";
// switch(fecha) {
//   case "01/01" : 
//     console.log("Hoy es año nuevo");
//     break;
//   case "14/04" :
//   case "15/04" :
//   case "16/04" :
//   case "17/04" :
//     console.log("Estamos en semana santa");
//     break;
//   case "01/05" :
//     console.log("Hoy es el dia del trabajador");
//     break;
//   case "25/12" : 
//     console.log("Hoy es navidad");
//     break;
//   default:
//     console.log("Esta fecha no tiene eventos");
// }
/**
 *
 */
var notas = [8, 2, 7, 10, 6, 5, 9]; // 7 elementos
// console.log(notas[4]);
notas[4] = 123;
// console.log(notas)
var contador = 3;
// while(notas.length > contador) {
//   console.log(notas[contador] + 3); // 13, 126, 8, 12
//   contador = contador + 1;
// }
// for(let i = 0; notas.length > i; i++) {
//   console.log(notas[i] + 3);
// }
// for(const nota of notas) {
//   console.log(nota + 3);
// }
// for(const i in notas) {
//   console.log(i, ' - ', notas[i]);
// }
// [8, 2, 7, 10, 123, 5, 9]
notas[2] = ["a", "b", "c"];
// for(const i in notas) {
//   console.log(i, ' - ', notas[i]);
// }
console.log(notas[2][1]);
// Este código se ejecuta siempre sin importar la condición del if
