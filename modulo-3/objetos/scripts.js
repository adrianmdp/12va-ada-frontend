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
// const respuesta = map(inhabitants, (inhabitant: Inhabitant) => {
//    if(inhabitant.age < 200) {
//       return inhabitant
//    }
//    return null
// })
var respuesta = map(inhabitants, function (inhabitant) {
    inhabitant.friends.push("Hannah");
    return inhabitant;
});
console.log(respuesta);
