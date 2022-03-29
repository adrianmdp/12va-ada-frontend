// adivinar-numero
// Crear un programa que genere un número aleatorio entre 0 y 9. Cuando se presiona 
// un número en el teclado, el programa debe mostrar en el documento html un mensaje:

// si el número seleccionado es más grande que el número aleatorio generado, debe mostrar 
// El número es más chico
// si el número seleccionado es más chico que el número aleatorio generado, debe mostrar 
// El número es más grande
// si el número seleccionado es igual al número aleatorio generado, debe mostrar Adivinaste.
// El mensaje también debe incluir el número ingresado (por ejemplo, Número ingresado: 3). 
// El mensaje debe mostrarse en un elemento del documento html, no en un alert.

// Por ejemplo:

// Número aleatorio: 7 (No se muestra)
// Usuario presiona 3
// "El número es más grande. Número ingresado: 3"
// Usuario presiona 9
// "El número es más chico. Número ingresado: 9"
// Usuario presiona 7
// "Adivinaste. Número ingresado: 7"
// El documento también debe tener un botón que diga Reiniciar, que genere un nuevo número y actualice el mensaje para indicarlo (por ejemplo ¡Nueva partida! Presione un número.)

const getRandom = () => {
    return Math.floor(Math.random() * 10);
}

const funcJugar = (rand, mjeContainer) => {

  let textoParrafo;

  const preguntaNum = parseInt(prompt("Ingrese un numero del 0 al 9"));

  if (rand < preguntaNum) {
    textoParrafo = document.createTextNode(`El numero ingresado es: ${preguntaNum} El numero random es mas chico"`)
  } else if (rand > preguntaNum) {
    textoParrafo = document.createTextNode(`El numero ingresado es: ${preguntaNum} El numero random es mas grande"`)
  } else if (rand === preguntaNum) {
    textoParrafo = document.createTextNode(`El numero ingresado es: ${preguntaNum} Adivinaste`)
  }

  mjeContainer.innerHTML = "";

  mjeContainer.appendChild(textoParrafo)
}

const parrafo = document.createElement('p')
document.body.appendChild(parrafo)
const btn = document.createElement('button')
const btnSpan = document.createElement('span')
const textBtn = document.createTextNode('Reiniciar')
btnSpan.appendChild(btn)
btn.appendChild(textBtn)
document.body.appendChild(btn)


funcJugar(getRandom(), parrafo)
btn.addEventListener("click", funcJugar)