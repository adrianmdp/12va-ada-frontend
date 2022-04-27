type Option = {
    value: number | string,
    name: string,
    type: string,
    label: string,
    action: (e: any) => void
}

const long: Option[] = [
    {
        value: 12,
        name: 'long',
        type: 'radio',
        label: '12 caracteres',
        action: (e) => {
            console.log(e.target.value)
        }
    },
    {
       value: 9,
       name: 'long',
       type: 'radio',
       label: '9 caracteres',
       action: (e) => {
        console.log(e.target.value)
    }
    },
    {
        value: 6,
        name: 'long',
        type: 'radio',
        label: '6 caracteres',
        action: (e) => {
            console.log(e.target.value)
        }
    }
]

const reglas: Option[] = [
    {
        value: 'letras',
        name: 'rules',
        type: 'radio',
        label: 'Letras',
        action: (e) => {
            console.log(e.target.value)
        }
    },
    {
       value: 'lectura-simple',
       name: 'rules',
       type: 'radio',
       label: 'Lectura simple',
       action: (e) => {
        console.log(e.target.value)
    }
    },
    {
        value: 'todos los caracteres',
        name: 'rules',
        type: 'radio',
        label: 'Todos los caracteres',
        action: (e) => {
            console.log(e.target.value)
        }
    }
]

const chars: Option[] = [
    {
        value: 'Mayusculas',
        name: 'chars',
        type: 'checkbox',
        label: 'Mayúsculas',
        action: (e) => {
            console.log(e.target.value)
        }
    },
    {
       value: 'Minusculas',
       name: 'chars',
       type: 'checkbox',
       label: 'Minúsculas',
       action: (e) => {
        console.log(e.target.value)
    }
    },
    {
        value: 'Numeros',
        name: 'chars',
        type: 'checkbox',
        label: 'Números',
        action: (e) => {
            console.log(e.target.value)
        }
    },
    {
        value: 'Simbolos',
        name: 'chars',
        type: 'checkbox',
        label: 'Símbolos',
        action: (e) => {
            console.log(e.target.value)
        }
    }
]

/**
 * Inicio
 */


const body = document.body;

/* Container */
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

/* Card Contraseña */
const cardContrasenia = document.createElement('div');
cardContrasenia.classList.add('card');
container.appendChild(cardContrasenia);

/* Contraseña */
const formGorupContrasenia = document.createElement('div')
const contrasenia = document.createElement('input');
const labelContrasenia = document.createElement('label');
contrasenia.classList.add('form-control');
formGorupContrasenia.appendChild(contrasenia);
formGorupContrasenia.appendChild(labelContrasenia);
cardContrasenia.appendChild(formGorupContrasenia);


/* Card Opciones */
const cardOpciones = document.createElement('div');
cardOpciones.classList.add('card');
container.appendChild(cardOpciones);

/* Form Opciones */
const form = document.createElement('form');

/* Items Opciones */

const renderOptions = (options: Option[]): HTMLFieldSetElement => {

    const fieldset = document.createElement('fieldset');

    options.forEach((option: Option) => {
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');
        const input = document.createElement('input');
        input.value = option.value.toString();
        input.name = option.name;
        input.type = option.type;

        // input.addEventListener('change', option.action)

        input.addEventListener('change', () => {
            passwordGenerator()
        })

        const label = document.createElement('label');
        const textLabel = document.createTextNode(option.label);
        label.appendChild(textLabel);
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        fieldset.appendChild(formGroup);
    })
    return fieldset;
}

/* Columnas */
const row = document.createElement('div');
row.classList.add('row');
const col1 = document.createElement('div');
col1.classList.add('col');
const col2 = document.createElement('div');
col2.classList.add('col');
const col3 = document.createElement('div');
col3.classList.add('col');

col1.appendChild(renderOptions(long));
col2.appendChild(renderOptions(reglas));
col3.appendChild(renderOptions(chars));

row.appendChild(col1);
row.appendChild(col2);
row.appendChild(col3);

form.appendChild(row);

cardOpciones.appendChild(form);

const changeSizePassword = (value) => {
    console.log(value)
}

const changeRulesPassword = (value) => {

    switch(value) {
        case 'letras': 
            console.log('Solo letras');
            break;
        
        default : console.log('otro caso');        
    }

}

const changeCharsPassword = (value) => {

    

}

const passwordGenerator = () => {
    const sizes = document.querySelectorAll('input[name="long"]');
    const rules = document.querySelectorAll('input[name="rules"]');
    const chars = document.querySelectorAll('input[name="chars"]');

    sizes.forEach(elem => {
        if(elem.checked) {
            changeSizePassword(elem.value)
        }
    })

    rules.forEach(elem => {
        if(elem.checked) {
            changeRulesPassword(elem.value)
        }
    })    

    chars.forEach(elem => {
        // console.log(elem.value, elem.checked);
    }) 
    
}
