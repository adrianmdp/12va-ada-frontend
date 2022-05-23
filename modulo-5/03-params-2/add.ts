const formAdd = document.getElementById('form-add-item');



formAdd.addEventListener('submit', (e) => {
    e.preventDefault()

    const payload = {
        dni: e.target.dni.value,
        name: e.target.name.value,
        email: e.target.email.value
    }

    const storage = JSON.parse(localStorage.getItem('ahorradas-data'));

    storage.items.push(payload);

    localStorage.setItem('ahorradas-data', JSON.stringify(storage))
    
})