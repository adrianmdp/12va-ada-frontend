const tableItems = document.getElementById('items');
const tableItemsBody = tableItems.querySelector('tbody');

fetch('https://todoapp-c3a11-default-rtdb.firebaseio.com/items.json')
    .then(response => response.json())
    .then(data => { 
        
        for(const prop in data) {
            const tr = document.createElement('tr');
            
            for(const key in data[prop]) {
                
                const td = document.createElement('td');
                const text = document.createTextNode(data[prop][key])
                td.appendChild(text)
                tr.appendChild(td)

            }

            const button = document.createElement('a');
            const txtButton = document.createTextNode('Editar');
            button.setAttribute('href', `./edit.html?id=${prop}`);
            button.appendChild(txtButton);

            const td = document.createElement('td');
            td.appendChild(button);

            tr.appendChild(td);

            tableItemsBody.appendChild(tr)
        }

    });