/**
 * Repaso
 */

const usersDB = [{
    name: 'Adrián',
    email: 'asd@asd'
},{
    name: 'Mariana',
    email: 'qwe@asd'
},{
    name: 'Hannah',
    email: 'zxc@asd'
}]

const operacionExitosa = true

const getUsers = () => {
    
    const estoEsUnaPromesa = new Promise((resolve, reject) => {

        setTimeout(() => {
            if(operacionExitosa) {
                // Si hay éxito
                resolve(usersDB)
            } else {
                // Si no hay éxito
                reject('No se pudo realizar la operación.')
            }
        }, 3000)

    })

    return estoEsUnaPromesa;

}

// const users = getUsers()

// users.then((response) => {
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// });


// const asd = fetch('https://ava-9f390-default-rtdb.firebaseio.com/vehicles.json')
//     .then((response) => {
//         return response.json();
//     }).then((asd) => {
//       console.log(asd);
//     })


const makeUsersTable = async () => {

    console.log("mostrar loader")

    const otherUsers = await getUsers()
    
    setTimeout(() => {

        console.log(otherUsers);
        
        console.log("Hola mundo");
        
        console.log("ocultar loader");

        return otherUsers;

    }, 3000);
    
}

const ddd = makeUsersTable();
