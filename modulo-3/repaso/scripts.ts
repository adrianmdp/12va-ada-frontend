type Inhabitant = {
  id: number
  name: string
  thumbnail: string
  age: number
  weight: number
  height: number
  hair_color: string
  professions: string[]
  friends: string[]
}



let a = 0;
const b = 5;

let edad = 20;

// Code...

edad = 21;

// console.log(edad == 21); // es igual a 21?
// console.log(edad > 20); // es mayor que 22?
// console.log(edad < 22); // es menor que 21?
// console.log(edad <= 20); // es menor o igual a 22?
// console.log(edad >= 20); // es mayor o igual a 22?
// console.log(edad != 21); // es distinto a 22?
// console.log(edad === '21'); // es igual y del mismo tipo?
// console.log(edad !== '22'); // es distitno y del mismo tipo?

let num: number;
let cadena: string;
let bool: boolean; // fasle o true

const num2 = 123;
const cadena2 = "Hola Mundo!";
const bool2 = false; // o true

// coleccion de autos, no deberia poder meter dentro, personas

/**
 * Funciones
 */
function myFunction() {}

const getIngresos = (cta) => {
  // Va a la base de datos y trae los movimientos positivos.
  return 20000;
};

const getEgresos = (cta) => {
  // Va a la base de datos y trae los movimientos negativos.
  return 2563;
};

const calcularSaldo = (cta) => {
  const ingresos = getIngresos(cta);
  const egresos = getEgresos(cta);
  const saldo = ingresos - egresos;

  return saldo;
  // implementacion
};

/**
 *
 */
const value1 = 10;
const value2 = 20;
const value3 = 30;
const value4 = 40;

const suma = (value1?: number, value2?: number) => {
  console.log(value1, value2); // 20 y 10
  return value1 + value2;
};

// const resp = suma(value2, value1);
// console.log(resp); // 30

// const resp1 = suma(value1, value3);
// const resp2 = suma(value2, value4);

// console.log(resp1);
// console.log(resp2);

// console.log(value1)

calcularSaldo("ASR123");
calcularSaldo("ARR341");
// calcularSaldo('ETR351');

var saldo = 2000;

/**
 *
 */
// if(/* Condición */) { // Las condiciones devuelven boolean
//   // código que debe ejecutarse en caso de que la condición se cumpla
// }

const date = new Date();
const texto = "Hola mundo";

// if (date.getDay() === 3) {
//   console.log("Hoy es día miercoles");
// }

// if (date.getDay() === 4) {
//   console.log("Hoy es día jueves");
// }

const nota = 5;

// if (nota < 6) {

//   console.log("Desaprobado");

// } else if (nota < 8) {

//   console.log("aprobado");

// } else {

//   console.log("Promocionado");
  
// }

// if(nota < 6) {
//   console.log("desaprobado");
// }

// if(nota >= 6 && nota <= 7) {
//   console.log("Aprobado");
// }

// if(nota >= 8) {
//   console.log("Promocionado");
// }

// console.log(4 == "4"); // No tiene en cuenta el tipo de dato
// console.log(4 === "4");
// console.log(4 === parseInt("4"));
 

// nota == 4;
// nota === 4;
// nota != 4;
// nota !== 4;
// nota > 4;
// nota < 4;
// nota >= 4;
// nota <= 4;
// nota <= 4 && nota >= 8;
// nota >= 8 || nota <= 4;

const fecha = "14/04"

// switch(fecha) {

//   case "01/01" : 
//     console.log("Hoy es año nuevo");
//     break;
//   case "14/04" :
//   case "15/04" :
//   case "16/04" :
//   case "17/04" :
//     console.log("Estamos en semana santa");
//     break;
//   case "01/05" :
//     console.log("Hoy es el dia del trabajador");
//     break;
//   case "25/12" : 
//     console.log("Hoy es navidad");
//     break;
//   default:
//     console.log("Esta fecha no tiene eventos");
// }


/**
 * 
 */
const notas = [8, 2, 7, 10, 6, 5, 9]; // 7 elementos

// console.log(notas[4]);

notas[4] = 123

// console.log(notas)

let contador = 3;

// while(notas.length > contador) {
//   console.log(notas[contador] + 3); // 13, 126, 8, 12
//   contador = contador + 1;
// }

// for(let i = 0; notas.length > i; i++) {
//   console.log(notas[i] + 3);
// }

// for(const nota of notas) {
//   console.log(nota + 3);
// }

// for(const i in notas) {
//   console.log(i, ' - ', notas[i]);
// }

// [8, 2, 7, 10, 123, 5, 9]







notas[2] = ["a", "b", "c"]


// for(const i in notas) {
//   console.log(i, ' - ', notas[i]);
// }

// console.log(notas[2][1]);
 

/**
 * Crear una función obtenerChatStatus que tome como argumento un array 
   de strings usuarias y devuelva un string con el status del chat. Las reglas son:
  Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
  Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
  Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X 
  persona(s) más están conectadas
 */
const obtenerChatStatus = (usuarias: string[]): string => {

  if(usuarias.length === 1) {
    return `${usuarias[0]} está conectada`;
  } else if(usuarias.length === 2) {
    return `${usuarias[0]} y ${usuarias[1]} están conectadas`
  } else {
    return `${usuarias[0]}, ${usuarias[1]} y ${usuarias.length - 2} persona(s) más están conectadas`
  }

}


const rta = obtenerChatStatus(['Ada']) // 'Ada está conectada'
const rta2 = obtenerChatStatus(['Ada', 'Grace']) // 'Ada y Grace están conectadas'
const rta3 = obtenerChatStatus(['Ada', 'Grace', 'Marie', 'Ada', 'Grace', 'Marie']) // 'Ada, Grace y 1 persona(s) más están conectadas'

// console.log(rta);
// console.log(rta2);
// console.log(rta3);


// Crear una función removerDuplicados que tome como argumento un array array y 
// que devuelva un array con los mismos valores de array pero sin valores duplicados.

const removerDuplicados = (array) => {

  const rta: number[] = []

  for(const num of array) {

    if(!rta.includes(num)) { 

      rta.push(num) 
      
    }

  }

  return rta;
}

const resp1 = removerDuplicados([1, 1, 1]) // [1]
const resp2 = removerDuplicados([1, 1, 2, 2, 3, 3]) // [1, 2 ,3]
const resp3 = removerDuplicados([5, 23, 8, 5, 5, 44, 23]) // [5, 23 ,8, 44]

// console.log(resp1);
// console.log(resp2);
// console.log(resp3);


/**
 * Crear una función consultarTabla que tome como argumento un número id, un string 
 * columna, y una matriz tabla. La matríz debe tener un estructura de tabla, donde 
 * el primer array contiene el nombre de las columnas, y los siguientes array son 
 * las filas donde se ingresan los registros con sus datos en el orden de las 
 * columnas. Por ejemplo, si el índice 1 es la columna nombre todas las demás "filas" 
 * deben tener el dato nombre en esa posición. La tabla tiene que tener una columna id, 
 * que es un identificador único para cada registro (un número incremental). La función 
 * debe retornar el valor del dato de la columna buscada, para el registro con el id 
 * indicado, en la tabla que se le pasa como parámetro.
 */

const consultarTabla = (id, columna, tabla) => {

  const index = tabla[0].indexOf(columna) // 1
  
  for(const elem of tabla) {
    // console.log(elem);
    
    if(elem[0] === id) {
      return elem[index]
    }
  }

  return 'No se encontró el dato'

}

const usuarios = [
  ['id', 'nombre', 'edad', 'email'],
  [10, 'Hannah', 20, 'hannah@gmail.com'],
  [1, 'Ada', 33, 'ada@gmail.com'],
  [2, 'Grace', 45, 'grace@gmail.com'],
  [5, 'Adrian', 38, 'adrian@gmail.com'],
]

const vehiculos = [
  ['id', 'marca', 'patente', 'anio'],
  [2, 'Peugeot', 'dsa345', 2018],
  [4, 'Ford', 'asd123', 2016],
  [5, 'Fiat', 'sdf456', 2010],
]


const rta_1 = consultarTabla(2, 'nombre', usuarios) // 'Grace'
const rta_2 = consultarTabla(11, 'email', usuarios) // 'ada@gmail.com'
const rta_3 = consultarTabla(5, 'edad', usuarios)  // 38
const rta_4 = consultarTabla(10, 'nombre', usuarios)  // Hannah
const rta_5 = consultarTabla(2, 'marca', vehiculos)  // Peugeot
const rta_6 = consultarTabla(5, 'patente', vehiculos)  // sdf456

// console.log(rta_1);
// console.log(rta_2);
// console.log(rta_3);
// console.log(rta_4);
// console.log(rta_5);
// console.log(rta_6);


/**
 * Callbacks
 */


const funcion2 = (callback) => {
  callback()
}

// funcion2( () => {
//   console.log("Soy una función");
// } )

// setTimeout(() => {
//   console.log("Espera 5 segundos");
  
// }, 5000)

// setTimeout(() => {
//   const day = new Date()
//   if(day.getDay() === 3) {
//     console.log("Hoy es viernes");
//   } else {
//     console.log("Hoy no es viernes");
//   }
// }, 2000)

/**
 * 
 */
const myMap = (array, callback) => {

  // array => [3, 5, 2, 7, 1, 8]

  const rta = []

  for(const elem of array) {
    const newElem = callback(elem)
    rta.push(newElem)
  }

  return rta
}


const rtaFinal = myMap([3, 5, 2, 7, 1, 8], (value) => {

  return value * 2

})

// console.log(rtaFinal); // 6, 10, 4, 14, 2, 16


const rtaFinal2 = myMap([4, 5, 6, 7, 8, 4], (value) => {
  if(value !== 4) {
    return value
  } else {
    return value * 10
  }
})

// console.log(rtaFinal2); // 40, 5, 6, 7, 8, 40

const personajes: Inhabitant[] = [{
  id: 7,
  name: "Twizzle Chrometossle",
  thumbnail:
    "http://www.publicdomainpictures.net/pictures/10000/nahled/1-1275919724d1Oh.jpg",
  age: 85,
  weight: 38.953087,
  height: 96.0678,
  hair_color: "Red",
  professions: ["Baker", "Brewer", "Tax inspector"],
  friends: ["Libalia Mystbooster", "Zedkin Gyrotorque"],
},
{
  id: 8,
  name: "Malbert Tinkbuster",
  thumbnail:
    "http://www.publicdomainpictures.net/pictures/10000/velka/1-1248161543llOC.jpg",
  age: 186,
  weight: 41.159805,
  height: 118.27941,
  hair_color: "Gray",
  professions: ["Baker", "Mason"],
  friends: [],
},
{
  id: 9,
  name: "Kinthony Nozzlebooster",
  thumbnail:
    "http://www.publicdomainpictures.net/pictures/20000/nahled/baby-lamb.jpg",
  age: 233,
  weight: 41.024612,
  height: 113.56545,
  hair_color: "Red",
  professions: ["Smelter", "Miner", "Brewer", "Tax inspector", "Carpenter"],
  friends: ["Zedkin Clankstorque", "Midwig Magnarivet"],
}]

const rtaFinal3 = myMap(personajes, (personaje: Inhabitant) => {
  if(personaje.professions.includes('Brewer')) {
    return null
  } else {
    return personaje
  }
})

// console.log(rtaFinal3);


const rtaFinal4 = personajes.map((personaje) => {
  if(personaje.professions.includes('Brewer')) {
    return null
  } else {
    return personaje
  }
})

// console.log(rtaFinal4);


const asd = [1, 34, 9];

const mapResponse = asd.map((num) => {
  return num * 3
})

console.log(mapResponse);
