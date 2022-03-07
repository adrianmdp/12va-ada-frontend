// sumar(matriz)
// Crear una función sumar que tome como argumento un array 2d de números matriz y
// devuelva la suma de todos los número de dicha matriz.

const sumar = (array: number[][][]) => {
  let suma: number = 0;

  //   console.log(array);

  // for (const value of array) {
  //   for (const subValue of value) {
  //     suma = suma + subValue;
  //   }
  // }

  // for (const i in array) {
  //   for (const j in array[i]) {
  //     suma = suma + array[i][j];
  //   }
  // }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      for (let k = 0; k < array[i][j].length; k++) {
        suma = suma + array[i][j][k];
      }
    }
  }

  return suma;

  // array.length = 3;
  // array[i].length = 2;

  // i = 0;

  // j = 1;

  // array[0][0]
  // array[0][1]

  // for(let i in array) {

  // }

  // for(const value of array) {

  // }
};

const miArrayDeNumeros = [
  [4, 5],
  [2, 7, 1],
  [8, 10],
  [4, 5],
  [2, 7, 1, [3, 4, 5, 6]],
  [8, 10],
  [4, 5],
  [2, 7, 1],
  [8, 10],
];

const rta = sumar(miArrayDeNumeros); // 37

console.log(rta);
