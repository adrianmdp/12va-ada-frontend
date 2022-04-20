var persona = {
    nombre: "Adrián",
    apellido: "Solimano",
    dni: "30195598",
    fecha_nacimiento: new Date('1983-04-13'),
    es_admin: false,
    saldo: 2000,
    direccion: ""
};
var persona2 = {
    nombre: "Hannah",
    apellido: "",
    dni: "12312312",
    fecha_nacimiento: new Date('2000-04-13'),
    es_admin: true
};
var unaFuncion = function (value) {
    console.log(value);
};
// unaFuncion(persona);
var personas = [];
personas.push(persona);
personas.push(persona2);
// map, filter, find, some, every
// console.log(inhabitants);
var rta = inhabitants.map(function (inhabitant) {
    if (inhabitant.name.includes('ket')) {
        return inhabitant;
    }
});
// console.log(rta);
var rta2 = inhabitants.filter(function (inhabitant) {
    return inhabitant.name.includes('ket');
});
// console.log(rta2);
var rta3 = inhabitants.find(function (inhabitant) {
    return inhabitant.name.includes('ket');
});
// console.log(rta3);
var rta4 = inhabitants.some(function (inhabitant) {
    return inhabitant.id === 241;
});
// console.log(rta4);
var rta5 = inhabitants.every(function (inhabitant) {
    return inhabitant.thumbnail.includes('http');
});
console.log(rta5);
