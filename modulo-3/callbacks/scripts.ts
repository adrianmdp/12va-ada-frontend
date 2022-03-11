const devolverPrecioFinal = (precios: number[], callback) => {

   const rta = [];

   for(const value of precios) {
      rta.push(callback(value))
   }

   return rta;

}

const preciosFinales = devolverPrecioFinal([3, 4, 5, 6, 10, 33], (num) => { 
   return num * 1.21;
})


console.log(preciosFinales);

// [3, 4, 5, 6]