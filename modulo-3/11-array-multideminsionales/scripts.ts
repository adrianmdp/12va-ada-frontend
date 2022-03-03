const array3a = [1, 2, 3, 4]; // k-0, k-1, k-2
const array3b = [9, 5, 6, 7]; // k-0, k-1, k-2
const array3c = [1, 3, 22, 8]; // k-0, k-1, k-2

const array2a = [array3a, array3b, array3c]; // j-0, j-1, j-2
const array2b = [array3c]; // j-0
const array2c = [array3a, array3c]; // j-0, j-1

const array1 = [array2a, array2b, array2c]; // i-0, i-1, i-2

console.log(array1[0][2][2]);
console.log(array1[1][0][2]);
console.log(array1[2][1][2]);

// console.log(array1);
// console.log("---------------------------------------------------");

// // console.log(array1);
// for (const i in array1) {
//   //   console.log(array1[i]);

//   // array2a
//   // array2b
//   // array2c
//   for (const j in array1[i]) {
//     //  console.log(array1[i][j]);
//     // array3a
//     // array3b
//     // array3c
//     for (const k in array1[i][j]) {
//       if (array1[i][j][k] > 4) {
//         console.log(array1[i][j][k]);
//       }
//     }
//   }
// }

// array2a
// array2b
// array2c
// array2a
// array2a
// array2b

// array3a
// array3b
// array3c
// array3a
// array3a
// array3c
