const tableItems = document.getElementById('items');
const tableItemsBody = tableItems.querySelector('tbody');

const storage = JSON.parse(localStorage.getItem('ahorradas-data'));

storage.items.forEach(item => {
    const tr = document.createElement('tr');
            
    for(const key in item) {
        
        const td = document.createElement('td');
        const text = document.createTextNode(item[key])
        td.appendChild(text)
        tr.appendChild(td)

    }

    const button = document.createElement('a');
    const txtButton = document.createTextNode('Editar');
    button.setAttribute('href', `./edit.html?dni=${item.dni}`);
    button.appendChild(txtButton);

    const td = document.createElement('td');
    td.appendChild(button);

    tr.appendChild(td);

    tableItemsBody.appendChild(tr)
})