var numeros = Array(1, 2, 3, 4);
var personas = ["Adrián", "Hannah", "Mati", "melisa"];
personas[0] = "Ezequiel";
personas[4] = "Adrian";
// console.log(personas.length);
var last = personas.length;
personas[last] = "Agostina";
/**
 *
 */
var cargarNombre = function () {
    var continuar = confirm("Desea ingresar un nuevo nombre?");
    if (continuar) {
        var nom = prompt("Ingresar nombre:");
        misPersonas[misPersonas.length] = nom;
        cargarNombre();
    }
    else {
        console.log(misPersonas);
    }
};
var misPersonas = Array();
cargarNombre();
