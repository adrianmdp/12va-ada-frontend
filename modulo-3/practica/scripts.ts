

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


const calcularPuntaje = (param1: number, param2: number, param3: number) => {
   return param1 * 3 + param2 * 5 + param3 * 10
}

const facil = 3; // respuestas correctas
const normal = 2; // respuestas correctas
const dificil = 4; // respuestas correctas

const rta1 = calcularPuntaje(facil, normal, dificil); // 3*3 + 2*5 + 4+10 = 59

const rta2 = calcularPuntaje(4, 4, 4); // 4*3 + 4*5 + 4*10 = 72

const rta3 = calcularPuntaje(6, normal, dificil); // 6*3 + 2*5 + 4*10 = 68

const rta4 = calcularPuntaje(dificil, normal, facil); // 4*3 + 2*5 + 3*10 = 52

console.log(rta1, rta2, rta3, rta4); 


/************************ */

// Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b 
// que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un 
// string con un mensaje avisando qué jugada ganó (o si hubo empate)

const jugarPiedraPapelTijera = (a: string, b: string) => {

   if(a === 'tijera' && b === 'piedra' || b === 'tijera' && a === 'piedra') {
      return "¡Ganó piedra!";
   } else if(a === 'papel' && b === 'piedra' || b === 'papel' && a === 'piedra') {
      return "¡Ganó papel!";
   } else if(a === 'tijera' && b === 'papel' || b === 'tijera' && a === 'papel') {
      return "¡Ganó tijera";
   } 
   return "¡Empate!";
}

console.log(
jugarPiedraPapelTijera('tijera', 'piedra'),  // ¡Ganó piedra!
jugarPiedraPapelTijera('piedra', 'tijera'),  // ¡Ganó piedra!
jugarPiedraPapelTijera('papel', 'piedra'),  // ¡Ganó papel!
jugarPiedraPapelTijera('piedra', 'papel'),   // ¡Ganó papel!
jugarPiedraPapelTijera('papel', 'tijera'),   // ¡Ganó tijera!
jugarPiedraPapelTijera('tijera', 'papel'),   // ¡Ganó tijera!
jugarPiedraPapelTijera('piedra', 'piedra'),  // ¡Empate!
jugarPiedraPapelTijera('papel', 'papel'),    // ¡Empate!
jugarPiedraPapelTijera('tijera', 'tijera'))  // ¡Empate!




// esHoraValida(hora)
// Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y 
// determine si es una hora válida del día o no

const esHoraValida = (hora: string) => {
   const h = hora.slice(0, 2);
   const m = hora.slice(3, 5);

   console.log(h, m);

}

esHoraValida('12:23') // true
esHoraValida('12:65') // false
esHoraValida('28:05') // false
esHoraValida('00:00') // true