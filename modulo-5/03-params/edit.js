var formAdd = document.getElementById('form-edit-item');
var params = new URLSearchParams(window.location.search);
var item = params.get('id');
fetch("https://todoapp-c3a11-default-rtdb.firebaseio.com/items/".concat(item, ".json"))
    .then(function (response) { return response.json(); })
    .then(function (data) {
    formAdd.dni.value = data.dni;
    formAdd.name.value = data.name;
    formAdd.email.value = data.email;
});
formAdd.addEventListener('submit', function (e) {
    e.preventDefault();
    var payload = {
        dni: e.target.dni.value,
        name: e.target.name.value,
        email: e.target.email.value
    };
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    };
    fetch("https://todoapp-c3a11-default-rtdb.firebaseio.com/items/".concat(item, ".json"), options);
});
