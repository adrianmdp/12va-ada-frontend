// GET -> intnta ir a buscar datos a una api
// POST -> intenta enviar datos a una api para su almacenado
// DELETE -> intenta borrar uno o mas datos de la fuente
// PUT -> intenta actualizar uno o mas registros de la fuente
// PATCH -> intenta actualizar uno o mas datos de uno o mas registros de la fuente.

// Endpoint
// https://api.facebook.com/access (email, password, client_key)

/**
 * Frontend
 */
// http://misitioweb.com


/**
 * Backend
 */
// http://api.misitioweb.com
    // users
    // GET      http://api.misitioweb.com/users          (obtener usuarios)
    // GET      http://api.misitioweb.com/users?id=123   (obtener un usuario - query param)
    // POST     http://api.misitioweb.com/users          (agregar usuario)
    // PUT      http://api.misitioweb.com/users          (actualziar usuario)
    // DELETE   http://api.misitioweb.com/users          (eliminar usuario)


    // http://api.misitioweb.com/users/employees

    // http://misitioweb.com?user=adrian&pass=asd123

type Inhabitant = {
    id?: number
    name: string
    thumbnail?: string
    age: number
    weight?: number
    height?: number
    hair_color?: string
    professions?: string[]
    friends?: string[]
    }

// // Paso 1 - Hago el fetch para ir a la api - devuelve una promesa
// const request = fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')

// // Paso 2 - Accedo al método then para obtener su response - devuelve una promesa
// const response = request.then(response => {
//     return response.json()
// })

// // Paso 3 - Accedo al método then del response para obtener la data final - devuelve una promesa
// response.then(data => {
//     const personajes: Inhabitant[] = data.Brastlewark
//     const table = document.getElementById('inhabitants');
//     const tableBody = table.querySelector('tbody');

//     personajes.forEach(personaje => {
//         const tr = document.createElement('tr');
//         for(const prop in personaje) {
//             const td = document.createElement('td');
//             const content = document.createTextNode(personaje[prop]);
//             td.appendChild(content);
//             tr.appendChild(td)
//         }
//         tableBody.appendChild(tr);
//     })
    
// })

// const request = fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
//     .then(response => response.json())
//     .then(data => {
//         const personajes: Inhabitant[] = data.Brastlewark
//         const table = document.getElementById('inhabitants');
//         const tableBody = table.querySelector('tbody');
    
//         personajes.forEach(personaje => {
//             const tr = document.createElement('tr');
//             for(const prop in personaje) {
//                 const td = document.createElement('td');
//                 const content = document.createTextNode(personaje[prop]);
//                 td.appendChild(content);
//                 tr.appendChild(td)
//             }
//             tableBody.appendChild(tr);
//         })
//     })

// const request2 = fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/ata.json')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     }) 


const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Hannah',
        email: 'hannah@ada.com',
        pass: 'asd123',
        role: 'teacher'
    })
  }

const response = fetch('https://tp---final-default-rtdb.firebaseio.com/8ava.json', options)