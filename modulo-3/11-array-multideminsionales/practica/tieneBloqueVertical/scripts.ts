// Crear una función hayBloqueHorizontal que tome como argumento un array 2d matriz
// y devuelva true si dicha matriz tiene un bloque vertical de 3 o más ítems
// consecutivos idénticos, o false si no tiene.

const tieneBloqueHorizontal = (array: number[][]) => {
  for (const i in array) {
    for (const j in array[i]) {
      if (array[0][0] === array[1][0]) {
      }
      if (array[i][j] === array[i + 1][j]) {
      }

      array[2][0] === array[3][0];

      i = 2;
      j = 0;

      array[i][j];
    }
  }
};

tieneBloqueHorizontal([(0)[(4, 2, 3)], (1)[(1, 5, 3)], (2)[(1, 2, 3)]]); // true

tieneBloqueHorizontal([
  [1, 2, 3, 4],
  [7, 2, 9, 2],
  [1, 8, 4, 5],
]); // false
