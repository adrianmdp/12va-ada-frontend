type Inhabitant = {
    id: number
    name: string
    thumbnail: string
    age: number
    weight: number
    height: number
    hair_color: string
    professions: string[]
    friends: string[]
 }
 
const card = document.createElement('div');
const img = document.createElement('img');
const title = document.createElement('h2')
const professions = document.createElement('div')
const button = document.createElement('a')

card.appendChild(button);

const people: Inhabitant[] = inhabitants

// card
card.classList.add('card')

// button
const btnText = document.createTextNode('Seleccionar')
button.appendChild(btnText)
button.classList.add('btn')


document.body.addEventListener('click', () => {
    console.log('body');
})

card.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('card');
})

button.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('button');
})


document.body.appendChild(card);