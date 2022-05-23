var tableItems = document.getElementById('items');
var tableItemsBody = tableItems.querySelector('tbody');
var storage = JSON.parse(localStorage.getItem('ahorradas-data'));
storage.items.forEach(function (item) {
    var tr = document.createElement('tr');
    for (var key in item) {
        var td_1 = document.createElement('td');
        var text = document.createTextNode(item[key]);
        td_1.appendChild(text);
        tr.appendChild(td_1);
    }
    var button = document.createElement('a');
    var txtButton = document.createTextNode('Editar');
    button.setAttribute('href', "./edit.html?dni=".concat(item.dni));
    button.appendChild(txtButton);
    var td = document.createElement('td');
    td.appendChild(button);
    tr.appendChild(td);
    tableItemsBody.appendChild(tr);
});
