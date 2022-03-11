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
var generarGrilla = function (fila, columna, array) {
    var rta = [];
    // fila = 8
    // columna = 6
    // i = 0
    // j = 0
    for (var i = 0; i < fila; i++) {
        rta[i] = [];
        for (var j = 0; j < columna; j++) {
            // Esta linea me da un numero aleatorio entre 0 y la 
            // cantidad de elementos que tiene array
            var randomValue = Math.random() * array.length;
            var valueRounded = Math.floor(randomValue);
            var indiceAleatorio = valueRounded;
            rta[i].push(array[indiceAleatorio]);
            0 < -- -  > 1;
            0.9812789010293;
        }
    }
    return rta;
};
var rta1 = generarGrilla(3, 4, [1, 2, 99, 88, 3, 7]); /*
  [
    [1, 1, 2],
    [2, 1, 1]
  ]
*/
var rta2 = generarGrilla(4, 10, ['a', 'b', 'c']); /*
  [
    ['c', 'c', 'a'],
    ['c', 'a', 'a'],
    ['b', 'a', 'b']
  ]
*/
console.log(rta1);
console.log(rta2);
valor;
que;
defina;
la;
cantidad;
de;
filas = 6;
valor;
que;
defina;
la;
cantidad;
de;
columnas = 2;
un;
array;
con;
valores;
para;
generar;
la;
grilla = [8, 5];
