var formAdd = document.getElementById('form-add-item');
formAdd.addEventListener('submit', function (e) {
    e.preventDefault();
    var payload = {
        dni: e.target.dni.value,
        name: e.target.name.value,
        email: e.target.email.value
    };
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    };
    fetch('https://todoapp-c3a11-default-rtdb.firebaseio.com/items.json', options);
});
