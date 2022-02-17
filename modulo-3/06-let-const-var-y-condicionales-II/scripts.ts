var myName: string = "Adrián";

var myLocation: string = "Mar del Plata";

var myNationality: string = "Argentina";

// console.log(myName, myLocation, myNationality);

/* && y el || */

const variable1: number = 123;
const variable2: number = 321;
const myDay = new Date().getDay();
const myMonth = new Date().getMonth();

if (variable1 === variable2) {
  console.log("Las variables son iguales");
} else {
  console.log("Las variables son diferentes");
}

if (variable1 === variable2 && myDay === 3 && myMonth === 1) {
  console.log("Se cumplieron todas condiciones");
} else {
  console.log("No se cumplieron todas condiciones");
}

if (variable1 === variable2 || myDay === 10 || myMonth === 1) {
  console.log("Se cumplió alguna de las condiciones");
} else {
  console.log("No se cumplieron ninguna de las condiciones");
}

// variable1 === variable2 => false
// myDay === 2 => false
// myMonth === 1 => true

// (false && false) || true => true

// false && (false || true) => false

if ((variable1 === variable2 && myDay === 2) || myMonth === 1) {
  console.log("Resultado true");
} else {
  console.log("Resultado false");
}

/* Let, const, var */

var a = 123;
let b = 321;
// myDate = new Date("1990-01-01"); // no se puede redefinir el valor de una constante
// console.log(myDate);

if (a !== b) {
  var a = 555;
  let b = 555;
}

console.log(a);
console.log(b);
