var myName = "Adrián";
var myLocation = "Mar del Plata";
var myNationality = "Argentina";
// console.log(myName, myLocation, myNationality);
/* && y el || */
var variable1 = 123;
var variable2 = 321;
var myDay = new Date().getDay();
var myMonth = new Date().getMonth();
if (variable1 === variable2) {
    console.log("Las variables son iguales");
}
else {
    console.log("Las variables son diferentes");
}
if (variable1 === variable2 && myDay === 3 && myMonth === 1) {
    console.log("Se cumplieron todas condiciones");
}
else {
    console.log("No se cumplieron todas condiciones");
}
if (variable1 === variable2 || myDay === 10 || myMonth === 1) {
    console.log("Se cumplió alguna de las condiciones");
}
else {
    console.log("No se cumplieron ninguna de las condiciones");
}
// variable1 === variable2 => false
// myDay === 2 => false
// myMonth === 1 => true
// (false && false) || true => true
// false && (false || true) => false
if ((variable1 === variable2 && myDay === 2) || myMonth === 1) {
    console.log("Resultado true");
}
else {
    console.log("Resultado false");
}
/* Let, const, var */
var a = 123;
var b = 321;
// myDate = new Date("1990-01-01"); // no se puede redefinir el valor de una constante
// console.log(myDate);
if (a !== b) {
    var a = 555;
    var b_1 = 555;
}
console.log(a);
console.log(b);
