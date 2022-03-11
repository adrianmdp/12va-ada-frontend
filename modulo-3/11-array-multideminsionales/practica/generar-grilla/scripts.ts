// Crear una función generarGrilla que tome como argumentos un número entero filas, 
// un número entero columnas y un array de valores items, y devuelva una matriz de 
// filas filas y columnas columnas, donde cada ítem de la matriz es un ítem aleatorio 
// de items.

// [ 
//   0 - []
// ]

// [
//   0 - [ a, b ,c]
//   1 - [ a, b ,c]
//   2 - [ a, b ,c]
// ]

const generarGrilla = (fila: number, columna: number, array: number[] | string[]) => {
   const rta = [];

   // fila = 3
   // columna = 4
   // i = 1
   // j = 0
   for(let i = 0; i < fila; i++) {
      
      rta[i] = []
      
      for(let j = 0; j < columna; j++) {
         
         // Esta linea me da un numero aleatorio entre 0 y la 
         // cantidad de elementos que tiene array
         const randomValue = Math.random() * array.length; // entre 0 y 1
         const valueRounded = Math.floor(randomValue); // redondeamos hacia abajo para obtener un entero
         const indiceAleatorio = valueRounded;
         const randomElement = array[indiceAleatorio];

         rta[i].push(randomElement)

      }
   }
   return rta;
}

const rta1 = generarGrilla(3, 4, [1, 2, 99, 88, 3, 7]) /* 
  [
    [1, 1, 2], 
    [2, 1, 1]
  ]
*/

const rta2 = generarGrilla(4, 10, ['a', 'b', 'c']) /* 
  [
    ['c', 'c', 'a'], 
    ['c', 'a', 'a'], 
    ['b', 'a', 'b']
  ]
*/

console.log(rta1);
console.log(rta2);



valor que defina la cantidad de filas = 6
valor que defina la cantidad de columnas = 2
un array con valores para generar la grilla = [ 8, 5]