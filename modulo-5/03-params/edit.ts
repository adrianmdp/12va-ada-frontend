const formAdd = document.getElementById('form-edit-item');
const params = new URLSearchParams(window.location.search);

const item = params.get('id');

fetch(`https://todoapp-c3a11-default-rtdb.firebaseio.com/items/${item}.json`)
    .then(response => response.json())
    .then(data => {
        formAdd.dni.value = data.dni
        formAdd.name.value = data.name
        formAdd.email.value = data.email
    })


formAdd.addEventListener('submit', (e) => {
    e.preventDefault();

    const payload = {
        dni: e.target.dni.value,
        name: e.target.name.value,
        email: e.target.email.value
    }

    const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
    
    fetch(`https://todoapp-c3a11-default-rtdb.firebaseio.com/items/${item}.json`, options)
})