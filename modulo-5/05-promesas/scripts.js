var req = fetch('https://ava-9f390-default-rtdb.firebaseio.com/users.json');
// console.log(req);
// req.then(response => {
//     return response.json()
// }).then(data => {
//     console.log(data)
// })
var inhabitants = [
    {
        id: 0,
        name: "Tobus Quickwhistle",
        thumbnail: "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
        age: 306,
        weight: 39.065952,
        height: 107.75835,
        hair_color: "Pink",
        professions: [
            "Metalworker",
            "Woodcarver",
            "Stonecarver",
            " Tinker",
            "Tailor",
            "Potter",
        ],
        friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"]
    },
    {
        id: 1,
        name: "Fizkin Voidbuster",
        thumbnail: "http://www.publicdomainpictures.net/pictures/120000/nahled/white-hen.jpg",
        age: 288,
        weight: 35.279167,
        height: 110.43628,
        hair_color: "Green",
        professions: [
            "Brewer",
            "Medic",
            "Prospector",
            "Gemcutter",
            "Mason",
            "Tailor",
        ],
        friends: []
    },
    {
        id: 2,
        name: "Malbin Chromerocket",
        thumbnail: "http://www.publicdomainpictures.net/pictures/30000/nahled/maple-leaves-background.jpg",
        age: 166,
        weight: 35.88665,
        height: 106.14395,
        hair_color: "Red",
        professions: ["Cook", "Baker", "Miner"],
        friends: ["Fizwood Voidtossle"]
    },
    {
        id: 3,
        name: "Midwig Gyroslicer",
        thumbnail: "http://www.publicdomainpictures.net/pictures/10000/nahled/1-1275919724d1Oh.jpg",
        age: 240,
        weight: 40.97596,
        height: 127.88554,
        hair_color: "Red",
        professions: [
            "Carpenter",
            "Farmer",
            "Stonecarver",
            "Brewer",
            "Tax inspector",
            "Prospector",
        ],
        friends: ["Sarabink Tinkbuster", "Tinadette Wrongslicer"]
    },
];
var success = false; // Al mandar a imprimir, no todo funciono sin problemas
var retrieveInhabitants = function () {
    var promesa = new Promise(function (resolve, reject) {
        if (success) {
            setTimeout(function () {
                resolve(inhabitants);
            }, 2000);
        }
        else {
            reject('Hubo un error!');
        }
    });
    return promesa;
};
var prueba = retrieveInhabitants();
prueba.then(function (data) {
    console.log(data);
})["catch"](function (error) {
    console.log(error);
});
