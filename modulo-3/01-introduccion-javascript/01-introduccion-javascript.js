/**
 * - Qué es un dato
 * - Valores primitivos: strings, números, booleans
 */

var personName;

var days = 4;

var color = "Amarillo";

personName = "Hannah";

// var color = 452361; // funciona

// color = 452361; // funciona

// color = "rgb(93, 151, 25)"; // funciona

// color = 452361 // funciona



// console.log(typeof name);

// console.log(name);

// console.log(typeof color);

/**
 * - Comillas dobles y simples
 * - Template strings
 */

 var text = "Lorem ipsum " + personName;

 var text2 = 'Lorem ipsum ' + personName;

 var text3 = `Lorem ipsum ${personName}`;

 var text4 = "Lorem ipsum dolor sit amet consectetur " + (days + 7);

 var text5 = `Lorem ipsum dolor sit amet consectetur ${days + 7}`;

 console.log(text);
 console.log(text2);
 console.log(text3);
 console.log(text4);
 console.log(text5);

 /**
  * - Coerción de tipos
  */
var week = "7";

var suma = week + days; // 74

var suma2 = parseInt(week) + days; // 11

var resta = week - days; // 3



console.log(suma);
console.log(suma2);
console.log(resta);
