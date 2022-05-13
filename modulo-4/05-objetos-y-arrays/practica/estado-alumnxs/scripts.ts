// Estamos diseñando un nuevo sistema para una facultad, y tenemos la 
// información de las materias para cada alumnx en objetos donde cada 
// propiedad es una materia que contiene un array con las notas de los 
// resultados de los parciales
const materiasAda = {
  matematica: [10, 6, 10, 8],
  algoritmos: [10, 10, 9],
  algebra: [7, 9]
};

const materiasGrace = {
  matematica: [2, 9, 10, 7],
  algoritmos: [7, 1, 9],
  algebra: [2, 3]
};

// Nos pidieron generar un informa que muestre las materias aprobadas 
// (promedio de notas >= 4) y desaprobadas (promedio de notas < 4)
// Para implementar este reporte, vamos a tener que desarrollar una función 
// que tome como parámetro de entrada un objeto con las materias y sus notas, 
// y nos retorne un objeto con dos propiedades: aprobadas y desaprobadas
// Cada propiedad es un array que contiene el nombre de las materias que 
// aprobaron o desaprobaron respectivamente

const numbers = [4, 6, 2, 8, 10, 12, 30]

const resp = numbers.reduce((acc, valor) => acc + valor, 0)

const words = ["asde", "fsdasad", "oifdkñ"]

const resp2 = words.reduce((acc, valor) => acc + valor, "")



// const materiasAda = {
//   matematica: [10, 6, 10, 8],
//   algoritmos: [10, 10, 9],
//   algebra: [7, 9]
// };


const agruparMateriasPorEstado = materiasAlumna => {

  const aprobadas = []
  const desaprobadas = []

  for(const materia in materiasAlumna) { // iteramos las materias

    const notas = materiasAlumna[materia]
    let acumulador = 0

    for(const nota of notas) { // Iteramos las notas de cada materia
      acumulador = acumulador + nota
    }

    const promedio = acumulador / notas.length;

    if(promedio > 4) { 
      aprobadas.push(materia) 
    } else { 
      desaprobadas.push(materia)
    }
  }

  return { aprobadas, desaprobadas }
}
// agruparMateriasPorEstado(materiasAda)
console.log( agruparMateriasPorEstado(materiasAda) );
// {
//   aprobadas: ['matematica', 'algoritmos', 'algebra'],
//   desaprobados: []
// }


console.log( agruparMateriasPorEstado(materiasGrace) );
// {
//   aprobadas: ['matematica', 'algoritmos'],
//   desaprobados: ['algebra]
// }