var array;
var invertirCaso = function (text) {
    array = text.split("");
    console.log(array);
    // [A, d, a,  , L, o, v, e, l, a, c, e]
    for (var i in array) {
        // console.log(i, array[i]);
        if (array[i].match(/[A-Z]/)) {
            array[i] = array[i].toLowerCase();
        }
        else {
            array[i] = array[i].toUpperCase();
        }
    }
    return array.join("");
};
var invertirCaso2 = function (text) {
    array = text.split("");
    var rta = [];
    // [A, d, a,  , L, o, v, e, l, a, c, e]
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var dato = array_1[_i];
        // console.log(i, array[i]);
        if (dato.match(/[A-Z]/)) {
            dato = dato.toLowerCase();
        }
        else {
            dato = dato.toUpperCase();
        }
        rta.push(dato);
    }
    return rta.join("");
};
var invertirCaso3 = function (text) {
    var rta = [];
    for (var i = 0; i < text.length; i++) {
        if (text[i].match(/[A-Z]/)) {
            rta[i] = text[i].toLowerCase();
        }
        else {
            rta[i] = text[i].toUpperCase();
        }
    }
    return rta.join("");
};
// const rta = invertirCaso("Ada Lovelace"); // 'aDA lOVELACE'
// const rta = invertirCaso2("felIz CumpLe"); // 'FELIZ CUMPLE'
var rta = invertirCaso3("jAvAsCrIpT"); // 'JaVaScRiPt'
console.log(rta);
// const test = "Ada Lovelace";
// console.log(test[4]);
