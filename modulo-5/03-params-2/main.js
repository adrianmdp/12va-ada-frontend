var initalStorage = {
    categories: [],
    operations: []
};
var init = function () {
    var storage = JSON.parse(localStorage.getItem('ahorradas-data'));
    if (!storage) {
        localStorage.setItem('ahorradas-data', JSON.stringify(initalStorage));
    }
};
init();
