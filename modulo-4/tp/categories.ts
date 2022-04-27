const params = new URLSearchParams(location.search);

const options = document.getElementById('opciones') as HTMLSelectElement;
options.value = params.get('option')


options.addEventListener('change', (e) => {
    
    params.set('option', e.target.value);
    
    window.location.href = `${window.location.pathname}?${params.toString()}`;
})


const tipos = document.getElementById('tipos') as HTMLSelectElement;
tipos.value = params.get('type')


tipos.addEventListener('change', (e) => {
    
    params.set('type', e.target.value);
    
    window.location.href = `${window.location.pathname}?${params.toString()}`;
})

// console.log(params.get('id'), params.get('type'));
