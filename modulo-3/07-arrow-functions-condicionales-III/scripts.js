function suma1(a, b) {
    return a + b;
}
var suma2 = function (a, b) { return a + b; };
console.log(suma1(4, 5));
console.log(suma2(4, 5));
// function saludar1(nombre) {
//   return "Hola " + nombre;
// }
// const saludar2 = nombre => "Hola " + nombre;
// console.log(saludar1("Adrián"))
// console.log(saludar2("Adrián"))
/**
 * Operador ternario
 */
// const day: number = 3;
// let rta;
// if(day > 5) {
//   rta = "El dia es mayor a 5"
// } else {
//   rta = "El dia es menor o igual 5"
// }
// const rta = day > 5 || day < 2 ? "No esta entre 2 y 5" : "Si esta entre 2 y 5"
// console.log(rta);
/**
 * Switch
 */
// if(day === 1) {
//   console.log("Hoy es lunes")
// } else if(day === 2) {
//   console.log("Hoy es martes")
// } else if(day === 3) {
//   console.log("Hoy es miercoles")
// } else if(day === 4) {
//   console.log("Hoy es jueves")
// } else if(day === 5) {
//   console.log("Hoy es viernes")
// } else if(day === 6) {
//   console.log("Hoy es sabado")
// } else if(day === 7) {
//   console.log("Hoy es domingo")
// }
var day = 20;
switch (day) {
    case 1:
        console.log("Hoy es lunes");
        break;
    case 2:
        console.log("Hoy es martes");
        break;
    case 3:
        console.log("Hoy es miercoles");
        break;
    case 4:
        console.log("Hoy es jueves");
        break;
    case 5:
        console.log("Hoy es viernes");
        break;
    case 6:
        console.log("Hoy es sabado");
        break;
    case 7:
        console.log("Hoy es domingo");
        break;
    default: console.log("No existe un dia para ese número");
}
// switch(day) {
//   case 1 : 
//   case 2 :
//   case 3 : 
//   case 4 : 
//   case 5 : console.log("Dia laboral"); break;
//   case 6 :
//   case 7 : console.log("Dia no laboral"); break;
//   default: console.log("No existe un dia para ese número");
// }
var nombre = "Adrián";
switch (nombre) {
    case "Mati":
        console.log("Coordinador de programas");
        break;
    case "Hannah":
        console.log("Ayudante Frontend");
        break;
    case "Adrián":
        console.log("Profesor Frontend");
        break;
    case "Melisa":
        console.log("Adminitración");
        break;
    default: console.log("No existe un dia para ese número");
}
var role = "Profesor";
var render = function (r) {
    switch (r) {
        case "Adminstrador":
            console.log('código');
            return "<ul>...</ul>";
        case "Profesor": /* code  */
            ;
            break;
        case "Ayudante": /* code  */
            ;
            break;
        case "Coordinador": /* code  */
            ;
            break;
        default: break;
    }
};
render(role);
