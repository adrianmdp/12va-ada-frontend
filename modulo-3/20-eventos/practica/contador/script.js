// contador 
// Crear un documento html que muestre un número (empezando en 0) y 6 botones con 
// los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que 
// sumar o restar la cantidad correspondiente, y actualizar el número mostrado. 



let initCount = 0; 
const div = document.createElement('div'); 
const rta = document.createTextNode(initCount);

// const btn1 = document.createElement('button'); 
// const btn2 = document.createElement('button'); 
// const btn3 = document.createElement('button'); 
// const btn4 = document.createElement('button'); 
// const btn5 = document.createElement('button'); 
// const btn6 = document.createElement('button'); 

// const text1 = document.createTextNode("-1"); 
// const text2 = document.createTextNode("+1"); 
// const text3 = document.createTextNode("-5"); 
// const text4 = document.createTextNode("+5"); 
// const text5 = document.createTextNode("-10");
// const text6 = document.createTextNode("+10"); 

// btn1.appendChild(text1); 
// btn2.appendChild(text2); 
// btn3.appendChild(text3); 
// btn4.appendChild(text4); 
// btn5.appendChild(text5); 
// btn6.appendChild(text6); 

// btn1.dataset.value = text1.textContent;

// div.appendChild(btn1); 
// div.appendChild(btn2); 
// div.appendChild(btn3); 
// div.appendChild(btn4); 
// div.appendChild(btn5); 
// div.appendChild(btn6);

// btn1.addEventListener('click', () => {
//     initCount = initCount - 1;
//     rta.textContent = initCount;
// })
// btn2.addEventListener('click', () => {
//     initCount = initCount + 1;
//     rta.textContent = initCount;
// })
// btn3.addEventListener('click', () => {
//     initCount = initCount - 5;
//     rta.textContent = initCount;
// })
// btn4.addEventListener('click', () => {
//     initCount = initCount + 5;
//     rta.textContent = initCount;
// })
// btn5.addEventListener('click', () => {
//     initCount = initCount - 10;
//     rta.textContent = initCount;
// })
// btn6.addEventListener('click', () => {
//     initCount = initCount + 10;
//     rta.textContent = initCount;
// })

// document.body.appendChild(rta);
// document.body.appendChild(div);


const values = [-1, 1, -5, 5, -10, 10];


for(const val of values) {

    const btn = document.createElement('button'); 

    const text = document.createTextNode(val > 0 ? `+${val}` : val); 

    btn.appendChild(text); 

    btn.addEventListener('click', () => {
        initCount = initCount + val;
        rta.textContent = initCount;
    })

    div.appendChild(btn); 

    document.body.appendChild(rta);

    document.body.appendChild(div);
}