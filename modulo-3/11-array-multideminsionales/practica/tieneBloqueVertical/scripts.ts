// Crear una función hayBloqueHorizontal que tome como argumento un array 2d matriz
// y devuelva true si dicha matriz tiene un bloque vertical de 3 o más ítems
// consecutivos idénticos, o false si no tiene.

const tieneBloqueVertical = (array: number[][]) => {
  for (const a in array) {
    const i = parseInt(a);
    if (array.length <= i + 2) return false;
    
    for (const b in array[i]) {
      const j = parseInt(b);
      if (array[i][j] === array[i + 1][j] && array[i][j] === array[i + 2][j]) {
        return `${i} - ${j}`;
      }
    }
  }
  return false;
};

const rta1 = tieneBloqueVertical([
    [4, 4, 8, 4], // i = 0
    [1, 2, 2, 6], // i = 1
    [5, 2, 2, 2], // i = 2
    [1, 4, 4, 3], // i = 3
    [5, 3, 5, 3], // i = 4
    [2, 4, 8, 3], // i = 5
    [1, 2, 9, 6], // i = 6
    [1, 1, 3, 4], // i = 7
    [7, 2, 9, 2], // i = 8
    [1, 8, 4, 5], // i = 9
    [5, 2, 2, 2], // i = 10
    [1, 4, 4, 3], // i = 11
    [5, 3, 5, 2], // i = 12
// j 0  1  2  3
]); // true

const rta2 = tieneBloqueVertical([
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
]); // true

const rta3 = tieneBloqueVertical([
  [1, 2, 3, 4],
  [7, 2, 9, 2],
  [1, 8, 4, 5],
]); // false

console.log(rta1);
console.log(rta2);
console.log(rta3);
