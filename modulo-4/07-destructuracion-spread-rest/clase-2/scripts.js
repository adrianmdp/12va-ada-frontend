var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var personaje = {
    id: 0,
    name: "Tobus Quickwhistle",
    thumbnail: "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
    age: 306,
    weight: 39.065952,
    height: 107.75835,
    hair_color: "Pink",
    boss: {
        name: "Lorem",
        email: "boss@ada.com"
    },
    professions: [
        "Metalworker",
        "Woodcarver",
        "Stonecarver",
        " Tinker",
        "Tailor",
        "Potter",
    ],
    friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"]
};
// const age = personaje.age
// const name = personaje.name
// const professions = personaje.professions
var age = 10;
var pAge = personaje.age, name = personaje.name, professions = personaje.professions, _a = personaje.boss, email = _a.email, bName = _a.name;
// console.log(email, bName, name);
// const obj1 = {
//     name: "Adrian",
//     email: "adrian@ada.com"
// }
// const obj2 = obj1
// obj2.name = "Hannah"
// const obj3 = {
//     name: obj1.name,
//     email: obj1.email
// }
// obj3.name = "Sofi"
// const obj4 = { ...obj1 }
// obj4.name = "Mati"
// console.log(obj2, obj1, obj3, obj4);
var persona = {
    id: 123,
    name: "Adrián",
    lastname: "Solimano",
    email: "adrian@email.com",
    salario: 10000
};
var loc = {
    name: "Mar del Plata",
    long: "123123",
    lat: "321321",
    zip: "7600"
};
var boss = {
    id: 8,
    name: "Hannah",
    lastname: "Lopez",
    email: "hannah@ada.com"
};
var resumen = __assign(__assign(__assign(__assign({}, loc), boss), persona), { boss: boss.name, city: loc.name });
var resumen2 = {
    persona: __assign(__assign({}, persona), { children: [
            {
                name: "Agostina",
                birthdate: new Date("2017-06-29")
            },
            {
                name: "Valentina",
                birthdate: new Date("2012-09-12")
            },
            {
                name: "Mailen",
                birthdate: new Date("2005-06-16")
            }
        ], role: 'employee', intereses: 12 }),
    location: __assign({}, loc),
    boss: __assign(__assign({}, boss), { role: 'admin' })
};
// ¿Obtener la fecha de nacimiento de Agostina?
console.log(resumen2.persona.children[1].name);
var children = resumen2.persona.children.find(function (children) { return children.name === "Valentina"; });
console.log(children.birthdate);
var saldo = 10000;
// const resumen = {
//     name: persona.name,
//     lastname: persona.lastname,
//     email: persona.email,
//     saldo: saldo
// }
console.log(resumen2);
var mostrarFicha = function (_a) {
    var name = _a.name, thumbnail = _a.thumbnail, rest = __rest(_a, ["name", "thumbnail"]);
    var card = document.createElement('div');
    card.classList.add('card');
    var img = document.createElement('img');
    img.src = thumbnail;
    img.classList.add('image');
    var h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode(name));
    var ul = document.createElement('ul');
    for (var prop in rest) {
        var li = document.createElement('li');
        var texto = document.createTextNode("".concat(prop, ": ").concat(rest[prop]));
        li.appendChild(texto);
        ul.appendChild(li);
    }
    // let li = document.createElement('li');
    // const texto = document.createTextNode(hair_color);
    // li.appendChild(texto);
    // ul.appendChild(li);
    // li = document.createElement('li');
    // li.appendChild(document.createTextNode(age.toString()));
    // ul.appendChild(li)
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(ul);
    document.body.appendChild(card);
};
mostrarFicha(personaje);
var id = persona.id, rest = __rest(persona, ["id"]); // Rest
var nuevaPersona = __assign(__assign({}, persona), { nuevoDato: "Este es un dato que no tenía la persona" }); // Spread
