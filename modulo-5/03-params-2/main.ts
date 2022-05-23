const initalStorage = {
    categories: [],
    operations: []
}

const init = () => {

    const storage = JSON.parse(localStorage.getItem('ahorradas-data'));

    if(!storage) {
        localStorage.setItem('ahorradas-data', JSON.stringify(initalStorage))
    }
    

}

init();
