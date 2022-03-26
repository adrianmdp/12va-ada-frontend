var form = document.createElement('form');
var input1 = document.createElement('input');
input1.setAttribute('type', 'email');
input1.classList.add('form-control');
var alert1 = document.createElement('p');
var input2 = document.createElement('input');
input2.setAttribute('type', 'password');
input2.classList.add('form-control');
var alert2 = document.createElement('p');
var submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Enviar');
// input1.addEventListener('click', () => console.log('click input 1'))
// input1.addEventListener('change', () => console.log('change input 1'))
// input1.addEventListener('focus', () => console.log('focus input 1'))
// input1.addEventListener('change', (event) => {
//     const text: string = event.target.value;
//     const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
//     if(text.match(regex)) {
//         alert1.innerHTML = "Formato correcto";
//         alert1.style.color = "green";
//     } else {
//         alert1.innerHTML = "Formato incorrecto";
//         alert1.style.color = "red";
//     }
// })
// input2.addEventListener('click', () => console.log('click input 2'))
// input2.addEventListener('change', () => console.log('change input 2'))
// input2.addEventListener('focus', () => console.log('focus input 2'))
var validate = function (control, alert, regex) {
    control.addEventListener('change', function (event) {
        var text = event.target.value;
        console.log(event.target.type);
        if (text.match(regex)) {
            alert.innerHTML = "Formato correcto";
            alert.style.color = "green";
        }
        else {
            alert.innerHTML = "Formato incorrecto";
            alert.style.color = "red";
        }
    });
};
validate(input1, alert1, /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);
validate(input2, alert2, /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);
document.addEventListener('scroll', function (event) {
    console.log(event.target);
});
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Hola mundo');
});
form.appendChild(input1);
form.appendChild(alert1);
form.appendChild(input2);
form.appendChild(alert2);
form.appendChild(submit);
document.body.appendChild(form);
