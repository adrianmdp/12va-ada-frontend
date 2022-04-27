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

const personaje = {
    id: 0,
    name: "Tobus Quickwhistle",
    thumbnail: "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
    age: 306,
    weight: 39.065952,
    height: 107.75835,
    hair_color: "Pink",
    boss: {
        name: "Lorem",
        email: "boss@ada.com"
    },
    professions: [
        "Metalworker",
        "Woodcarver",
        "Stonecarver",
        " Tinker",
        "Tailor",
        "Potter",
    ],
    friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"]
}

// const age = personaje.age
// const name = personaje.name
// const professions = personaje.professions

const age = 10;

const { 
    age: pAge, 
    name, 
    professions,  
    boss: { email, name: bName }
} = personaje

// console.log(email, bName, name);

// const obj1 = {
//     name: "Adrian",
//     email: "adrian@ada.com"
// }

// const obj2 = obj1

// obj2.name = "Hannah"

// const obj3 = {
//     name: obj1.name,
//     email: obj1.email
// }

// obj3.name = "Sofi"

// const obj4 = { ...obj1 }

// obj4.name = "Mati"

// console.log(obj2, obj1, obj3, obj4);

const persona = { 
    id: 123,
    name: "Adrián",
    lastname: "Solimano",
    email: "adrian@email.com",
    salario: 10000
}

const loc = {
    name: "Mar del Plata",
    long: "123123",
    lat: "321321",
    zip: "7600"
}

const boss = {
    id: 8,
    name: "Hannah",
    lastname: "Lopez",
    email: "hannah@ada.com"
}

const resumen = {
    ...loc, 
    ...boss,
    ...persona, 
    boss: boss.name,
    city: loc.name
}

const resumen2 = {
    persona: { 
        ...persona,
        children: [
            {
                name: "Agostina",
                birthdate: new Date("2017-06-29"),
            },
            {
                name: "Valentina",
                birthdate: new Date("2012-09-12")
            },
            {
                name: "Mailen",
                birthdate: new Date("2005-06-16")
            }
        ],
        role: 'employee',
        intereses: 12
    },
    location: { 
        ...loc 
    }, 
    boss: { 
        ...boss,
        role: 'admin'
    },
}

// ¿Obtener la fecha de nacimiento de Agostina?
console.log(resumen2.persona.children[1].name);

const children = resumen2.persona.children.find(children => children.name === "Valentina")

console.log(children.birthdate);



const saldo = 10000;

// const resumen = {
//     name: persona.name,
//     lastname: persona.lastname,
//     email: persona.email,
//     saldo: saldo
// }



console.log(resumen2);





const mostrarFicha = ({ name, thumbnail, ...rest }: Inhabitant) => {

    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = thumbnail;
    img.classList.add('image');

    const h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode(name))

    const ul = document.createElement('ul');


    for(const prop in rest) {
        const li = document.createElement('li');
        const texto = document.createTextNode(`${prop}: ${rest[prop]}`);
        li.appendChild(texto);
        ul.appendChild(li);
    }

    // let li = document.createElement('li');
    // const texto = document.createTextNode(hair_color);
    // li.appendChild(texto);
    // ul.appendChild(li);

    // li = document.createElement('li');
    // li.appendChild(document.createTextNode(age.toString()));
    // ul.appendChild(li)

    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(ul);


    document.body.appendChild(card)
}

mostrarFicha(personaje);


const { id, ...rest } = persona // Rest


const nuevaPersona = { ...persona, nuevoDato: "Este es un dato que no tenía la persona" } // Spread