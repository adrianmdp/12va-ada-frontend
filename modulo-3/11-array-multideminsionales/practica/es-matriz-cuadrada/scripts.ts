// const esMatrizCuadrada = (matriz) => {
//    const qtyVerticalElements = matriz.length; // 4
//    const qtyHorizontalElements = matriz[0].length; // 4
//    return qtyHorizontalElements === qtyVerticalElements // boolean
// }

const esMatrizCuadrada = (matriz) => {
   // console.log('cantidad de bolsitas:', verticalQty);
   for(const i in matriz) {
      // console.log('bolsita: ', matriz[i], 'cantidad en la bolsita: ', matriz[i].length);
      if(matriz[i].length !== matriz.length) return false // 3 !== 4
   }
   return true;
}

const rta1 = esMatrizCuadrada([ // frasco
   [1, 2, 3], // Bolsita 1 con 3 caramelos - i = 0
   [1, 23, 3], // Bolsita 2 - i = 1
   [1, 24, 3], // Bolsita 3 - i = 2 
 ]); // true
 
 console.log(rta1);
 console.log('-----');
 
 
 const rta2 = esMatrizCuadrada([
   [1, 2, 3, 4, 4],
   [7, 2, 9, 2, 4, 5],
   [1, 8, 4, 5, 4],
   [1, 8, 4, 5, 4],
   [1, 8, 4, 5, 4],
 ]); // false
 
 console.log(rta2);



 const miFuncion = () => {

    
    const a = 4;

    if(a === 4) return true;

   const b = a * 4;

   return b;

 }