/**
 * Sidebar
 */

// aca se crea el elemento div que representa el backdrop
const sidebarContainer = document.createElement('div');

// al backdrop se le agrego un class
sidebarContainer.classList.add('sidebar-container');
 

const sidebar = document.createElement('div');
sidebar.classList.add('sidebar');
sidebar.classList.add('fx-slow');

const buttonTrigger = document.createElement('button');
const buttonTriggerText = document.createTextNode('Abrir Sidebar');
buttonTrigger.appendChild(buttonTriggerText);
buttonTrigger.classList.add('btn');

const closeSidebarButton = document.createElement('button');
const closeSidebarButtonText = document.createTextNode('X');
closeSidebarButton.appendChild(closeSidebarButtonText);
closeSidebarButton.classList.add('btn');

// 
buttonTrigger.addEventListener('click', () => {
    document.body.classList.add('modal-open');
})

closeSidebarButton.addEventListener('click', () => {
    document.body.classList.remove('modal-open');
})


sidebar.appendChild(closeSidebarButton);

document.body.appendChild(sidebarContainer);
document.body.appendChild(buttonTrigger);
document.body.appendChild(sidebar);