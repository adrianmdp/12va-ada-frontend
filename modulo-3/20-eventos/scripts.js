var card = document.createElement('div');
var img = document.createElement('img');
var title = document.createElement('h2');
var professions = document.createElement('div');
var button = document.createElement('a');
card.appendChild(button);
var people = inhabitants;
// card
card.classList.add('card');
// button
var btnText = document.createTextNode('Seleccionar');
button.appendChild(btnText);
button.classList.add('btn');
document.body.addEventListener('click', function () {
    console.log('body');
});
card.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log('card');
});
button.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log('button');
});
document.body.appendChild(card);
