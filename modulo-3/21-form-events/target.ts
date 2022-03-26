const div = document.createElement('input');
div.style.width = '200px';
div.style.height = '200px';
div.style.backgroundColor = 'red';
div.setAttribute('type', 'password');

div.addEventListener('click', (event) => {
    console.log(event.target);
})

document.body.addEventListener('click', (event) => {
    console.log(event.target);
    
})


document.body.appendChild(div)