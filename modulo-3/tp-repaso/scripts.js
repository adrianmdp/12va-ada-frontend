var long = [
    {
        value: 12,
        name: 'long',
        type: 'radio',
        label: '12 caracteres',
        action: function (e) {
            console.log(e.target.value);
        }
    },
    {
        value: 9,
        name: 'long',
        type: 'radio',
        label: '9 caracteres',
        action: function (e) {
            console.log(e.target.value);
        }
    },
    {
        value: 6,
        name: 'long',
        type: 'radio',
        label: '6 caracteres',
        action: function (e) {
            console.log(e.target.value);
        }
    }
];
var reglas = [
    {
        value: 'letras',
        name: 'rules',
        type: 'radio',
        label: 'Letras',
        action: function (e) {
            console.log(e.target.value);
        }
    },
    {
        value: 'lectura-simple',
        name: 'rules',
        type: 'radio',
        label: 'Lectura simple',
        action: function (e) {
            console.log(e.target.value);
        }
    },
    {
        value: 'todos los caracteres',
        name: 'rules',
        type: 'radio',
        label: 'Todos los caracteres',
        action: function (e) {
            console.log(e.target.value);
        }
    }
];
var chars = [
    {
        value: 'Mayusculas',
        name: 'chars',
        type: 'checkbox',
        label: 'Mayúsculas',
        action: function (e) {
            console.log(e.target.value);
        }
    },
    {
        value: 'Minusculas',
        name: 'chars',
        type: 'checkbox',
        label: 'Minúsculas',
        action: function (e) {
            console.log(e.target.value);
        }
    },
    {
        value: 'Numeros',
        name: 'chars',
        type: 'checkbox',
        label: 'Números',
        action: function (e) {
            console.log(e.target.value);
        }
    },
    {
        value: 'Simbolos',
        name: 'chars',
        type: 'checkbox',
        label: 'Símbolos',
        action: function (e) {
            console.log(e.target.value);
        }
    }
];
/**
 * Inicio
 */
var body = document.body;
/* Container */
var container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);
/* Card Contraseña */
var cardContrasenia = document.createElement('div');
cardContrasenia.classList.add('card');
container.appendChild(cardContrasenia);
/* Contraseña */
var formGorupContrasenia = document.createElement('div');
var contrasenia = document.createElement('input');
var labelContrasenia = document.createElement('label');
contrasenia.classList.add('form-control');
formGorupContrasenia.appendChild(contrasenia);
formGorupContrasenia.appendChild(labelContrasenia);
cardContrasenia.appendChild(formGorupContrasenia);
/* Card Opciones */
var cardOpciones = document.createElement('div');
cardOpciones.classList.add('card');
container.appendChild(cardOpciones);
/* Form Opciones */
var form = document.createElement('form');
/* Items Opciones */
var renderOptions = function (options) {
    var fieldset = document.createElement('fieldset');
    options.forEach(function (option) {
        var formGroup = document.createElement('div');
        formGroup.classList.add('form-group');
        var input = document.createElement('input');
        input.value = option.value.toString();
        input.name = option.name;
        input.type = option.type;
        // input.addEventListener('change', option.action)
        input.addEventListener('change', function () {
            passwordGenerator();
        });
        var label = document.createElement('label');
        var textLabel = document.createTextNode(option.label);
        label.appendChild(textLabel);
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        fieldset.appendChild(formGroup);
    });
    return fieldset;
};
/* Columnas */
var row = document.createElement('div');
row.classList.add('row');
var col1 = document.createElement('div');
col1.classList.add('col');
var col2 = document.createElement('div');
col2.classList.add('col');
var col3 = document.createElement('div');
col3.classList.add('col');
col1.appendChild(renderOptions(long));
col2.appendChild(renderOptions(reglas));
col3.appendChild(renderOptions(chars));
row.appendChild(col1);
row.appendChild(col2);
row.appendChild(col3);
form.appendChild(row);
cardOpciones.appendChild(form);
var changeSizePassword = function (value) {
    console.log(value);
};
var changeRulesPassword = function (value) {
    switch (value) {
        case 'letras':
            console.log('Solo letras');
            break;
        default: console.log('otro caso');
    }
};
var changeCharsPassword = function (value) {
};
var passwordGenerator = function () {
    var sizes = document.querySelectorAll('input[name="long"]');
    var rules = document.querySelectorAll('input[name="rules"]');
    var chars = document.querySelectorAll('input[name="chars"]');
    sizes.forEach(function (elem) {
        if (elem.checked) {
            changeSizePassword(elem.value);
        }
    });
    rules.forEach(function (elem) {
        if (elem.checked) {
            changeRulesPassword(elem.value);
        }
    });
    chars.forEach(function (elem) {
        // console.log(elem.value, elem.checked);
    });
};
