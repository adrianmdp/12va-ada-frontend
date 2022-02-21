// Valores que devuelven false
// false -> false, undefined, null, 0

//Ejemplos
var number = 10;

number = 4;

// if (number) {
//   console.log(
//     "Esto da true xq number no tiene ninugn valor que devuelva false"
//   );
// }

// number = 0;
// if (number) {
//   console.log("Esto da false xq number tiene un valor que devuelva false");
// }

// number = 4;
// if ((number = 10)) {
//   console.log(
//     "Esto da true xq en la condición asignamos el valor 10 a number, no comparamos"
//   );
// }
// if ((number = 4)) {
//   console.log(
//     "Esto da true xq en la condición asignamos el valor 10 a number, no comparamos"
//   );
// }

// if (number == 10) {
//   console.log(
//     "Esto da false xq estamos comparando number que vale 4 con el valor 10"
//   );
// }
// if (number == 4) {
//   console.log(
//     "Esto da true xq estamos comparando number que vale 4 con el valor 4"
//   );
// }

// if (number == "4") {
//   console.log(
//     "Esto da true xq la comparación de valores con == no revisa tipos"
//   );
// }
// if (number === "4") {
//   console.log(
//     "Esto da false xq la comparación de valores con === revisa tipos además de valores."
//   );
// }

// if (number > 3) {
//   console.log("Esto va a dar true xq el 4 es mayor a 3");
// }

// if (number < 3) {
//   console.log("Esto va a dar false xq el 4 es mayor a 3");
// }
// if (number <= 4) {
//   console.log("Esto va a dar true xq 4 esta dentro de la compración");
// }
// if (number >= 4) {
//   console.log("Esto va a dar true xq 4 esta dentro de la compración");
// }

// if (number != 4) {
//   console.log(
//     "Esto va a dar false xq number es 4, por lo tanto no es diferente."
//   );
// }
// if (number != 10) {
//   console.log("Esto va a dar true xq number es 4, por lo tanto es diferente.");
// }
// if (number != "4") {
//   console.log(
//     "Esto va a dar false xq 4 no es distito de '4' cuando no se contempla el tipo"
//   );
// }

// if(number != "6") {
//    console.log(
//       "Esto va a dar true xq 4 es distinto de '6'"
//    )
// }

// if(number !== 4) {
//    console.log("Esto va a dar false xq 4 no es distinto de 4");
// }

// 4 == "4" // valen igual? SI - son del mismo tipo? No nos importa -> true
// 4 === "4" // valen igual? SI - son del mismo tipo? No -> false
// 4 !== "4" // Valen igual? Si - son del mismo tipo? No -> !false -> true

// if (number !== "4") {
//   console.log("Esto va a dar true ");
// }

var edad = 20;
// console.log(true);
// console.log(false);
// console.log(!true);
// console.log(!false);
// console.log(edad == 20); // true
// console.log(edad == 18); // false
// console.log(edad != 20); // false
// console.log(edad != 18); // true
// console.log(edad == "20"); // true
// console.log(edad == "18"); // false
// console.log(edad === 20); // true
// console.log(edad === 18); // false
// console.log(edad === "20"); // false
// console.log(edad === "18"); // false
// console.log(edad !== 20); // false
// console.log(edad !== 18); // true
// console.log(edad !== "20"); // true
// console.log(edad !== "18"); // true
// var num = "4";
// console.log(20 + num); // 204
// console.log(20 - num); // 16
// console.log(num); // 4
// console.log(!num); // false
// num = 0;
// console.log(num); // 0
// console.log(!num); // true
// console.log(!!num); // false

// var saludo = "Hola Mundo";
// console.log(saludo);
// saludo = !!saludo;
// console.log(saludo);

// var value = 12321;
// value = !!value;

// console.log(value);

// edad = 30;
// if (edad > 21) {
//   console.log("Edad es mayo que 21");
// } else {
//   console.log("Edad no es mayor que 21");
// }

// edad = 40;
// if (edad === 10) {
//   console.log("La persona tiene 10 años");
// } else if (edad === 20) {
//   console.log("La persona tiene 20 años");
// } else if (edad !== 40) {
//   console.log("La persona no tiene 40 años");
// } else {
//   console.log("La persona no tiene ni 10, ni 20, ni 30 años.");
// }

// if (condicion) {
//   // Pasa esto si condición es true
// } else if (condicion2) {
//   // pasa esto si condicion es false y condicion2 es true
// } else if (condicion3) {
//   // pasa esto si condicion y condicion2 son false y condicion3 es true
// } else {
//   // Pasa esto si condición, condicion2 y condicion3 son false
// }

// if (condicion) {
//   // Pasa esto si condición es true
// } else if (condicion2) {
//   // pasa esto si condicion es false y condicion2 es true
// } else if (condicion3) {
//   // pasa esto si condicion y condicion2 son false y condicion3 es true
// }

/**
 * Return temprano
 */

// function sumaEsMayorQueCero(a, b) {
//   if (a + b > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function sumaEsMayorQueCero(a, b) {
//   if (a + b > 0) {
//     return true;
//   }
//   return false;
// }
// function sumaEsMayorQueCero(a, b) {
//   if (a + b > 0) {
//     return true;
//   }
//   return false;
// }

// function sumaEsMayorQueCero(a, b) {
//   return a + b > 0;
// }

// function fx() {
//   return "";
// }

// if (fx()) {
//   console.log("Fx devolvió true");
// } else {
//   console.log("Fx devolvió false");
// }

// function sumaEsMayorQueCero(a, b) {
//   if (a + b > 0) {
//     return;
//   }
//   return;
// }

// const rta = sumaEsMayorQueCero(10, -12);

// console.log(rta);

// function saludarSiEsPedro(nombre) {
//   let mje;
//   if (nombre !== "Pedro") {
//     mje = "Como se llama " + nombre + " no lo saludamos";
//   } else {
//     mje = "Hola " + nombre;
//   }
//   return mje;
// }

// function saludarSiEsPedro(nombre) {
//   if (nombre !== "Pedro") {
//     return "Como se llama " + nombre + " no lo saludamos";
//   }

//   return "Hola " + nombre;
// }

// const rta = saludarSiEsPedro("Pedro");

// console.log(rta);
