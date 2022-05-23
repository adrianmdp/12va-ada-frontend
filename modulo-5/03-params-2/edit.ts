const formAdd = document.getElementById('form-edit-item');
const params = new URLSearchParams(window.location.search);

const dni = params.get('dni');

const storage = JSON.parse(localStorage.getItem('ahorradas-data'))

console.log(storage);


const item = storage.items.find(item => item.dni === dni)

formAdd.dni.value = item.dni
formAdd.name.value = item.name
formAdd.email.value = item.email


formAdd.addEventListener('submit', (e) => {
    e.preventDefault();

    const payload = {
        dni: e.target.dni.value,
        name: e.target.name.value,
        email: e.target.email.value
    }

    const storage = JSON.parse(localStorage.getItem('ahorradas-data'))

    const newItems = storage.items.map(item => {
        if(item.dni === dni) {
            return payload
        }
        return item
    })

    localStorage.setItem('ahorradas-data', JSON.stringify({
        ...storage,
        items: newItems,
    }))

})