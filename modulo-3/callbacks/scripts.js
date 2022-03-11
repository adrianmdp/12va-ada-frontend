var devolverPrecioFinal = function (precios, callback) {
    var rta = [];
    for (var _i = 0, precios_1 = precios; _i < precios_1.length; _i++) {
        var value = precios_1[_i];
        rta.push(callback(value));
    }
    return rta;
};
var preciosFinales = devolverPrecioFinal([3, 4, 5, 6, 10, 33], function (num) {
    return num * 1.21;
});
console.log(preciosFinales);
// [3, 4, 5, 6]
