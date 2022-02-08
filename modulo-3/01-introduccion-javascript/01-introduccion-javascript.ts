/**
 * - Qué es un dato
 * - Valores primitivos: strings, números, booleans
 */

 var personName;

 var days = 4;
 
 var color: string = "Amarillo";
 
 personName = "Hannah";
 

// var color2: string = 452361; // no funciona

// color2 = 452361; // no funciona

// color2 = "rgb(93, 151, 25)"; // funciona

// color2 = 452361; // no funciona

/* Definición de tipo por inferencia */

var nombre = "Adrián";

var color4;

color4 = "Amarillo";

color4 = 123123;

/**
 * - Comillas dobles y simples
 * - Template strings
 */

var text = "Lorem ipsum 'Adrian'";
var text2 = 'Lorem ipsum "Adrian"';



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
  
