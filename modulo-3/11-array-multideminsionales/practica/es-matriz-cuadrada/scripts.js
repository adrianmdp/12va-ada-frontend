// const esMatrizCuadrada = (matriz) => {
//    const qtyVerticalElements = matriz.length; // 4
//    const qtyHorizontalElements = matriz[0].length; // 4
//    return qtyHorizontalElements === qtyVerticalElements // boolean
// }
var esMatrizCuadrada = function (matriz) {
    // console.log('cantidad de bolsitas:', verticalQty);
    for (var i in matriz) {
        // console.log('bolsita: ', matriz[i], 'cantidad en la bolsita: ', matriz[i].length);
        if (matriz[i].length !== matriz.length)
            return false; // 3 !== 4
    }
    return true;
};
var rta1 = esMatrizCuadrada([
    [1, 2, 3],
    [1, 23, 3],
    [1, 24, 3], // Bolsita 3 - i = 2 
]); // true
console.log(rta1);
console.log('-----');
var rta2 = esMatrizCuadrada([
    [1, 2, 3, 4, 4],
    [7, 2, 9, 2, 4, 5],
    [1, 8, 4, 5, 4],
    [1, 8, 4, 5, 4],
    [1, 8, 4, 5, 4],
]); // false
console.log(rta2);
var miFuncion = function () {
    var a = 4;
    if (a === 4)
        return true;
    var b = a * 4;
    return b;
};
