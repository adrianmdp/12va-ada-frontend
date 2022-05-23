var formAdd = document.getElementById('form-add-item');
formAdd.addEventListener('submit', function (e) {
    e.preventDefault();
    var payload = {
        dni: e.target.dni.value,
        name: e.target.name.value,
        email: e.target.email.value
    };
    var storage = JSON.parse(localStorage.getItem('ahorradas-data'));
    storage.items.push(payload);
    localStorage.setItem('ahorradas-data', JSON.stringify(storage));
});
