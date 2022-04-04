/**
 * Modal
 */
const modalContainer = document.createElement('div');
modalContainer.classList.add('modal-container');
 
const modal = document.createElement('div');
modal.classList.add('modal');

const buttonTrigger = document.createElement('button');
const buttonTriggerText = document.createTextNode('Abrir Modal');
buttonTrigger.appendChild(buttonTriggerText);
buttonTrigger.classList.add('btn');

const closeModalButton = document.createElement('button');
const closeModalButtonText = document.createTextNode('X');
closeModalButton.appendChild(closeModalButtonText);
closeModalButton.classList.add('btn');

buttonTrigger.addEventListener('click', () => {
    modalContainer.classList.add('show');
})

closeModalButton.addEventListener('click', () => {
    modalContainer.classList.remove('show');
})


modal.appendChild(closeModalButton);
modalContainer.appendChild(modal)

document.body.appendChild(modalContainer);
document.body.appendChild(buttonTrigger);