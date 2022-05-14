var tableItems = document.getElementById('items');
var tableItemsBody = tableItems.querySelector('tbody');
fetch('https://todoapp-c3a11-default-rtdb.firebaseio.com/items.json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    for (var prop in data) {
        var tr = document.createElement('tr');
        for (var key in data[prop]) {
            var td_1 = document.createElement('td');
            var text = document.createTextNode(data[prop][key]);
            td_1.appendChild(text);
            tr.appendChild(td_1);
        }
        var button = document.createElement('a');
        var txtButton = document.createTextNode('Editar');
        button.setAttribute('href', "./edit.html?id=".concat(prop));
        button.appendChild(txtButton);
        var td = document.createElement('td');
        td.appendChild(button);
        tr.appendChild(td);
        tableItemsBody.appendChild(tr);
    }
});
