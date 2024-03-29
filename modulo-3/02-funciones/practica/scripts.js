// calcularPuntaje(facil, normal, dificil)
// // Declaración
// function suma(dato1: number, dato2: number) {
//    // implementación
// }
// function obtenerUsuarios() {
//    // implementación
// }
// function obtenerUsuario(email: string) {
//    console.log(email)
//    // Como estoy recibiendo bien el email, podría buscarlo sin problemas
// }
// function calcularPuntaje(messi: number, diaz: number, ronaldo: number, neymar: any) {
//    // implementación
//    console.log(ronaldo, diaz, neymar, messi) // 2 7 1 -
// }
// const bart = 2;
// const lisa = 1;
// const homero = 7;
// let maggie;
// Invocación
// calcularPuntaje(3, 4, 50);
// calcularPuntaje(2, 6, 9);
// calcularPuntaje(0, 1, 2);
// calcularPuntaje(facil, dificil, normal);
// calcularPuntaje(lisa, homero, bart, maggie);
// calcularPuntaje(facil /* 2 */, normal /* 1 */, dificil /* 7 */);
// calcularPuntaje(normal /* 1 */, dificil /* 7 */, facil /* 2 */);
// let miEmail;
// obtenerUsuario(miEmail);
// calcularPuntaje(facil, normal, dificil)
// Crear una función calcularPuntaje que calcule el puntaje de un examen que consiste
// en ejercicios de distinto nivel. Debe tomar como argumento tres valores que consisten en la
// cantidad de ejercicios resueltos en cada nivel y devolver un número con el puntaje
// correspondiente. El puntaje se calcula de la siguiente forma:
// facil: 3 puntos
// normal: 5 puntos
// dificil: 10 puntos
// function calcularPuntaje(param1: number, param2: number, param3: number) {
// }
// Datos del examen
var calcularPuntaje = function (param1, param2, param3) {
  return param1 * 3 + param2 * 5 + param3 * 10;
};
var facil = 3; // respuestas correctas
var normal = 2; // respuestas correctas
var dificil = 4; // respuestas correctas
var rta1 = calcularPuntaje(facil, normal, dificil); // 3*3 + 2*5 + 4+10 = 59
var rta2 = calcularPuntaje(4, 4, 4); // 4*3 + 4*5 + 4*10 = 72
var rta3 = calcularPuntaje(6, normal, dificil); // 6*3 + 2*5 + 4*10 = 68
var rta4 = calcularPuntaje(dificil, normal, facil); // 4*3 + 2*5 + 3*10 = 52
console.log(rta1, rta2, rta3, rta4);
/************************ */
// Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b
// que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un
// string con un mensaje avisando qué jugada ganó (o si hubo empate)
var jugarPiedraPapelTijera = function (a, b) {
  if (
    (a === "tijera" && b === "piedra") ||
    (b === "tijera" && a === "piedra")
  ) {
    return "¡Ganó piedra!";
  } else if (
    (a === "papel" && b === "piedra") ||
    (b === "papel" && a === "piedra")
  ) {
    return "¡Ganó papel!";
  } else if (
    (a === "tijera" && b === "papel") ||
    (b === "tijera" && a === "papel")
  ) {
    return "¡Ganó tijera";
  }
  return "¡Empate!";
};
console.log(
  jugarPiedraPapelTijera("tijera", "piedra"), // ¡Ganó piedra!
  jugarPiedraPapelTijera("piedra", "tijera"), // ¡Ganó piedra!
  jugarPiedraPapelTijera("papel", "piedra"), // ¡Ganó papel!
  jugarPiedraPapelTijera("piedra", "papel"), // ¡Ganó papel!
  jugarPiedraPapelTijera("papel", "tijera"), // ¡Ganó tijera!
  jugarPiedraPapelTijera("tijera", "papel"), // ¡Ganó tijera!
  jugarPiedraPapelTijera("piedra", "piedra"), // ¡Empate!
  jugarPiedraPapelTijera("papel", "papel"), // ¡Empate!
  jugarPiedraPapelTijera("tijera", "tijera")
); // ¡Empate!
// esHoraValida(hora)
// Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y
// determine si es una hora válida del día o no
var esHoraValida = function (hora) {
  var h = hora.slice(0, 2);
  var m = hora.slice(3, 5);
  console.log(h, m);
};
// esHoraValida('12:23') // true
// esHoraValida('12:65') // false
// esHoraValida('28:05') // false
// esHoraValida('00:00') // true
/**
 *
 *
 */
var opciones = ["cara", "cruz"];
var fin = "salir";
var acertadas = 0;
var max = 0;
var juego = function () {
  var eleccion;
  while (eleccion !== fin) {
    var random = Math.floor(Math.random() * opciones.length);
    var resultado = opciones[random];
    eleccion = prompt(
      "Ingrese (" +
        resultado +
        ") cara o cruz. Para terminar el juego ingrese " +
        fin +
        "."
    );
    if (eleccion === "salir") break;
    if (eleccion === resultado) {
      acertadas++;
      if (acertadas > max) {
        max = acertadas;
      }
      alert("Ha ganado! Lleva " + acertadas + " rondas acertadas.");
    } else {
      acertadas = 0;
      alert("Mala suerte! vuelva a empezar x_x");
    }
  }
  alert(
    "Gracias por jugar! Su record fueron " + max + " rondas seguidas acertadas."
  );
};
// juego();
/**
 *
 */
var sonIguales = function (a, b) {
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};
console.log(sonIguales([5, 5, 2, 6], [5, 5, 2, 6]));
console.log(sonIguales([6, 6, 6, 6], [6, 7, 6, 6]));
console.log(sonIguales([6, 6, 6, 6, 6], [6, 6, 6, 6]));
