var initialData = [
    {
        id: 0,
        name: "Tobus Quickwhistle",
        thumbnail: "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
        age: 306,
        weight: 39.065952,
        height: 107.75835,
        hair_color: "Pink"
    },
    {
        id: 1,
        name: "Fizkin Voidbuster",
        thumbnail: "http://www.publicdomainpictures.net/pictures/120000/nahled/white-hen.jpg",
        age: 288,
        weight: 35.279167,
        height: 110.43628,
        hair_color: "Green"
    }
];
localStorage.setItem('personajes', JSON.stringify(initialData));
/**
 *
 */
var tableInhabitants = document.getElementById('inhabitants');
var tbody = tableInhabitants.querySelector('tbody');
var loadInhabitats = function () {
    var inhabitants = JSON.parse(localStorage.getItem('personajes'));
    tbody.innerHTML = "";
    inhabitants.forEach(function (inhabitant) {
        var tr = document.createElement('tr');
        for (var prop in inhabitant) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(inhabitant[prop]));
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    });
};
loadInhabitats();
/**
 *
 */
var formAddInhabitants = document.getElementById('add-inhabitant');
formAddInhabitants.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(localStorage.getItem('personajes'));
    var ls_data = JSON.parse(localStorage.getItem('personajes'));
    ls_data.push({
        id: e.target.id.value,
        name: e.target.name.value,
        thumbnail: e.target.thumbnail.value,
        age: e.target.age.value,
        weight: e.target.weight.value,
        height: e.target.height.value,
        hair_color: e.target.hair_color.value
    });
    localStorage.setItem('personajes', JSON.stringify(ls_data));
    loadInhabitats();
    // data.push({
    //     id: e.target.id.value,
    //     name: e.target.name.value,
    //     thumbnail: e.target.thumbnail.value,
    //     age: e.target.age.value,
    //     weight: e.target.weight.value,
    //     height: e.target.height.value,
    //     hair_color: e.target.hair_color.value,
    // })
    // loadInhabitats(data);    
});
