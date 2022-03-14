/**
 * EJ 1
 */
// Función anónima
(function () {
    return 'Hola mundo';
});
var miFuncion = function (callback) {
    callback();
};
var saludo = 'hola';
// miFuncion(() => {
//    if(saludo === 'hola') {
//       console.log(saludo + ', ¿Cómo estás?')
//    } else {
//       return null
//    }
// })
/**
 * EJ 2
 */
var edades = [10, 30, 23, 7, 19, 4, 3, 45, 12, 42];
var map = function (values, callback) {
    var rta = [];
    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
        var value = values_1[_i];
        var dev = callback(value);
        if (dev) {
            rta.push(dev);
        }
    }
    return rta;
};
map(edades, function (v) {
    if (v >= 18) {
        return v;
    }
    return null;
});
/**
 * SetTimeout y setInterval
 */
setTimeout(function () {
    // Código que se ejecuta luego de que se cumpla el timeout
}, 5000 /* timeout */);
// const time = 5;
// let br = 0
// const id = setInterval(() => {
//    if(br >= time) clearInterval(id)
//    console.log("Hola");
//    br++;
// }, 1000)
var id = setInterval(function () {
    console.log("Hola");
}, 1000);
setTimeout(function () {
    clearInterval(id);
}, 5000);
console.log("Fin de código");
