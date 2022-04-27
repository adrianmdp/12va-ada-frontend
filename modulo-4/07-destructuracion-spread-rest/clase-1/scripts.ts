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

const persons: Inhabitant[] = [
    {
        id: 0,
        name: "Tobus Quickwhistle",
        thumbnail: "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
        age: 306,
        weight: 39.065952,
        height: 107.75835,
        hair_color: "Pink",
        professions: [
            "Metalworker",
            "Woodcarver",
            "Stonecarver",
            " Tinker",
            "Tailor",
            "Potter",
        ],
        friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"]
    },
    {
        id: 1,
        name: "Fizkin Voidbuster",
        thumbnail:
            "http://www.publicdomainpictures.net/pictures/120000/nahled/white-hen.jpg",
        age: 288,
        weight: 35.279167,
        height: 110.43628,
        hair_color: "Green",
        professions: [
            "Brewer",
            "Medic",
            "Prospector",
            "Gemcutter",
            "Mason",
            "Tailor",
        ],
        friends: [],
    },
    {
        id: 2,
        name: "Malbin Chromerocket",
        thumbnail:
            "http://www.publicdomainpictures.net/pictures/30000/nahled/maple-leaves-background.jpg",
        age: 166,
        weight: 35.88665,
        height: 106.14395,
        hair_color: "Red",
        professions: ["Cook", "Baker", "Miner"],
        friends: ["Fizwood Voidtossle"],
    }
]

// const { name, professions } = person

// console.log(name, professions);

// const printFriends = ({friends}: Inhabitant) => {

//     console.log(friends);
    
// }

// const printFeatures = ({name, weight, height, hair_color}: Inhabitant) => {

//     console.log(name, weight, height, hair_color);
    
// }

// const printNames = (persons: Inhabitant[]) => {

//     persons.forEach(({thumbnail}: Inhabitant) => {
//         console.log(thumbnail);
//     })

//     persons.forEach(({name}: Inhabitant) => {

//         console.log(name);

//     })

// }

// printNames(persons)


// type Saludo = {
//     text: string
//     name: string
// }

// const saludar = ({text, name}: Saludo) => {

//     console.log(`${text} ${name}`);
    
// }

// const text = "Hola"
// const { name } = persons[2]

// saludar({ text, name })

// Si la propiedad se llama igual que la variable que le paso como valor,
// no es necesario pasar ambas.


// const person = {
//     name: "Adrián",
//     email: "adrian@ada.com"
// }

// const myCompany = {
//     name: "Ada",
//     country: "Argentina"
// }

// const { name, email } = person
// const { name: company, country } = myCompany

// const infoPerson = { name, email, company, country }

// console.log(infoPerson);



const person = {
    name: "Adrián",
    email: "adrian@ada.com"
}

const myCompany = {
    name: "Ada",
    country: "Argentina",
    city: "Capital Federal",
    phone: "123 123 1234",
    zip: "1900"
}

const { name: company, country: test, ...asd } = myCompany

const infoPerson = { 
    company,
    ...person,
    ...asd,
}

console.log(test);



// person !== ...person
// person === { ...person }