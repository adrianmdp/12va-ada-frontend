// Crear una función hayBloqueHorizontal que tome como argumento un array 2d matriz
// y devuelva true si dicha matriz tiene un bloque vertical de 3 o más ítems
// consecutivos idénticos, o false si no tiene.
var tieneBloqueVertical = function (array) {
    for (var a in array) {
        var i = parseInt(a);
        if (array.length <= i + 2)
            return false;
        for (var b in array[i]) {
            var j = parseInt(b);
            if (array[i][j] === array[i + 1][j] && array[i][j] === array[i + 2][j]) {
                return i + " - " + j;
            }
        }
    }
    return false;
};
var rta1 = tieneBloqueVertical([
    [4, 4, 8, 4],
    [1, 2, 2, 6],
    [5, 2, 2, 2],
    [1, 4, 4, 3],
    [5, 3, 5, 3],
    [2, 4, 8, 3],
    [1, 2, 9, 6],
    [1, 1, 3, 4],
    [7, 2, 9, 2],
    [1, 8, 4, 5],
    [5, 2, 2, 2],
    [1, 4, 4, 3],
    [5, 3, 5, 2], // i = 12
    // j 0  1  2  3
]); // true
var rta2 = tieneBloqueVertical([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
]); // true
var rta3 = tieneBloqueVertical([
    [1, 2, 3, 4],
    [7, 2, 9, 2],
    [1, 8, 4, 5],
]); // false
console.log(rta1);
console.log(rta2);
console.log(rta3);
