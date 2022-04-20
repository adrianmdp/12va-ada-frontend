// const data = 
// [

//     {
//         name: "Adrian"
//     },
//     {
//         name: "Hannah"
//     }

// ]


// const numeroTarjeta = "1234432112344321"
// const nombreTarjeta = "Juan Perez"
// const vencimientoTarjeta = "10/22"
// const codigoTarjeta = "123"

// const numeroTarjeta2 = "1234432112344322"
// const nombreTarjeta2 = "Juan Perez"
// const vencimientoTarjeta2 = "10/22"
// const codigoTarjeta2 = "122"

// const tarjeta = {
//     num: numeroTarjeta,
//     nom: nombreTarjeta,
//     ven: vencimientoTarjeta,
//     cod: codigoTarjeta
// }

// const tarjeta2 = {
//     num: numeroTarjeta2,
//     nom: nombreTarjeta2,
//     ven: vencimientoTarjeta2,
//     cod: codigoTarjeta2
// }

// const tarjetas = [tarjeta, tarjeta2]

// const tarjetaJson = JSON.stringify(tarjetas);

// console.log(tarjetaJson);

// callApi.compra(tarjetas);



// const respuestaDeLaApi = '[{"num":"1234432112344321","nom":"Juan Perez","ven":"10/22","cod":"123"},{"num":"1234432112344322","nom":"Juan Perez","ven":"10/22","cod":"122"}]'

// const jsonObjeto = JSON.parse(respuestaDeLaApi);

// console.log(jsonObjeto);

localStorage.setItem("Prueba", "Hola mundo");

setTimeout(() => {
    localStorage.removeItem("Prueba");
}, 5000)