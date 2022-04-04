/**
 * Sidebar
 */
var sidebarContainer = document.createElement('div');
sidebarContainer.classList.add('sidebar-container');
var sidebar = document.createElement('div');
sidebar.classList.add('sidebar');
sidebar.classList.add('fx-slow');
var buttonTrigger = document.createElement('button');
var buttonTriggerText = document.createTextNode('Abrir Sidebar');
buttonTrigger.appendChild(buttonTriggerText);
buttonTrigger.classList.add('btn');
var closeSidebarButton = document.createElement('button');
var closeSidebarButtonText = document.createTextNode('X');
closeSidebarButton.appendChild(closeSidebarButtonText);
closeSidebarButton.classList.add('btn');
buttonTrigger.addEventListener('click', function () {
    document.body.classList.add('modal-open');
});
closeSidebarButton.addEventListener('click', function () {
    document.body.classList.remove('modal-open');
});
sidebar.appendChild(closeSidebarButton);
document.body.appendChild(sidebarContainer);
document.body.appendChild(buttonTrigger);
document.body.appendChild(sidebar);
