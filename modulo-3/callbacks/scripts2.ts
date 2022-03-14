/**
 * EJ 1
 */

// Función anónima
() => {
   return 'Hola mundo';
}

const miFuncion = (callback) => { 

   callback()

}

var saludo = 'hola'

// miFuncion(() => {

//    if(saludo === 'hola') {
//       console.log(saludo + ', ¿Cómo estás?')
//    } else {
//       return null
//    }

// })


/**
 */

const edades = [10, 30, 23, 7, 19, 4, 3, 45, 12, 42];


const map = (values: number[], callback: (v: number) => number) => {

   const rta: number[] = []

   for(const value of values) {
      const dev = callback(value);
      if(dev) {
         rta.push(dev);
      }
   }

   return rta;

}

map(edades, (v: number) => {

   if(v >= 18) {
      return v;
   }
   return null
   
})

/**
 * SetTimeout y setInterval
 */

setTimeout(() => {
   // Código que se ejecuta luego de que se cumpla el timeout
}, 5000 /* timeout */);


// const time = 5;
// let br = 0
// const id = setInterval(() => {
//    if(br >= time) clearInterval(id)
//    console.log("Hola");
//    br++;
// }, 1000)

const id = setInterval(() => {
   console.log("Hola");
}, 1000)

setTimeout(() => {
   clearInterval(id)
}, 5000)

console.log("Fin de código");