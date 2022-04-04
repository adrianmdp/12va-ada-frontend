/**
 * Modal
 */
var modalContainer = document.createElement('div');
modalContainer.classList.add('modal-container');
var modal = document.createElement('div');
modal.classList.add('modal');
var buttonTrigger = document.createElement('button');
var buttonTriggerText = document.createTextNode('Abrir Modal');
buttonTrigger.appendChild(buttonTriggerText);
buttonTrigger.classList.add('btn');
var closeModalButton = document.createElement('button');
var closeModalButtonText = document.createTextNode('X');
closeModalButton.appendChild(closeModalButtonText);
closeModalButton.classList.add('btn');
buttonTrigger.addEventListener('click', function () {
    modalContainer.classList.add('show');
});
closeModalButton.addEventListener('click', function () {
    modalContainer.classList.remove('show');
});
modal.appendChild(closeModalButton);
modalContainer.appendChild(modal);
document.body.appendChild(modalContainer);
document.body.appendChild(buttonTrigger);
